"use server";

import * as z from "zod";
import { headers } from "next/headers";
import fs from "fs/promises";
import path from "path";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const RATE_LIMIT_MS = 12 * 60 * 60 * 1000; // 12 hours
const RATE_LIMIT_FILE = path.join(process.cwd(), ".rate-limit.json");

async function getClientIp(): Promise<string | null> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return h.get("x-real-ip") ?? "unknown";
}

async function isRateLimited(ip: string): Promise<boolean> {
  try {
    const raw = await fs.readFile(RATE_LIMIT_FILE, "utf-8");
    const data = JSON.parse(raw) as Record<string, number>;
    const lastSent = data[ip];
    if (!lastSent) return false;
    return Date.now() - lastSent < RATE_LIMIT_MS;
  } catch {
    return false;
  }
}

async function recordSubmission(ip: string): Promise<void> {
  let data: Record<string, number> = {};
  try {
    const raw = await fs.readFile(RATE_LIMIT_FILE, "utf-8");
    data = JSON.parse(raw) as Record<string, number>;
  } catch {
    // File doesn't exist yet
  }
  data[ip] = Date.now();
  await fs.writeFile(RATE_LIMIT_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function submitInquiry(
  prevState: { message: string; success: boolean },
  formData: FormData
) {
  const parsed = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map(issue => issue.message).join(' ');
    return {
      message: `Invalid form data. ${errorMessages}`,
      success: false,
    };
  }

  const ip = await getClientIp();
  if (ip && (await isRateLimited(ip))) {
    // Silently block duplicates within 12h without revealing the rate limit
    return {
      message: "Thank you, we will contact you soon.",
      success: true,
    };
  }

  // Send data to webhook
  try {
    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error(`Webhook returned ${response.status}`);
      }
    }
  } catch (error) {
    console.error('Failed to send to webhook:', error);
    // Continue with success message even if webhook fails
    // Don't fail the form submission if webhook is down
  }

  if (ip) {
    await recordSubmission(ip);
  }

  return {
    message: "Thank you, we will contact you soon.",
    success: true,
  };
}

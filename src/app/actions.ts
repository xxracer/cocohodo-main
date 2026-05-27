"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

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

  // Simulate network delay for better UX
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you for your inquiry! We will get back to you shortly.",
    success: true,
  };
}

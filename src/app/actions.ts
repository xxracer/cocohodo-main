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

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and simulate a success response.
  console.log("New Inquiry:", parsed.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    message: "Thank you for your inquiry! We will get back to you shortly.",
    success: true,
  };
}

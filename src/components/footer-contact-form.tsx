"use client";

import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitInquiry } from "@/app/actions";
import { Mail, CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const initialState = {
  message: "",
  success: false,
};

const STORAGE_KEY = "cocohodo_contact_sent";

export default function FooterContactForm() {
  const [state, formAction] = useActionState(submitInquiry, initialState);
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already submitted in this browser session / localStorage
    const alreadySent = localStorage.getItem(STORAGE_KEY);
    if (alreadySent) {
      setIsSubmitted(true);
    }
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Inquiry Sent!",
          description: state.message,
        });
        form.reset();
        setIsSubmitted(true);
        localStorage.setItem(STORAGE_KEY, "true");
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form]);

  if (isSubmitted) {
    return (
      <div id="footer-contact" className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 border border-accent/30 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-primary">Thank You!</h3>
            <p className="text-muted-foreground">
              Thank you, we will contact you soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="footer-contact">
      <h3 className="text-lg font-semibold text-foreground">Send Us a Message</h3>
      <p className="mt-2 text-sm text-muted-foreground">Have a question or just want to say hi? We&apos;d love to hear from you.</p>
      <Form {...form}>
        <form action={formAction} className="space-y-4 mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
            <Mail className="w-4 h-4 mr-2" />
            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

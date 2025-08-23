"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useDialog } from "@/hooks/useDialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ✅ Zod schema
const formSchema = z.object({
  full_name: z
    .string()
    .min(2, "Please provide your full name")
    .max(100, "Name is too long"),
  company_name: z
    .string()
    .min(2, "Please provide your company name")
    .max(100, "Name is too long"),
  email: z.email("Please enter a valid email address"),
  message: z.string().min(2, "Message must be at least 2 characters."),
});

const ContactUsForm = () => {
  const { onClose } = useDialog();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      company_name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xqalrojb", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast(<>Thanks for reaching out. We&apos;ll get back to you soon.</>);
        form.reset();
        onClose();
      } else {
        toast("Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      toast("Network error ❌");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company name</FormLabel>
              <FormControl>
                <Input placeholder="Company name" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Write your message..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-24 mx-auto hover:cursor-pointer"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactUsForm;

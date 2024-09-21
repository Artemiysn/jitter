'use client';

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  textContent: z
    .string()
    .min(5, {
      message: "Message must be at least 10 characters.",
    })
    .max(250, {
      message: "Message must not be longer than 250 characters.",
    }),
});

function PostForm() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="flex flex-row">
      <div className="basis-10 p-2"> userblock</div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 grow">
        <FormField
          control={form.control}
          name="textContent"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="What's happening?"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Additional text
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  );
}

export default PostForm;

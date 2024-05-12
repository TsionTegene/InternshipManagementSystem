"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
import { Slider } from "@/components/ui/slider";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";


const formSchema = z.object({
  price: z
    .number()
    .min(0, {
      message: "Price must be at least 0.",
    })
    .max(100, {
      message: "Price must be at most 100.",
    })
    .default(0),
});

export default function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: 0,
    },
  });

  return (
    <div className="max-w-2xl mx-auto my-12">
      <Form {...form}>
        <form
          onSubmit={() => {
            alert(form.getValues().price);
          }}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="price"
            render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel>Price - {value}</FormLabel>
                <FormControl>
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <span>
                        How would you rate the overall quality of the course?
                      </span>
                      <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 dark:text-gray-400">
                          1
                        </span>
                        <Slider
                          min={0}
                          max={100}
                          step={1}
                          defaultValue={[value]}
                          onValueChange={(vals) => {
                            onChange(vals[0]);
                          }}
                        />
                        <span className="text-gray-500 dark:text-gray-400">
                          5
                        </span>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </FormControl>
                <FormDescription>
                  This is a description for the price.
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

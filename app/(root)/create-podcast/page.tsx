"use client"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from '@/lib/utils'


 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const CreatePodcast = () => {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <section className='mt-10 flex flex-col'>
        <h1 className="text-20 font-bold text-white-1">Create podcast</h1>

         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
       className="mt-12 flex w-full flex-col">
        <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10 ">
            <FormField
          control={form.control}
          name="podcastTitle"
          render={({ field }) => (
            <FormItem className='flex flex-col gap-2.5'>
              <FormLabel className='text-16 text-white-1'>Username</FormLabel>
              <FormControl>
                <Input placeholder="Jake pro podcast" {...field} className='input-class focus-visible:ring-orange-1' />
              </FormControl>
              <FormMessage className='text-white-1' />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-2.5">
          <Label className='text-16 text-white-1 font-bold'>
            Select AI Voice
          </Label>
          <Select>
          <SelectTrigger className={cn('text-16 w-full border-none bg-black-1 text-gray-1')}>
          <SelectValue placeholder="Select AI Voice"
          className='placeholder:text-gray-1'
          />
          </SelectTrigger>
          <SelectContent className='text-16 border-none bg-black-1 font-bold text-white-1'>
            {["voice1","voice2"].map((voice)=>{
              return (
                <SelectItem className=''>

                </SelectItem>
              )
            })}
         </SelectContent>
         </Select>

        </div>
        </div>

        
      
        <Button type="submit">Submit</Button>
      </form>
    </Form>

    </section>
  )
}

export default CreatePodcast
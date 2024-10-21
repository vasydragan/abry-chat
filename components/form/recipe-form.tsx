"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { defaultValues, formSchema, type FormData } from "@/types/types"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Slider, SliderThumb } from "@/components/ui/slider"
import { RecipeFormLabel } from "@/components/form/label-form-field"
import {
  options,
  RadioGroupFormField,
} from "@/components/form/radio-group-form-field"
import { SelectFormField } from "@/components/form/select-form-field"
import { SwitchFormField } from "@/components/form/switch-form-field"
import { Icons } from "@/components/icons"

interface RecipeFormProps {
  onSubmit: (values: FormData, e: React.FormEvent) => void
  isLoading: boolean
}

export function RecipeForm({ onSubmit, isLoading }: RecipeFormProps) {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem>
              {showAdditionalFields && (
                <RecipeFormLabel
                  stepIndex="1"
                  labelIndex="What sneakers are you looking for?"
                />
              )}
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="e.g., Nike Air Jordan, Adidas Yeezy"
                    {...field}
                    onClick={() => setShowAdditionalFields(true)}
                    className="rounded-xl bg-primary text-secondary shadow-lg placeholder:text-secondary/70"
                  />
                  <Icons.input className="absolute right-2.5 top-3 size-4 text-secondary" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {showAdditionalFields && (
          <>
            <FormField
              control={form.control}
              name="cooking_time"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <RecipeFormLabel
                    stepIndex="2"
                    labelIndex="How far are you willing to travel?"
                  />
                  <FormControl>
                    <Slider
                      id="cooking_time"
                      aria-label="Choose distance"
                      defaultValue={[5]}
                      max={50}
                      step={5}
                      min={1}
                      onValueChange={field.onChange}
                      {...field}
                    >
                      <SliderThumb aria-label="Distance"></SliderThumb>
                    </Slider>
                  </FormControl>
                  <FormDescription className="flex flex-row-reverse">
                    📍 {field.value} km
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormItem>
              <RecipeFormLabel
                stepIndex="5"
                labelIndex="Any specific preferences?"
              />
              <SwitchFormField
                form={form}
                name="low_calori"
                label="Local Shop"
              />
              <SwitchFormField form={form} name="vegan" label="Store Chain" />
              <SwitchFormField form={form} name="paleo" label="Big Brands" />
            </FormItem>
            {isLoading ? (
              <Button disabled size="lg" className="w-full font-semibold">
                <Icons.loader
                  className="mr-2 size-4 animate-spin"
                  aria-hidden="true"
                />
                Get Results
              </Button>
            ) : (
              <Button type="submit" size="lg" className="w-full font-semibold">
                Get Results
                <Icons.generate className="ml-2 size-4" aria-hidden="true" />
              </Button>
            )}{" "}
          </>
        )}
      </form>
    </Form>
  )
}

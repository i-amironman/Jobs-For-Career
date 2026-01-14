"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  >
    {children}
  </AccordionPrimitive.Item>
))

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionHeader>
  <AccordionPrimitive.Content className="overflow-hidden text-sm data-state-closed:animate-accordion-up data-state-open:animate-accordion-down data-state-closed:animate-accordion-up">
    <div className="pb-4 pt-0">
      {children}
    </div>
  </AccordionPrimitive.Content>
)

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = AccordionPrimitive.Content

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
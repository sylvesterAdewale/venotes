import { cn } from '@/utils/cn';
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import React from 'react'
import { Icon } from '../Icons';

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "my-3",
      className
    )}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>>(({ children, className, ...props }, forwardedRef) => (
    <AccordionPrimitive.Header className="AccordionHeader">
      <AccordionPrimitive.Trigger
        className={cn('AccordionTrigger w-full flex justify-start items-center gap-x-3 text-base font-medium', className)}
        {...props}
        ref={forwardedRef}
      >
        <Icon.arrowDown className="AccordionChevron" aria-hidden />
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ));
  
  const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithRef<typeof AccordionPrimitive.Content>>(({ children, className, ...props }, forwardedRef) => (
    <AccordionPrimitive.Content
      className={cn('AccordionContent pl-4', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText text-grey">{children}</div>
    </AccordionPrimitive.Content>
  ));

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
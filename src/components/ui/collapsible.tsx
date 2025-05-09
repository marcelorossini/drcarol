"use client"

import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { cn } from "@/lib/utils"
import { MarkdownContent } from "./markdown-content"
import type { Element } from 'hast'

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger>
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleTrigger
    ref={ref}
    className={cn(
      "flex justify-between w-full py-2 items-center text-left",
      className
    )}
    {...props}
  >
    {children}
  </CollapsiblePrimitive.CollapsibleTrigger>
))
CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleContent
    ref={ref}
    className={cn(
      "py-2 overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
      className
    )}
    {...props}
  >
    <div className="">{children}</div>
  </CollapsiblePrimitive.CollapsibleContent>
))
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

interface CollapsibleItemProps {
  title: string
  content: string
  useMarkdown?: boolean
}

export function CollapsibleItem({ title, content, useMarkdown = true }: CollapsibleItemProps) {
  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger className="">
        <span className="text-xl font-medium">{title}</span>
        <span className="text-2xl">+</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="">
        {useMarkdown ? (
          <div className="text-lg text-gray-600">
            <MarkdownContent content={content} />
          </div>
        ) : (
          <p className="text-lg text-gray-600 lg:text-justify" dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
        )}
      </CollapsibleContent>
    </Collapsible>
  )
}

interface CollapsibleArrayProps {
  items: CollapsibleItemProps[]
}

export function CollapsibleList({ items }: CollapsibleArrayProps) {
  return (
    <div className="grid grid-cols-1 gap-2 divide-y divide-gray-300 w-full">
      {items.map((item, index) => (
        <CollapsibleItem
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  )
}

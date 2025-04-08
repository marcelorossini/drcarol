"use client"

import MarkdownPreview from "@uiw/react-markdown-preview"

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <MarkdownPreview 
      source={content} 
      style={{
        backgroundColor: 'transparent',
        color: 'inherit',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
      }}
      rehypeRewrite={(node, index, parent) => {
        if (node.type === 'element' && node.tagName === 'p') {
          node.properties = {
            ...node.properties,
            className: "text-justify"
          };
        }
        return node;
      }}
    />
  )
} 
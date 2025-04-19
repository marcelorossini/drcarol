"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { LucideIcon } from "lucide-react";

interface AboutCardProps {
    title: string;
    content: React.ReactNode;
    icon: LucideIcon;
    isOpen: boolean;
    onToggle: () => void;
}

export function AboutCard({ title, content, icon: Icon, isOpen, onToggle }: AboutCardProps) {
    return (
        <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 py-4 px-2 cursor-pointer group">
            <Collapsible open={isOpen} onOpenChange={onToggle}>
                <CollapsibleTrigger className="w-full">
                    <CardHeader className="w-full flex flex-row items-center justify-between gap-2 cursor-pointer">
                        <div className="flex items-center gap-2 flex-1 justify-between">
                            <Icon className="h-6 w-6 text-primary" />
                            <CardTitle className="text-xl font-bold text-primary flex-1">{title}</CardTitle>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {isOpen ? 'Recolher' : 'Expandir'}
                            </span>
                            <ChevronDown className={`h-5 w-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                    </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <CardContent className="pt-0">
                        {content}
                    </CardContent>
                </CollapsibleContent>
            </Collapsible>
        </Card>
    );
} 
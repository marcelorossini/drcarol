interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    defaultPadding?: boolean;
}

export const DEFAULT_PADDING = "p-8 lg:p-20";

export default function Section({ id, className, children, defaultPadding = true }: SectionProps) {
    return (
        <div id={id} className={`w-screen h-full ${defaultPadding ? DEFAULT_PADDING : ""} ${className}`}>
            {children}
        </div>
    )
}
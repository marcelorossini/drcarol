interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    defaultPadding?: boolean;
}

export default function Section({ id, className, children, defaultPadding = true }: SectionProps) {
    return (
        <div id={id} className={`w-screen h-full ${defaultPadding ? "p-8 lg:p-20" : ""} ${className}`}>
            {children}
        </div>
    )
}
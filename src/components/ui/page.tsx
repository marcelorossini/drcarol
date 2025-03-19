interface SectionProps {
    className?: string;
    children: React.ReactNode;
    title: React.ReactNode;
}

export default function Section({ className, children, title }: SectionProps) {
    return (
        <div className={`w-full h-full ${className}`}>
            {title}
            {children}
        </div>
    )
}
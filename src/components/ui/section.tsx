interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
    return (
        <div id={id} className={`w-screen h-full p-8 lg:p-20 ${className}`}>
            {children}
        </div>
    )
}
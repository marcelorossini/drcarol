interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
    return (
        <div id={id} className={`w-screen min-h-[100vh] lg:min-h-[80vh] h-full p-8 lg:p-20 ${className}`}>
            {children}
        </div>
    )
}
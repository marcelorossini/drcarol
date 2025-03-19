interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export default function Section({ className, children }: SectionProps) {
    return (
        <div className={`w-screen h-[100vh] p-8 ${className}`}>
            {children}
        </div>
    )
}
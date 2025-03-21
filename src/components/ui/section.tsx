interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
    return (
        <div id={id} className={`w-screen h-[100vh] p-8 ${className}`}>
            {children}
        </div>
    )
}
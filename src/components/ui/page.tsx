interface PageProps {
    className?: string;
    children: React.ReactNode;
    title: React.ReactNode;
}

export default function Page({ className, children, title }: PageProps) {
    return (
        <div className={`w-full h-full relative ${className}`}>
            {title}
            <div className="pt-4 h-full">
                {children}
            </div>
        </div>
    )
}
interface PageProps {
    className?: string;
    children: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
}

export default function Page({ className, children, title, subtitle }: PageProps) {
    return (
        <div className={`w-full h-full relative ${className}`}>
            {title && (
                <div className="display-contents relative z-15 font-caladea font-bold [&>h1]:text-4xl lg:[&>h1]:text-5xl">
                    {title}
                </div>
            )}
            {subtitle && (
                <div className="display-contents text-lg">
                    {subtitle}
                </div>
            )}
            <div className="pt-4 h-full">
                {children}
            </div>
        </div>
    )
}
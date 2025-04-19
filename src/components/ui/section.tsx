interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    defaultPadding?: boolean;
    hideOverflowX?: boolean;
}

export const DEFAULT_PADDING = "p-8 lg:p-20";

export default function Section({ id, className, children, defaultPadding = true, hideOverflowX = true }: SectionProps) {
    return (
        <div id={id} className={`w-screen h-full ${hideOverflowX ? 'overflow-x-hidden' : ''} ${defaultPadding ? DEFAULT_PADDING : ""} ${className}`}>
            {children}
        </div>
    )
}
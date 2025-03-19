export default function Page({ className, children }) {
    return (
        <div className={`w-screen h-[100vh] p-8 ${className}`}>
            {children}
        </div>
    )
}
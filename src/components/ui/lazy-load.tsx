'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyLoadProps {
    children: React.ReactNode
    threshold?: number
    className?: string
}

export default function LazyLoad({ children, threshold = 0.1, className }: LazyLoadProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            {
                threshold,
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [threshold])

    return (
        <div ref={ref} className={className}>
            {isVisible ? children : null}
        </div>
    )
} 
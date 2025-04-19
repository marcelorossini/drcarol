'use client'

import React from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedWrapperProps {
    children: React.ReactNode;
    index?: number;
    className?: string;
}

export default function AnimatedWrapper({ 
    children, 
    index = 0,
    className = ''
}: AnimatedWrapperProps) {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
} 
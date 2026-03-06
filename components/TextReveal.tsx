'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface TextRevealProps {
    text: string
    className?: string
}

export default function TextReveal({ text, className = "" }: TextRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0])
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40])

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ opacity, y }}>
                {text}
            </motion.div>
        </div>
    )
}

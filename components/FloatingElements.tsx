'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function FloatingElements() {
    // Create a container reference to track scroll progress
    const containerRef = useRef<HTMLDivElement>(null)

    // useScroll with target and offset to ensure correct tracking in fixed/absolute layouts
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Map the 0-1 scroll progress to movement and rotation
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -300])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45])
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45])

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-[-1]">
            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="absolute top-20 right-[10%] w-64 h-64 border border-amber-500/10 rounded-full blur-sm"
            />
            <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className="absolute top-[40%] left-[5%] w-96 h-96 border border-amber-500/5 rounded-[40px] blur-md"
            />
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[20%] right-[15%] w-32 h-32 bg-amber-500/5 rounded-xl blur-2xl"
            />
        </div>
    )
}

'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
    const [isHovered, setIsHovered] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth out the animation
    const springConfig = { damping: 25, stiffness: 200 }
    const springX = useSpring(mouseX, springConfig)
    const springY = useSpring(mouseY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.getAttribute('role') === 'button'

            setIsHovered(!!isInteractive)
        }

        const handleMouseLeave = () => {
            setIsVisible(false)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)
        document.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [mouseX, mouseY, isVisible])

    if (!isVisible) return null

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999]"
            style={{
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            <motion.div
                animate={{
                    scale: isHovered ? 2 : 1,
                    backgroundColor: isHovered ? 'rgba(251, 191, 36, 0.4)' : 'rgba(251, 191, 36, 0.2)',
                    boxShadow: isHovered
                        ? '0 0 40px rgba(251, 191, 36, 0.8)'
                        : '0 0 20px rgba(251, 191, 36, 0.4)',
                }}
                className="w-full h-full rounded-full blur-[2px] transition-colors duration-300"
            />
            <motion.div
                animate={{
                    scale: isHovered ? 0.5 : 1,
                }}
                className="absolute inset-0 m-auto w-1 h-1 bg-amber-400 rounded-full"
            />
        </motion.div>
    )
}

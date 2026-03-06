'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface BeforeAfterSliderProps {
    beforeImage: string
    afterImage: string
    beforeLabel?: string
    afterLabel?: string
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After"
}: BeforeAfterSliderProps) {
    const [isResizing, setIsResizing] = useState(false)
    const [sliderPos, setSliderPos] = useState(50)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMove = (e: MouseEvent | TouchEvent) => {
        if (!isResizing || !containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = 'touches' in e ? e.touches[0].clientX : e.clientX
        const relativeX = x - rect.left
        const position = (relativeX / rect.width) * 100

        setSliderPos(Math.min(maxPos, Math.max(minPos, position)))
    }

    const minPos = 0
    const maxPos = 100

    useEffect(() => {
        const onMove = (e: MouseEvent | TouchEvent) => handleMove(e)
        const onEnd = () => setIsResizing(false)

        window.addEventListener('mousemove', onMove)
        window.addEventListener('touchmove', onMove)
        window.addEventListener('mouseup', onEnd)
        window.addEventListener('touchend', onEnd)

        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('touchmove', onMove)
            window.removeEventListener('mouseup', onEnd)
            window.removeEventListener('touchend', onEnd)
        }
    }, [isResizing])

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none border border-white/10"
            onMouseDown={() => setIsResizing(true)}
            onTouchStart={() => setIsResizing(true)}
        >
            {/* After Image (Background) */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${afterImage})` }}
            />

            {/* Before Image (Foreground with Clip) */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-none"
                style={{
                    backgroundImage: `url(${beforeImage})`,
                    clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
                }}
            />

            {/* Labels */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-widest pointer-events-none">
                {beforeLabel}
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500/80 backdrop-blur-md rounded-full text-xs font-bold text-black uppercase tracking-widest pointer-events-none">
                {afterLabel}
            </div>

            {/* Slider Handle */}
            <div
                className="absolute inset-y-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] cursor-col-resize"
                style={{ left: `${sliderPos}%` }}
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <div className="flex gap-1.5">
                        <div className="w-1 h-3 bg-neutral-300 rounded-full" />
                        <div className="w-1 h-3 bg-neutral-300 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

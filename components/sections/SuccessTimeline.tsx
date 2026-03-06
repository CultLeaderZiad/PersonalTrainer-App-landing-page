'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const timelineSteps = [
    {
        day: "Day 1",
        title: "Baseline Audit",
        description: "Comprehensive metabolic and performance analysis to establish your current standing.",
        icon: "📊"
    },
    {
        day: "Week 4",
        title: "Metabolic Pivot",
        description: "Shift into high-efficiency fat burning while maintaining peak cognitive output.",
        icon: "⚡"
    },
    {
        day: "Week 8",
        title: "The Strength Cycle",
        description: "Structured resistance protocols to build functional lean mass and athletic power.",
        icon: "🏋️‍♂️"
    },
    {
        day: "Day 90",
        title: "Peak Optimization",
        description: "Achieve and sustain your ultimate performance baseline with executive-level longevity protocols.",
        icon: "🏆"
    }
]

export default function SuccessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <section ref={containerRef} className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        The Performance Journey
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        From Day 1 to peak optimization, here is the roadmap to your transformation.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border z-0">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="w-full h-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                        />
                    </div>

                    <div className="space-y-24">
                        {timelineSteps.map((step, index) => (
                            <TimelineItem
                                key={index}
                                step={step}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function TimelineItem({ step, index }: { step: any, index: number }) {
    const itemRef = useRef(null)
    const isEven = index % 2 === 0

    return (
        <motion.div
            ref={itemRef}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'} md:justify-between w-full`}
        >
            {/* Content for Desktop */}
            <div className={`hidden md:block w-[45%] ${isEven ? 'text-right' : 'order-last text-left'}`}>
                <div className="glass-card">
                    <span className="text-amber-500 font-mono font-bold text-sm tracking-widest uppercase mb-2 block">
                        {step.day}
                    </span>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>

            {/* Date Bullet */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-card border-4 border-amber-500 rounded-full flex items-center justify-center text-xl z-10 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                {step.icon}
            </div>

            {/* Spacing for Desktop */}
            <div className="hidden md:block w-[45%]" />

            {/* Mobile Content */}
            <div className="md:hidden flex-1 pl-16">
                <div className="glass-card">
                    <span className="text-amber-500 font-mono font-bold text-sm tracking-widest uppercase mb-2 block">
                        {step.day}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">
                        {step.description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

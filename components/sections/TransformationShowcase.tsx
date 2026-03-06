'use client'

import React from 'react'
import Container from '../Container'
import BeforeAfterSlider from '../BeforeAfterSlider'

export default function TransformationShowcase() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Data-Driven <span className="text-amber-500">Transformations</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            We don't just track workouts; we track biological evolution. Our protocols are designed to rebuild your metabolic engine, resulting in visible, sustainable change in 90 days or less.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                                    <span className="text-amber-500 text-xl">📉</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">12% Average Body Fat Reduction</h4>
                                    <p className="text-muted-foreground">Most clients lose significant abdominal fat while gaining lean mass.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                                    <span className="text-amber-500 text-xl">📈</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">35% Increase in Cognitive Focus</h4>
                                    <p className="text-muted-foreground">Metabolic optimization leads to stable energy levels and sharper mental clarity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <BeforeAfterSlider
                                beforeImage="/executive_before.png"
                                afterImage="/executive_after.png"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

'use client'

import React, { useState } from 'react'
import Container from '../Container'
import { Play, Volume2, User } from 'lucide-react'

const videos = [
    {
        id: 1,
        client: 'David R.',
        profession: 'Tech Executive',
        result: '-22lbs & Peak Energy',
        thumbnail: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80',
        videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', // Placeholder
    },
    {
        id: 2,
        client: 'Sarah M.',
        profession: 'Finance Director',
        result: 'Metabolic Reset Success',
        thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
        videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', // Placeholder
    },
    {
        id: 3,
        client: 'James L.',
        profession: 'CEO',
        result: 'Optimized Sleep & Focus',
        thumbnail: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80',
        videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4', // Placeholder
    }
]

export default function VideoTestimonials() {
    const [activeVideo, setActiveVideo] = useState<number | null>(null)

    return (
        <section className="py-24 bg-background relative overflow-hidden" id="video-testimonials">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,191,0,0.05)_0%,transparent_70%)] pointer-events-none" />

            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                        Client <span className="text-accent">Transformations</span>
                    </h2>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                        Real results from high-performing executives who optimized their physiology and reclaimed their edge.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="group relative rounded-2xl overflow-hidden glass-effect border border-accent/10 hover:border-accent/40 transition-all duration-500 shadow-xl"
                        >
                            {/* Thumbnail/Player Area */}
                            <div className="aspect-[9/16] relative overflow-hidden">
                                <img
                                    src={video.thumbnail}
                                    alt={`${video.client} transformation`}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/40 animate-pulse">
                                        <Play className="text-black fill-current w-6 h-6" />
                                    </div>
                                </div>

                                {/* Bottom Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="flex items-center gap-2 mb-2">
                                        <User className="w-4 h-4 text-accent" />
                                        <span className="font-bold text-white text-lg">{video.client}</span>
                                    </div>
                                    <p className="text-white/70 text-sm mb-1">{video.profession}</p>
                                    <p className="text-accent font-bold text-base">{video.result}</p>
                                </div>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full text-foreground/80 animate-bounce">
                        <Volume2 className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">Turn up the volume for these success stories</span>
                    </div>
                </div>
            </Container>
        </section>
    )
}

'use client'

import Link from 'next/link'
import Container from '../Container'
import CTAButton from '../CTAButton'

interface CTABannerProps {
  onCTAClick?: () => void
}

export default function CTABanner({ onCTAClick }: CTABannerProps) {
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-br from-secondary via-background to-secondary/50 overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-40" />

      <Container className="relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 animate-fade-in">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Last chance to join</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            <span className="text-balance">Transform Your Performance Today</span>
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-balance">
              150+ executives have already reclaimed their peak performance. Join the program and get your 12-week blueprint to becoming the elite athlete you were meant to be.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <CTAButton onClick={onCTAClick} size="lg" className="px-8 py-4 text-lg">
              Start Your Transformation - $197
            </CTAButton>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-accent text-accent hover:bg-accent/20 transition-all duration-300 font-bold text-lg group"
            >
              Get Personal Guidance
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

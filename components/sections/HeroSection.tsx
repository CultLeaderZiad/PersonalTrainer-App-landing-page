'use client'

import Container from '../Container'
import CTAButton from '../CTAButton'

interface HeroSectionProps {
  onCTAClick?: () => void
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Multiple Gradient Glows for Visual Impact */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[100px] opacity-60" />
      <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-[80px] opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[90px] opacity-30" />

      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center py-16 sm:py-24 px-4 sm:px-6">
          {/* Limited Spots Badge */}
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-2 rounded-full bg-accent/10 border border-accent/30 animate-fade-in glow-accent">
            <span className="w-2 h-2 bg-accent rounded-full pulse-slow" />
            <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">Limited Spots Available</span>
          </div>

          {/* Main Headline */}
          <div className="mb-8 sm:mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2 sm:mb-3 leading-tight">
              <span className="text-balance">Build the</span>
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
              <span className="text-balance">Executive Athlete</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up px-2" style={{ animationDelay: '0.2s' }}>
            <span className="text-balance">
              A 12-week blueprint for leaders to reclaim peak physical form without the 10-hour gym week.
            </span>
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 animate-fade-in-up px-2" style={{ animationDelay: '0.3s' }}>
            <CTAButton onClick={onCTAClick} size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
              Start Your Transformation
            </CTAButton>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mb-12 sm:mb-16 animate-fade-in-up px-2" style={{ animationDelay: '0.4s' }}>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">150+</div>
              <p className="text-xs sm:text-sm text-foreground/60">Executives Transformed</p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">4hrs</div>
              <p className="text-xs sm:text-sm text-foreground/60">Per Week Required</p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">12</div>
              <p className="text-xs sm:text-sm text-foreground/60">Week Program</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator animate-bounce">
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  )
}

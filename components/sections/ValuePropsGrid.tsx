'use client'

import Container from '../Container'
import GlassCard from '../GlassCard'

interface ValueProp {
  title: string
  description: string
  icon: string
}

const valueProps: ValueProp[] = [
  {
    title: 'Metabolic Engine',
    description: 'Unlock your body\'s optimal fat-burning potential with science-backed protocols tailored to your genetics and lifestyle.',
    icon: '⚡',
  },
  {
    title: 'Executive Fuel',
    description: 'Strategic nutrition timing and macro optimization designed for high-performance executives managing demanding schedules.',
    icon: '🎯',
  },
  {
    title: 'Performance Protocols',
    description: 'Strength training and conditioning programs that deliver results in minimal time—perfect for busy professionals.',
    icon: '💪',
  },
  {
    title: 'Recovery Mastery',
    description: 'Sleep optimization, stress management, and recovery techniques that compound your results 24/7.',
    icon: '😴',
  },
]

export default function ValuePropsGrid() {
  return (
    <section id="value-props" className="py-20 sm:py-32 bg-gradient-to-b from-background to-secondary/5">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-40" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center px-4 sm:px-0">
          <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mb-3 sm:mb-4 animate-fade-in-up">
            Four Pillars of Performance
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            <span className="text-balance">Comprehensive fitness optimization covering every aspect of elite performance.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-fade-in-up px-2 sm:px-0" style={{ animationDelay: '0.1s' }}>
          {valueProps.map((prop, index) => (
            <GlassCard 
              key={prop.title} 
              className="flex flex-col h-full p-6 sm:p-8 group hover:border-accent/50 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="text-5xl mb-6 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors">
                {prop.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {prop.title}
              </h3>
              
              {/* Description */}
              <p className="text-foreground/70 text-sm leading-relaxed flex-grow">
                {prop.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-300" />
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

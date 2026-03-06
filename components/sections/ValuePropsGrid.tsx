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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] px-2 sm:px-0">
          {/* Big Card - Metabolic Engine */}
          <div className="md:col-span-8 md:row-span-2 group">
            <GlassCard className="h-full relative overflow-hidden flex flex-col justify-end p-8 md:p-12 border-accent/10 hover:border-accent/40 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-accent/10 transition-colors" />
              <div className="relative z-10">
                <div className="text-6xl mb-6">{valueProps[0].icon}</div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">{valueProps[0].title}</h3>
                <p className="text-xl text-foreground/70 max-w-xl">{valueProps[0].description}</p>
              </div>
            </GlassCard>
          </div>

          {/* Medium Card - Executive Fuel */}
          <div className="md:col-span-4 md:row-span-1 group">
            <GlassCard className="h-full flex flex-col p-8 border-accent/10 hover:border-accent/40 transition-all duration-500">
              <div className="text-4xl mb-4">{valueProps[1].icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{valueProps[1].title}</h3>
              <p className="text-foreground/70 text-sm">{valueProps[1].description}</p>
            </GlassCard>
          </div>

          {/* Medium Card - Performance Protocols */}
          <div className="md:col-span-4 md:row-span-1 group">
            <GlassCard className="h-full flex flex-col p-8 border-accent/10 hover:border-accent/40 transition-all duration-500">
              <div className="text-4xl mb-4">{valueProps[2].icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{valueProps[2].title}</h3>
              <p className="text-foreground/70 text-sm">{valueProps[2].description}</p>
            </GlassCard>
          </div>

          {/* Wide Card - Recovery Mastery */}
          <div className="md:col-span-12 md:row-span-1 group">
            <GlassCard className="h-full flex flex-col md:flex-row items-center gap-8 p-8 border-accent/10 hover:border-accent/40 transition-all duration-500">
              <div className="text-6xl">{valueProps[3].icon}</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{valueProps[3].title}</h3>
                <p className="text-foreground/70 text-lg">{valueProps[3].description}</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  )
}

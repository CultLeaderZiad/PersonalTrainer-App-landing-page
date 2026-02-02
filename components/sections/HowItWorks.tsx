'use client'

import Container from '../Container'
import GlassCard from '../GlassCard'

interface Step {
  number: number
  title: string
  description: string
  icon: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Assessment & Design',
    description:
      'We conduct a comprehensive evaluation of your current fitness level, lifestyle, goals, and metabolic markers to create a personalized program.',
    icon: '📋',
  },
  {
    number: 2,
    title: 'Implementation & Support',
    description:
      'Execute your customized training, nutrition, and recovery protocols with ongoing coaching, adjustments, and accountability.',
    icon: '🚀',
  },
  {
    number: 3,
    title: 'Results & Optimization',
    description:
      'Track measurable progress, celebrate wins, and continuously optimize your program for sustained peak performance.',
    icon: '📈',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-gradient-to-b from-background via-secondary/5 to-background">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl opacity-40" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4 animate-fade-in-up">
            The Program
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            <span className="text-balance">Three Steps To Your Peak Performance</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            A proven framework designed to deliver measurable results in just 12 weeks.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-[calc(50%+1.5rem)] w-[calc(200%-3rem)] h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
              )}

              {/* Step Card */}
              <GlassCard className="relative z-10 p-8 group hover:border-accent/50 transition-all duration-300 h-full">
                {/* Step Number Badge */}
                <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-accent to-amber-500 text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                <div className="pt-2">
                  <div className="text-6xl mb-6 p-4 bg-accent/10 rounded-xl w-fit group-hover:bg-accent/20 transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* Bottom Accent Indicator */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-300" />
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

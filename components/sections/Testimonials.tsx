'use client'

import Container from '../Container'
import GlassCard from '../GlassCard'

interface Testimonial {
  name: string
  quote: string
  metric: string
  background: string
  initial: string
}

const testimonials: Testimonial[] = [
  {
    name: 'David Chen',
    quote:
      'Lost 18lbs while gaining muscle and improving my energy levels. The executive fuel approach changed how I approach nutrition.',
    metric: '-18 lbs',
    background: 'Tech Founder',
    initial: 'D',
  },
  {
    name: 'Sarah Mitchell',
    quote:
      'Increased my lift performance by 25% in 12 weeks. The protocols are scientifically sound and actually fit my busy schedule.',
    metric: '+25% Strength',
    background: 'C-Suite Executive',
    initial: 'S',
  },
  {
    name: 'Marcus Johnson',
    quote:
      'Sleep improved dramatically, recovery is faster, and I have more mental clarity throughout the day. Best investment in myself.',
    metric: '+2h Sleep',
    background: 'Investment Manager',
    initial: 'M',
  },
  {
    name: 'Jennifer Lee',
    quote:
      'Finally a program that understands the demands of a high-performance lifestyle. Results speak louder than any marketing.',
    metric: '6-pack Result',
    background: 'CEO',
    initial: 'J',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-gradient-to-b from-background to-secondary/5">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl opacity-40" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center px-4 sm:px-0">
          <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mb-3 sm:mb-4 animate-fade-in-up">
            Client Results
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            <span className="text-balance">Real Results From Real Executives</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto animate-fade-in-up px-2" style={{ animationDelay: '0.1s' }}>
            High-performing leaders who transformed their health while managing demanding schedules.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 animate-fade-in-up px-2 sm:px-0" style={{ animationDelay: '0.15s' }}>
          {testimonials.map((testimonial, index) => (
            <GlassCard 
              key={testimonial.name}
              className="flex flex-col p-6 sm:p-8 group hover:border-accent/50 transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Footer with Avatar and Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <img 
                  src="/avatar-placeholder.jpg" 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-accent/30"
                />
                <div className="flex-grow">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-foreground/50">{testimonial.background}</p>
                </div>
                <div className="text-right">
                  <p className="text-accent font-bold text-lg">{testimonial.metric}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

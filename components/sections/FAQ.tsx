'use client'

import { useState } from 'react'
import Container from '../Container'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How long does it take to see results?',
    answer:
      'Most clients report noticing changes in energy, recovery, and performance within 2-3 weeks. Physical transformations typically become visible around 6-8 weeks with consistent adherence to the program.',
  },
  {
    question: 'Can I do this while traveling frequently?',
    answer:
      'Absolutely. The program is designed for executives with demanding schedules. We provide airport-friendly nutrition guides, hotel workout options, and flexible recovery protocols that work anywhere.',
  },
  {
    question: 'What if I have previous injuries?',
    answer:
      'We conduct a thorough assessment of any injuries or limitations before creating your program. Every protocol is customizable to work around previous injuries while improving overall strength and mobility.',
  },
  {
    question: 'Is there ongoing support?',
    answer:
      'Yes. The program includes access to coaching resources, form checks, and regular program adjustments based on your progress. Think of it as having a fitness expert in your corner.',
  },
  {
    question: 'What\'s the investment?',
    answer:
      'The Marcus Thorne program is a one-time investment of $197, giving you lifetime access to all materials, protocols, and resources.',
  },
  {
    question: 'Do I need a gym membership?',
    answer:
      'Most of the program can be done at any gym, but many exercises can be adapted for home use with minimal equipment. We provide options for every training environment.',
  },
]

interface FAQItemComponentProps {
  item: FAQItem
  index: number
}

function FAQItemComponent({ item, index }: FAQItemComponentProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="border border-border/30 rounded-lg mb-4 overflow-hidden bg-card/20 hover:bg-card/40 transition-all duration-300 animate-fade-in-up group"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-6 group-hover:border-accent/30"
      >
        <h4 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors text-left">
          {item.question}
        </h4>
        <div className={`text-accent transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            className="w-5 h-5"
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
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 border-t border-border/20 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="text-foreground/70 p-6 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-32 bg-gradient-to-b from-background via-secondary/5 to-background">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl opacity-40" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center px-4 sm:px-0">
          <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mb-3 sm:mb-4 animate-fade-in-up">
            Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            <span className="text-balance">Frequently Asked Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto animate-fade-in-up px-2" style={{ animationDelay: '0.1s' }}>
            Get answers to everything about the Marcus Thorne 12-week program.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto px-2 sm:px-0">
          {faqs.map((item, index) => (
            <FAQItemComponent key={item.question} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

'use client'

import { useState } from 'react'

interface LearnMoreModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  const reasons = [
    {
      icon: '⏱️',
      title: 'Only 4 Hours Per Week',
      description: 'Fit your transformation into a busy executive schedule without sacrificing results.',
    },
    {
      icon: '🎯',
      title: 'Personalized Protocol',
      description: 'Custom training and nutrition plans built on your genetics, lifestyle, and goals.',
    },
    {
      icon: '📈',
      title: 'Proven Results',
      description: '150+ executives have transformed their bodies and performance in just 12 weeks.',
    },
    {
      icon: '🧠',
      title: 'Science-Backed',
      description: 'Every protocol is grounded in the latest research on metabolic optimization and recovery.',
    },
    {
      icon: '💪',
      title: 'Lifetime Access',
      description: 'Access the program materials and community forever. Updates included at no extra cost.',
    },
    {
      icon: '🤝',
      title: 'Expert Coaching',
      description: 'Direct access to Marcus Thorne for questions, accountability, and personalized guidance.',
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-card border border-accent/30 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-fade-in-up">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border/50 bg-card">
          <h2 className="text-2xl font-bold text-foreground">Why Join The Program?</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-background rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="p-4 bg-background/50 border border-border rounded-lg hover:border-accent/50 transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-3xl mb-3">{reason.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-foreground/70">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <button
              onClick={onClose}
              className="w-full px-6 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-amber-400 transition-colors"
            >
              Ready to Transform? Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

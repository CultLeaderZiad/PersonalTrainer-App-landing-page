'use client'

import React from "react"

import { useState } from 'react'
import Container from '../Container'
import CTAButton from '../CTAButton'
import { FileDown, CheckCircle2 } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Lead Magnet signup:', email)
    setSubmitted(true)
    setEmail('')
    // Simulate email delivery/download link appearance
    setTimeout(() => {
      // Logic could go here
    }, 1000)
  }

  return (
    <section className="py-20 sm:py-32 bg-secondary/5 relative overflow-hidden" id="lead-magnet">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <Container>
        <div className="max-w-4xl mx-auto glass-effect border border-accent/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                Free Download
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                The Executive <span className="text-accent">Performance</span> Blueprint
              </h2>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Download my 12-page guide on metabolic optimization, peak focus protocols, and fueling strategies designed specifically for high-stakes schedules.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'The 15-minute "Power Workout" protocol',
                  'Strategic fueling for 12-hour days',
                  'Biohacking sleep for deep recovery'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background/50 p-8 rounded-2xl border border-border/50">
              {submitted ? (
                <div className="text-center py-6 animate-fade-in">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileDown className="w-8 h-8 text-accent animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Check Your Inbox!</h3>
                  <p className="text-foreground/60 text-sm mb-6">
                    We've sent the blueprint to your email address. Dive in and start optimizing.
                  </p>
                  <CTAButton
                    variant="secondary"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="w-full"
                  >
                    Didn't get it? Try again
                  </CTAButton>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground mb-2">Where should we send your guide?</h3>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your professional email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                  <CTAButton type="submit" className="w-full py-4 text-base font-bold shadow-lg shadow-accent/20">
                    Send Me The Blueprint
                  </CTAButton>
                  <p className="text-[10px] text-center text-foreground/40">
                    By submitting, you agree to receive my performance newsletter. No spam, just science.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

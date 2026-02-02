'use client'

import React from "react"

import { useState } from 'react'
import Container from '../Container'
import CTAButton from '../CTAButton'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Newsletter signup:', email)
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-background to-secondary/10">
      <Container>
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            <span className="text-balance">Get Exclusive Fitness Insights</span>
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8">
            Join 5,000+ executives receiving weekly tips on optimization, training, and performance science.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 text-sm sm:text-base rounded-full bg-background border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <CTAButton type="submit" className="px-4 sm:px-6 py-3 text-sm sm:text-base">
              Subscribe
            </CTAButton>
          </form>

          {submitted && (
            <p className="mt-4 text-accent text-sm sm:text-base animate-fade-in">
              Thanks for subscribing! Check your email for confirmation.
            </p>
          )}

          <p className="text-xs text-foreground/50 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Container>
    </section>
  )
}

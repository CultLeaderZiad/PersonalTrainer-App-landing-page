'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import CTAButton from '@/components/CTAButton'
import GlassCard from '@/components/GlassCard'
import PaymentModal from '@/components/PaymentModal'
import LearnMoreModal from '@/components/LearnMoreModal'

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)
  const [learnMoreModalOpen, setLearnMoreModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Contact form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 bg-gradient-to-b from-background to-background">
          <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl opacity-40" />

          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
                <span className="text-balance">Get in Touch</span>
              </h1>
              <p className="text-lg text-foreground/70 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Have questions about the program? Want to discuss your fitness goals? Reach out to Marcus directly.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CTAButton onClick={() => setPaymentModalOpen(true)} size="lg">
                  Join the Program - $197
                </CTAButton>
                <button
                  onClick={() => setLearnMoreModalOpen(true)}
                  className="px-8 py-4 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent/20 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 sm:py-24 bg-background">
          <Container>
            <div className="max-w-2xl mx-auto">
              <GlassCard className="p-8 sm:p-12">
                {submitted && (
                  <div className="mb-6 p-4 bg-accent/20 border border-accent/40 rounded-lg text-accent animate-fade-in">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-input/50 border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-input/50 border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-lg bg-input/50 border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your fitness goals and how we can help..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-input/50 border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <CTAButton type="submit" size="lg" className="w-full">
                    Send Message
                  </CTAButton>

                  {/* Back Link */}
                  <Link
                    href="/"
                    className="block text-center text-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    ← Back to home
                  </Link>
                </form>
              </GlassCard>
            </div>
          </Container>
        </section>
      </main>
      <Footer onBackToTop={handleBackToTop} />
      <PaymentModal isOpen={paymentModalOpen} onClose={() => setPaymentModalOpen(false)} />
      <LearnMoreModal isOpen={learnMoreModalOpen} onClose={() => setLearnMoreModalOpen(false)} />
    </>
  )
}

'use client'

import React from "react"

import { useState } from 'react'
import CTAButton from './CTAButton'

interface CTAModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CTAModal({ isOpen, onClose }: CTAModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '' })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative glass-card max-w-md w-full p-8 animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors p-2"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <h2 className="text-2xl font-bold text-foreground mb-2">Transform Your Fitness</h2>
        <p className="text-foreground/60 mb-6">Join elite performers in the Marcus Thorne program.</p>

        {/* Price */}
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
          <p className="text-sm text-foreground/60">Investment</p>
          <p className="text-3xl font-bold text-accent">$197</p>
          <p className="text-xs text-foreground/50 mt-1">One-time payment</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-input/50 border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              className="w-full px-4 py-2 rounded-lg bg-input/50 border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(555) 000-0000"
              className="w-full px-4 py-2 rounded-lg bg-input/50 border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>

          <CTAButton type="submit" size="lg" className="w-full">
            Complete Purchase
          </CTAButton>

          <button
            type="button"
            onClick={onClose}
            className="w-full px-4 py-2 rounded-lg border border-border text-foreground hover:bg-border/20 transition-all"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

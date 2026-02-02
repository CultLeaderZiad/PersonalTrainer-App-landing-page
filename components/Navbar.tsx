'use client'

import { useState } from 'react'
import Link from 'next/link'
import CTAButton from './CTAButton'
import Container from './Container'
import CountdownTimer from './CountdownTimer'
import LanguageSwitcher from './LanguageSwitcher' // Import LanguageSwitcher

interface NavbarProps {
  onCTAClick?: () => void
}

export default function Navbar({ onCTAClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en') // Declare language and setLanguage

  const navLinks = [
    { label: 'About', href: '#value-props' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-accent/10 bg-background/90 backdrop-blur-xl slide-in-down shadow-lg shadow-amber-500/5">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-0">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg sm:text-xl text-foreground hover:text-accent transition-colors group">
            <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-amber-300 transition-all">
              Marcus Thorne
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground/70 hover:text-accent transition-colors relative group text-sm"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <CountdownTimer />
            <CTAButton onClick={onCTAClick} size="md">
              Buy Now
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-accent transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-accent transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-accent transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 px-4 animate-fade-in border-t border-border/30">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-foreground/70 hover:text-accent transition-colors py-3 px-3 rounded-lg hover:bg-background/50"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
              <CTAButton onClick={() => { onCTAClick?.(); setMobileMenuOpen(false); }} size="md" className="w-full mt-2">
                Buy Now
              </CTAButton>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}

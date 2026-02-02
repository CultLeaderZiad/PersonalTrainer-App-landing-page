'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAModal from '@/components/CTAModal'
import PaymentModal from '@/components/PaymentModal'
import LearnMoreModal from '@/components/LearnMoreModal'
import HeroSection from '@/components/sections/HeroSection'
import ValuePropsGrid from '@/components/sections/ValuePropsGrid'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTABanner from '@/components/sections/CTABanner'
import Newsletter from '@/components/sections/Newsletter'

export default function Home() {
  const [ctaModalOpen, setCtaModalOpen] = useState(false)
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)
  const [learnMoreModalOpen, setLearnMoreModalOpen] = useState(false)

  const handleCTAClick = () => {
    console.log('[v0] CTA button clicked')
    setPaymentModalOpen(true)
  }

  const handleLearnMore = () => {
    console.log('[v0] Learn more clicked')
    setLearnMoreModalOpen(true)
  }

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar onCTAClick={handleCTAClick} />
      <main className="w-full">
        <HeroSection onCTAClick={handleCTAClick} />
        <ValuePropsGrid />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <CTABanner onCTAClick={handleCTAClick} />
      </main>
      <Footer onBackToTop={handleBackToTop} />
      <PaymentModal isOpen={paymentModalOpen} onClose={() => setPaymentModalOpen(false)} />
      <LearnMoreModal isOpen={learnMoreModalOpen} onClose={() => setLearnMoreModalOpen(false)} />
      <CTAModal isOpen={ctaModalOpen} onClose={() => setCtaModalOpen(false)} />
    </>
  )
}

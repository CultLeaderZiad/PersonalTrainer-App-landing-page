import type { Metadata } from 'next'
import ContactClient from './contact-client'

export const metadata: Metadata = {
  title: 'Contact Marcus Thorne | Elite Fitness Coaching',
  description: 'Get in touch with Marcus Thorne for personalized fitness coaching and performance optimization.',
}

export default function ContactPage() {
  return <ContactClient />
}

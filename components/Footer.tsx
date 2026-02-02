'use client'

import Link from 'next/link'
import Container from './Container'

interface FooterProps {
  onBackToTop?: () => void
}

export default function Footer({ onBackToTop }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-background py-8 sm:py-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 px-4 sm:px-0">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-base sm:text-lg text-foreground mb-2">Marcus Thorne</h3>
            <p className="text-foreground/60 text-xs sm:text-sm">
              Elite fitness coaching for peak performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#value-props" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="flex flex-col items-start md:items-end justify-center">
            <button
              onClick={onBackToTop}
              className="text-accent hover:text-amber-400 transition-colors font-semibold text-sm hover:underline"
            >
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-0 text-center sm:text-left">
          <p className="text-foreground/50 text-xs sm:text-sm">
            © {currentYear} Marcus Thorne Fitness. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-foreground/50 hover:text-accent transition-colors text-xs sm:text-sm">
              Privacy
            </a>
            <a href="#" className="text-foreground/50 hover:text-accent transition-colors text-xs sm:text-sm">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

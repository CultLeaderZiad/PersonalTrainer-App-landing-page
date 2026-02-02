'use client'

import { useState } from 'react'

interface LanguageSwitcherProps {
  currentLanguage?: 'en' | 'ar'
  onLanguageChange?: (lang: 'en' | 'ar') => void
}

export default function LanguageSwitcher({
  currentLanguage = 'en',
  onLanguageChange,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ]

  const current = languages.find((lang) => lang.code === currentLanguage)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 border border-border hover:border-accent transition-colors text-foreground text-sm"
      >
        <span>{current?.flag}</span>
        <span>{current?.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-40 animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange?.(lang.code as 'en' | 'ar')
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                currentLanguage === lang.code
                  ? 'bg-accent text-accent-foreground'
                  : 'text-foreground hover:bg-background'
              }`}
            >
              <span>{lang.flag} {lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

'use client'

import React from "react"

import { cn } from '@/lib/utils'

interface CTAButtonProps {
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
}

export default function CTAButton({
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  type = 'button',
}: CTAButtonProps) {
  const baseStyles = 'font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background relative overflow-hidden group'

  const variants = {
    primary:
      'bg-accent text-accent-foreground hover:bg-amber-400 shadow-lg shadow-amber-500/20',
    secondary:
      'bg-transparent border-2 border-accent text-accent hover:bg-accent/15 hover:border-amber-300',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
    >
      {/* Shine Effect */}
      <div className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700" />
      <span className="relative">{children}</span>
    </button>
  )
}

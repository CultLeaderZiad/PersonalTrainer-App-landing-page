'use client'

import React from "react"

import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function GlassCard({
  children,
  className,
  onClick,
}: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'glass-card p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.02] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-accent/20 transition-all duration-500',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}

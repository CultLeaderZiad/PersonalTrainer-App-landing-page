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
        'glass-card p-6 sm:p-8 rounded-2xl backdrop-blur-xl border border-accent/20 bg-white/5 hover:bg-white/10 transition-all duration-300',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}

'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in'

interface Props {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
  once?: boolean
}

export default function AnimateOnScroll({ children, animation = 'fade-up', delay = 0, className = '', once = true }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  const animClasses: Record<AnimationType, string> = {
    'fade-up': 'translate-y-8 opacity-0',
    'fade-in': 'opacity-0',
    'slide-left': '-translate-x-12 opacity-0',
    'slide-right': 'translate-x-12 opacity-0',
    'scale-in': 'scale-95 opacity-0',
  }

  const animActive: Record<AnimationType, string> = {
    'fade-up': 'translate-y-0 opacity-100',
    'fade-in': 'opacity-100',
    'slide-left': 'translate-x-0 opacity-100',
    'slide-right': 'translate-x-0 opacity-100',
    'scale-in': 'scale-100 opacity-100',
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? animActive[animation] : animClasses[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function StaggerChildren({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export function StaggerItem({ children, index = 0, animation = 'fade-up' as AnimationType, className = '' }: { children: ReactNode; index?: number; animation?: AnimationType; className?: string }) {
  return (
    <AnimateOnScroll animation={animation} delay={index * 120} className={className}>
      {children}
    </AnimateOnScroll>
  )
}

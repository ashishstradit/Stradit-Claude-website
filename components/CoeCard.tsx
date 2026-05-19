'use client'

import Link from 'next/link'
import { useState, type CSSProperties } from 'react'
import AnimCanvas from '@/components/AnimCanvas'

type CoeCardProps = {
  href: string
  size: 'lg' | 'md' | 'sm'
  revealClass?: string
  style?: CSSProperties
  visualStyle?: CSSProperties
  badge: string
  chips: string[]
  theme: 'ai' | 'data' | 'cyber' | 'cloud' | 'testing' | 'gcc'
  animKey: string
  title: string
  desc: string
  highlights: string[]
  cta: string
}

export default function CoeCard({
  href,
  size,
  revealClass = '',
  style,
  visualStyle,
  badge,
  chips,
  theme,
  animKey,
  title,
  desc,
  highlights,
  cta,
}: CoeCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <article
      className={`coe-card coe-card--${size} reveal ${revealClass}${open ? ' coe-card--open' : ''}`.trim()}
      style={style}
    >
      {/* Canvas visual — navigates on click */}
      <Link href={href} className="coe-card__visual" style={visualStyle} tabIndex={-1} aria-hidden="true">
        <span className="coe-card__badge">{badge}</span>
        <span className="coe-card__chip">
          {chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </span>
        <AnimCanvas theme={theme} animKey={animKey} />
      </Link>

      {/* Text body */}
      <div className="coe-card__body">
        <div className="coe-card__title">{title}</div>
        <div className="coe-card__desc">{desc}</div>

        {/* 4 bullet highlights */}
        <ul className="coe-card__highlights" aria-label="Key capabilities">
          {highlights.map((item) => (
            <li key={item} className="coe-card__highlight">
              <span aria-hidden="true">→</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile-only toggle button */}
        <button
          type="button"
          className="coe-card__toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Hide highlights ↑' : 'Show highlights ↓'}
        </button>

        <Link href={href} className="coe-card__cta">
          {cta}
        </Link>
      </div>
    </article>
  )
}

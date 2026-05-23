'use client'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  sectionStyle?: React.CSSProperties
  eyebrowIdx?: string
  eyebrowLabel?: string
  left: React.ReactNode
  tag: string
  cardTitle: React.ReactNode
  cardDesc: string
  stats: [string, string][]
  href?: string
  ctaLabel?: string
  children?: React.ReactNode
}

export default function CaseStudySection({
  sectionStyle,
  eyebrowIdx = '02',
  eyebrowLabel = 'Client Impact',
  left,
  tag,
  cardTitle,
  cardDesc,
  stats,
  href,
  ctaLabel = 'Read Case Study',
  children,
}: Props) {
  const [open, setOpen] = useState(false)
  const rendersInlineDetails = !href && Boolean(children)

  return (
    <>
      <section
        className="section"
        style={sectionStyle ?? { background: 'var(--ink-1)', borderTop: '1px solid var(--line)' }}
      >
        <div className="container">
          <div className="section-eyebrow reveal">
            <span className="idx">{eyebrowIdx}</span>
            <span>{eyebrowLabel}</span>
          </div>
          <div className="two-col">
            <div className="reveal reveal-from-left reveal-delay-1">{left}</div>
            <div className="cs-card reveal reveal-from-right reveal-delay-2" style={{ cursor: 'default', textDecoration: 'none', color: 'inherit' }}>
              <div className="cs-card__tag">{tag}</div>
              <div className="cs-card__title">{cardTitle}</div>
              <p className="cs-card__desc">{cardDesc}</p>
              <div className="cs-card__stats">
                {stats.map(([v, l]) => (
                  <div key={l}>
                    <div className="cs-card__stat-v">{v}</div>
                    <div className="cs-card__stat-l">{l}</div>
                  </div>
                ))}
              </div>
              {href ? (
                <Link href={href} className="cs-inline-toggle cs-inline-toggle--closed">
                  {ctaLabel}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              ) : rendersInlineDetails ? (
                <button
                  onClick={() => setOpen(p => !p)}
                  className={`cs-inline-toggle ${open ? 'cs-inline-toggle--open' : 'cs-inline-toggle--closed'}`}
                >
                  {open ? (
                    <>
                      Hide Case Study
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                    </>
                  ) : (
                    <>
                      {ctaLabel}
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </>
                  )}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {rendersInlineDetails && (
        <div className={`cs-inline-expand ${open ? 'cs-inline-expand--open' : ''}`}>
          <div className="cs-inline-expand__inner">{children}</div>
        </div>
      )}
    </>
  )
}

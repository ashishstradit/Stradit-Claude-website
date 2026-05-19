'use client'
import { useState, useRef, useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

export default function CaseStudyToggle({ children }: Props) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [children])

  const toggle = () => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
    setOpen(prev => !prev)
  }

  return (
    <>
      {/* ── TOGGLE TRIGGER ── */}
      <section className="section cs-trigger" style={{ borderTop: '1px solid var(--line)', background: 'var(--ink-1)', padding: '56px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          {!open && (
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)' }}>
              Full case study details below
            </p>
          )}
          <button onClick={toggle} className={`btn cs-toggle-btn ${open ? 'cs-toggle-btn--open' : 'btn--primary'}`}>
            {open ? (
              <>
                Hide Case Study
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
              </>
            ) : (
              <>
                Read Case Study
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </>
            )}
          </button>
        </div>
      </section>

      {/* ── COLLAPSIBLE CONTENT ── */}
      <div
        className="cs-expand"
        style={{
          maxHeight: open ? `${height}px` : '0px',
        }}
      >
        <div ref={contentRef}>
          {children}
        </div>
      </div>
    </>
  )
}

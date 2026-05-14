'use client'
import Link from 'next/link'
import { useState } from 'react'
import BrandIcon from './BrandIcon'

export default function Nav({ activePage }: { activePage?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="container nav__inner">
        <Link href="/" className="nav__brand" aria-label="Stradit home" onClick={() => setOpen(false)}>
          <BrandIcon size={28} />
          <span className="brand-strad">STRAD</span><span className="brand-it">IT</span>
        </Link>

        <div className={`nav__links${open ? ' open' : ''}`}>
          <Link href="/about" className={activePage === 'about' ? 'active' : ''} onClick={() => setOpen(false)}>About Us</Link>
          <div className="nav__menu">
            <Link href="/coe" className={activePage === 'coe' ? 'active' : ''} onClick={() => setOpen(false)}>Center of Excellence ▾</Link>
            <div className="nav__submenu">
              <Link href="/coe/ai" onClick={() => setOpen(false)}>Applied Artificial Intelligence<small>LLM workflows · Agents · Governance</small></Link>
              <Link href="/coe/data" onClick={() => setOpen(false)}>Data Analytics — Applied AI<small>Unified data · Decision intelligence</small></Link>
              <Link href="/coe/cyber" onClick={() => setOpen(false)}>Cyber Security — Applied AI<small>Threat intelligence · Compliance</small></Link>
              <Link href="/coe/cloud" onClick={() => setOpen(false)}>Cloud & Infrastructure — Applied AI<small>Migration · Reliability · FinOps</small></Link>
              <Link href="/coe/testing" onClick={() => setOpen(false)}>Automated AI Testing<small>QA automation · Resilience</small></Link>
              <Link href="/gcc" onClick={() => setOpen(false)}>Global Capability Center (GCC)<small>GCC setup · Talent · Delivery governance</small></Link>
            </div>
          </div>
          <Link href="/gcc" className={activePage === 'gcc' ? 'active' : ''} onClick={() => setOpen(false)}>Global Capability Center</Link>
          <Link href="/startit" className={activePage === 'startit' ? 'active' : ''} onClick={() => setOpen(false)}>StartIT</Link>
          <Link href="/careers" className={activePage === 'careers' ? 'active' : ''} onClick={() => setOpen(false)}>Careers</Link>
        </div>

        <div className="nav__right">
          <Link href="/contact" className="btn btn--primary" onClick={() => setOpen(false)}>
            Contact Us
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
          <button className="nav__toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            <span style={open ? {transform:'rotate(45deg) translate(5px,5px)'} : {}} />
            <span style={open ? {opacity:0} : {}} />
            <span style={open ? {transform:'rotate(-45deg) translate(5px,-5px)'} : {}} />
          </button>
        </div>
      </div>
    </nav>
  )
}

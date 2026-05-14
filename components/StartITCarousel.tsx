'use client'
import { useEffect, useRef, useState } from 'react'

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=90',
    alt: 'Team collaboration',
    caption: 'Turning enterprise teams into confident AI builders — one cohort at a time',
    tag: 'StartIT · AI Training · Cohort Model',
  },
  {
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=90',
    alt: 'Workshop learning',
    caption: 'Hands-on labs, mentorship, and a clear path from AI concepts to production outcomes',
    tag: 'Guided Learning · Hands-On Labs',
  },
  {
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=90',
    alt: 'Strategy session',
    caption: 'From AI Curious to AI Certified in 8 weeks — mapped to enterprise roles',
    tag: '8-Week Sprint · Role-Based Tracks',
  },
  {
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1800&q=90',
    alt: 'Tech professional learning',
    caption: 'Five tracks covering Literacy, Strategy, Technical, Applied, and Quantum AI',
    tag: '5 Tracks · Every Role · Every Depth',
  },
  {
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1800&q=90',
    alt: 'Enterprise training',
    caption: 'Backed by StradIT\'s Centers of Excellence — grounded in domain realities',
    tag: 'CoE-Backed · Domain-Grounded',
  },
  {
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=90',
    alt: 'Team upskilling',
    caption: 'Portfolio-ready, interview-ready, and future-proofed for the age of AI',
    tag: 'Capstone Output · Career-Ready',
  },
]

const INTERVAL = 5000

export default function StartITCarousel() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const startRef = useRef<number>(Date.now())

  const goTo = (i: number) => {
    setActive(i)
    setProgress(0)
    startRef.current = Date.now()
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const elapsed = Date.now() - startRef.current
      const pct = Math.min((elapsed / INTERVAL) * 100, 100)
      setProgress(pct)
      if (elapsed >= INTERVAL) {
        startRef.current = Date.now()
        setActive(a => (a + 1) % slides.length)
        setProgress(0)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div style={{position:'absolute',inset:0,zIndex:0,overflow:'hidden'}}>
        {slides.map((s, i) => (
          <div key={i} style={{
            position:'absolute',inset:0,
            opacity: active === i ? 1 : 0,
            transition:'opacity 1.4s cubic-bezier(0.4,0,0.2,1)',
            pointerEvents: active === i ? 'auto' : 'none',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.img} alt={s.alt} loading={i === 0 ? 'eager' : 'lazy'}
              style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 40%',display:'block',filter:'brightness(0.5) saturate(1.2)'}} />
            <div style={{position:'absolute',inset:0,background:'linear-gradient(115deg,rgba(255,122,61,0.28) 0%,rgba(255,122,61,0.06) 35%,transparent 60%),linear-gradient(255deg,rgba(76,200,255,0.2) 0%,rgba(76,200,255,0.05) 35%,transparent 60%)'}} />
            <div style={{
              position:'absolute',bottom:'76px',right:'clamp(20px,4vw,56px)',
              textAlign:'right',maxWidth:'320px',
              opacity: active === i ? 1 : 0,
              transform: active === i ? 'translateY(0)' : 'translateY(10px)',
              transition:'opacity .7s ease .5s, transform .7s ease .5s',
              pointerEvents:'none',
            }}>
              <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(12px,1vw,14px)',color:'rgba(255,255,255,0.88)',letterSpacing:'-0.01em',lineHeight:'1.35',borderRight:'2px solid var(--accent)',paddingRight:'14px',marginBottom:'8px'}}>{s.caption}</div>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--accent)'}}>{s.tag}</div>
            </div>
          </div>
        ))}
        {/* Vignette */}
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 55% 100% at 15% 50%,rgba(6,9,18,0.88) 0%,rgba(6,9,18,0.45) 40%,transparent 70%),linear-gradient(180deg,transparent 0%,rgba(6,9,18,0.3) 70%,var(--ink-0) 100%)',pointerEvents:'none',zIndex:1}} />
      </div>

      {/* Dot nav */}
      <div style={{position:'absolute',bottom:'88px',left:'50%',transform:'translateX(-50%)',zIndex:5,display:'flex',gap:'8px',alignItems:'center'}}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: active === i ? '22px' : '6px',height:'6px',borderRadius:'3px',
            background: active === i ? 'var(--accent)' : 'rgba(255,255,255,0.28)',
            border:'none',padding:0,cursor:'pointer',transition:'all .35s ease',
            boxShadow: active === i ? '0 0 10px rgba(255,122,61,0.5)' : 'none',
          }} />
        ))}
      </div>

      {/* Progress bar */}
      <div style={{position:'absolute',bottom:0,left:0,height:'2px',width:`${progress}%`,background:'linear-gradient(90deg,var(--accent),var(--cyan))',zIndex:6,transition:'width 0.05s linear'}} />
    </>
  )
}

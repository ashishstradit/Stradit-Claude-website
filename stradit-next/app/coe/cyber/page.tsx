import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'

export const metadata = { title: 'Cyber Security — Applied AI — StradIT' }

const cards = [
  {
    title: 'Cybersecurity Advisory',
    desc: 'Construct a resilient cybersecurity ecosystem tailored to unique risk profile with AI-informed prioritization at every step.',
    items: [
      'Identify high-risk assets and prioritize defense by business impact',
      'Build security frameworks aligned with industry and organizational objectives',
      'Strengthen compliance and audit readiness for GDPR, HIPAA, ISO 27001, and more',
    ],
  },
  {
    title: 'Cybersecurity Engineering',
    desc: 'Protect digital assets from day one using AI-powered, scalable, and compliant security frameworks.',
    items: [
      'Deploy security controls that reduce risk from day one',
      'Apply tailored protection across apps, data, networks, and identities',
      'Build cloud-native and hybrid architectures with zero-trust enforcement',
    ],
  },
  {
    title: 'Managed Cybersecurity',
    desc: 'Monitor, manage, and mitigate threats using AI-driven managed cybersecurity services. Centralize operations to reduce tool sprawl and eliminate blind spots.',
    items: [
      'Run 24/7 monitoring and incident response driven by real-time intelligence',
      'Scale managed security to match your business size, industry, and regulations',
    ],
  },
]

export default function CoeCyberPage() {
  return (
    <>
      <Nav activePage="coe" />

      {/* HERO */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="cyber" /></div>
        <div className="container hero__inner">
          <div className="hero__eyebrow eyebrow">Center of Excellence · Cyber Security</div>
          <h1 className="hero__title">Cyber Security — <em>Applied AI</em></h1>
          <p className="hero__sub">Securing Today for Quick Scalability Tomorrow</p>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.65',maxWidth:'600px',marginBottom:'36px'}}>
            At StradIT, we deliver proactive, AI-enhanced, enterprise-grade resilience that grows with you. Our managed cybersecurity services cut risk, develop future-proof policies, and protect your most critical systems to drive business continuity and confidence.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Strengthen Your Security Posture
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe" className="btn btn--ghost">All practices</Link>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-cell"><div className="hero__meta-v">24/7</div><div className="hero__meta-k">Threat Monitoring</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">40% Reduced</div><div className="hero__meta-k">Attack Surface</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">50% Faster</div><div className="hero__meta-k">Containment</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Reference</div><div className="hero__meta-v" style={{fontSize:'12px',lineHeight:'1.4'}}><small>About — Social Driver</small></div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">Defense · Nominal</span>
          <span className="hero__hud-grid">
            <span>EVENTS <b>3.2B/d</b></span><span>BLOCKED <b>14.7K</b></span><span>INCIDENTS <b>0</b></span>
          </span>
          <span>Cyber · v2026.05</span>
        </div>
      </header>

      {/* CYBERSECURITY ENGINEERED FOR BUSINESS RESILIENCE */}
      <section className="section" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Our Approach</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              Cybersecurity Engineered for{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Business Resilience</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              StradIT unites AI-driven threat modeling, precise engineering, and relentless managed defense to safeguard mission-critical assets, reduce business risk, and empower readiness for rapid change.
            </p>
          </div>
          <div className="cards-3">
            {cards.map((card, i) => (
              <div key={card.title} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',padding:'36px 28px',display:'flex',flexDirection:'column',gap:'16px'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',color:'var(--accent)'}}>0{i+1}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'20px',fontWeight:500,letterSpacing:'-0.02em'}}>{card.title}</div>
                <p style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.65',flex:1}}>{card.desc}</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'6px'}}>
                  {card.items.map(item => (
                    <li key={item} style={{fontSize:'13px',color:'var(--text-1)',display:'flex',gap:'8px'}}>
                      <span style={{color:'var(--accent)',flexShrink:0}}>→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link href="/contact" className="btn btn--ghost">
            Deploy 24/7 Managed Defense
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      {/* SECURITY WINS FROM THE FRONT LINES */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">02</span><span>Client Impact</span></div>
          <div className="two-col">
            <div>
              <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'20px'}}>
                Learn How Security Wins From{' '}
                <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>The Front Lines</em>
              </h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'32px'}}>
                Cybersecurity should feel like stability, not constant fire drills. The stories below show how teams like yours reduced noise, contained threats faster, and built a security posture that holds up on the toughest days.
              </p>
              <Link href="/contact" className="btn btn--primary">
                Strengthen Your Security Posture
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>

            {/* Case Study Card */}
            <Link href="/case-studies/cyber-resiliency" className="cs-card">
              <div className="cs-card__tag">Case Study · Cyber Resiliency</div>
              <div className="cs-card__title">
                Zero Data Loss Readiness<br />Across 300+ Applications
              </div>
              <p className="cs-card__desc">
                How StradIT helped a global asset management firm build bulletproof cyber resiliency — assessing, testing, and documenting every application with tailored playbooks and automated recovery tools.
              </p>
              <div className="cs-card__stats">
                {[['300+','Apps Covered'],['Zero','Data Loss'],['2+ yrs','Partnership']].map(([v,l]) => (
                  <div key={l}>
                    <div className="cs-card__stat-v">{v}</div>
                    <div className="cs-card__stat-l">{l}</div>
                  </div>
                ))}
              </div>
              <div className="cs-card__cta">Read Case Study →</div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

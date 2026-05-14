import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'

export const metadata = { title: 'Cloud & Infrastructure — Applied AI — StradIT' }

const cards = [
  {
    title: 'End-to-End Consulting & Service Delivery',
    desc: 'Identify needs, understand the utility of different cloud infrastructures, and make informed decisions.',
    items: [
      'Cloud readiness assessment and a clear migration roadmap',
      'Architectures balancing performance, cost, and flexibility across platforms',
      'Legacy modernization planning to move from outdated systems to cloud',
    ],
  },
  {
    title: 'Managed Services & Ongoing Support',
    desc: 'Keep your cloud reliable, optimized, and secure over the long term through AI-managed cloud services.',
    items: [
      'Proactive monitoring to spot issues before they escalate',
      'Continuous optimization across workloads, apps, and infrastructure',
      '24/7 support for mission-critical systems and business continuity',
    ],
  },
]

export default function CoeCloudPage() {
  return (
    <>
      <Nav activePage="coe" />

      {/* HERO */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="cloud" /></div>
        <div className="container hero__inner">
          <div className="hero__eyebrow eyebrow">Center of Excellence · Cloud &amp; Infrastructure</div>
          <h1 className="hero__title">Cloud &amp; Infrastructure — <em>Applied AI</em></h1>
          <p className="hero__sub">Strategic, Scalable, Future-Ready Cloud for All</p>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.65',maxWidth:'600px',marginBottom:'36px'}}>
            StradIT helps enterprises move to the cloud with confidence, from multi-cloud strategy to legacy modernization and end-to-end migration. We design AI-enhanced cloud foundations that perform under load, stay secure, and scale with your business goals.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Start Your Cloud Transformation
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe" className="btn btn--ghost">All practices</Link>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-cell"><div className="hero__meta-v">35% Lower</div><div className="hero__meta-k">Cloud Spend</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">99.9%</div><div className="hero__meta-k">Uptime Targets</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">4x Better</div><div className="hero__meta-k">Scalability</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Reference</div><div className="hero__meta-v" style={{fontSize:'12px',lineHeight:'1.4'}}><small>About — Social Driver</small></div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">Cloud · Operational</span>
          <span className="hero__hud-grid">
            <span>NODES <b>5K+</b></span><span>UPTIME <b>99.9%</b></span><span>REGIONS <b>4</b></span>
          </span>
          <span>Cloud · v2026.05</span>
        </div>
      </header>

      {/* SHAPING CLOUD WITH CONVICTION */}
      <section className="section" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Our Approach</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              Shaping Cloud You Need{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>With Conviction</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              From early discovery and planning to 24/7 operations, we partner with you to build resilient, AI-optimized cloud systems built for production.
            </p>
          </div>
          <div className="cards-2">
            {cards.map((card, i) => (
              <div key={card.title} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',padding:'40px 36px',display:'flex',flexDirection:'column',gap:'16px'}}>
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
            Define Your Cloud Roadmap
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      {/* CLOUD OUTCOMES THAT HOLD UP */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">02</span><span>Client Impact</span></div>
          <div>
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'20px'}}>
              Cloud Outcomes That Actually{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Hold Up In Production</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'32px',maxWidth:'680px'}}>
              Wondering how the cloud is becoming the backbone of modern businesses? Read the case studies below to see how our cloud infrastructure has fixed performance bottlenecks, tamed costs, and laid the foundations of fast and stable growth.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Redefine Cloud With StradIT
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

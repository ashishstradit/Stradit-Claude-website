import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'

export const metadata = { title: 'Data Analytics — Applied AI — StradIT' }

const cards = [
  {
    title: 'Data Integration',
    desc: 'We help organizations embed data at the core of their operations so that every move is backed by intelligence, not instinct.',
    items: [
      'Integrate structured and unstructured data across your ecosystem',
      'Build a unified analytics foundation from ingestion to consumption',
      'Design scalable architectures that grow with your business',
    ],
  },
  {
    title: 'Predictive Intelligence',
    desc: 'We go beyond simple transformation to re-engineer your core business processes, turning historical data into a strategic roadmap.',
    items: [
      'Smarter resource allocation with ML-driven forecasts',
      'Lower downtime costs through predictive maintenance signals',
      'Stronger retention and revenue with churn risk prediction',
    ],
  },
  {
    title: 'Decision Intelligence Platforms',
    desc: 'StradIT moves beyond theoretical insights to deliver high-performance systems that generate measurable ROI and operational clarity from the moment they go live.',
    items: [
      '100% tailored dashboards and KPI trackers',
      'Enable real-time decisions with embedded analytics in workflows',
      'Drive next-best actions with alerts and recommendations',
    ],
  },
  {
    title: 'Data Quality & Governance',
    desc: 'Delivering and deploying data is just one part of our comprehensive offerings. At StradIT, we also guarantee that data at the core of the key workflows is responsible, compliant, and prepared for enterprise use.',
    items: [
      'Increase accuracy through cleansing, deduplication, and enrichment',
      'Improve audit readiness with metadata and lineage visibility',
      'Protect sensitive data with role-based access and encryption',
    ],
  },
]

export default function CoeDataPage() {
  return (
    <>
      <Nav activePage="coe" />

      {/* HERO */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="data" /></div>
        <div className="container hero__inner">
          <div className="hero__eyebrow eyebrow">Center of Excellence · Data Analytics</div>
          <h1 className="hero__title">Data Analytics — <em>Applied AI</em></h1>
          <p className="hero__sub">Decode, Decide, and Dominate with Data</p>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.65',maxWidth:'600px',marginBottom:'36px'}}>
            StradIT helps enterprises turn messy, fragmented information into clear insights and confident action through its AI-powered data analytics CoE. We unify data across systems, build analytics that teams actually use, and embed AI-driven intelligence into workflows so decisions get faster, smarter, and easier to defend.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Begin Your Data Transformation
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe" className="btn btn--ghost">All practices</Link>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-cell"><div className="hero__meta-v">45%</div><div className="hero__meta-k">Better Forecasts</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">5x faster</div><div className="hero__meta-k">Reporting</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">50% Fewer</div><div className="hero__meta-k">Metric Disputes</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Reference</div><div className="hero__meta-v" style={{fontSize:'12px',lineHeight:'1.4'}}><small>About — Social Driver</small></div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">Pipeline · Active</span>
          <span className="hero__hud-grid">
            <span>EVENTS <b>4.8B/d</b></span><span>LATENCY <b>82ms</b></span><span>QUALITY <b>99.2%</b></span>
          </span>
          <span>Data · v2026.05</span>
        </div>
      </header>

      {/* TURN DATA INTO A POWER MOVE */}
      <section className="section" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Our Approach</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              Turn Data into a{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Power Move</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              Data is everywhere. Value isn't. Our end-to-end analytics services help you connect the dots across high-volume, multi-source data and convert it into strategy, performance, and measurable outcomes.
            </p>
          </div>
          <div className="cards-2">
            {cards.map((card, i) => (
              <div key={card.title} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',padding:'36px 32px',display:'flex',flexDirection:'column',gap:'16px'}}>
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
            Empower Decisions With Intelligence
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      {/* DATA STORIES FROM THE FIELD */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">02</span><span>Client Impact</span></div>
          <div className="two-col">
            <div>
              <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'20px'}}>
                Data Stories From{' '}
                <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>the Field</em>
              </h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'32px'}}>
                For our clients, data isn&apos;t noise. It&apos;s leverage. The stories below show how teams used StradIT&apos;s AI-powered analytics to turn data into momentum, and momentum into sustained results.
              </p>
              <Link href="/contact" className="btn btn--primary">
                Write Your Data Success Story With Us
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>

            {/* Case Study Card */}
            <Link href="/case-studies/data-analytics" className="cs-card">
              <div className="cs-card__tag">Case Study · Data Analytics</div>
              <div className="cs-card__title">
                80% Reduction in Manual Reporting<br />&amp; Scalability Delivered
              </div>
              <p className="cs-card__desc">
                How StradIT modernised a global investment bank&apos;s data infrastructure 360° — delivering a cloud-native data lake, real-time ingestion, unified data models, and self-service BI across 300+ applications.
              </p>
              <div className="cs-card__stats">
                {[['80%','Less Manual Reporting'],['Real-Time','Risk Visibility'],['360°','Transformation']].map(([v,l]) => (
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

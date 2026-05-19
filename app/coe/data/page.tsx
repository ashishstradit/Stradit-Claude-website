import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'
import CaseStudySection from '@/components/CaseStudySection'

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

const csChallenges = [
  'Data lived in silos across disconnected systems',
  'Reporting ran on slow, outdated batch processes',
  'Analysts spent countless hours on manual reporting tasks',
  'Complex risk models required for FRTB, Basel III, and MiFID II compliance',
]
const csWhyPoints = [
  'Fully tailored data intelligence',
  'AI/ML-driven data analytics',
  'Lean, high-impact squad for every client',
  'Expertise to handle structured and unstructured data',
]
const csOfferings = [
  'Building a cloud-native enterprise data lake',
  'Enabling real-time data ingestion',
  'Creating a unified data model',
  'Delivering high-performance analytics',
  'Empowering business users with self-service reporting tools',
  'Embedding governance, lineage, and audit controls from day one',
]
const csSteps = [
  { num:'01', title:'Laying the Foundation with a Scalable Data Lake', tech:'Microsoft Azure', body:'We designed and implemented an Enterprise Data Lake on Microsoft Azure, giving the client a centralised repository with elastic storage and compute — a single source of truth for all trading and risk data.' },
  { num:'02', title:'Bringing Data to Life in Real Time', tech:'Kafka · Spark Streaming', body:'Batch processing was killing the agility of our client. Our data squad introduced real-time data ingestion using Kafka and Spark Streaming, resulting in low-latency processing of trade executions and market data the moment it moves.' },
  { num:'03', title:'Creating One Version of the Truth', tech:'Master Data Management', body:'We built a Unified Data Model and implemented Master Data Management to eliminate inconsistent data plaguing the bank. This standardised trade data, counterparty information, and reference data — resulting in confusion-free processing across every team.' },
  { num:'04', title:'Powering Advanced Analytics at Speed', tech:'Databricks · Snowflake', body:'We deployed a high-performance analytics layer using Databricks and Snowflake for portfolio risk calculations, scenario modelling, and stress testing at speeds simply not possible before. Complex models no longer required overnight runs.' },
  { num:'05', title:'Putting Insights in the Hands of Business Users', tech:'Power BI · Tableau', body:'We rolled out self-service business intelligence through Power BI and Tableau, giving traders, risk analysts, and compliance officers the ability to explore data and generate reports on their own terms — no IT ticket required.' },
  { num:'06', title:'Building Governance Into the DNA', tech:'Apache Atlas · Collibra', body:'We deployed Apache Atlas and Collibra for automated data lineage, governance controls, and audit trails. The bank now has full visibility into the origin of every data point, its transformations, and its intended use.' },
]
const csOutcomes = [
  { v:'80%', l:'Drop in manual reporting effort' },
  { v:'Minutes', l:'Intraday risk visibility (was hours)' },
  { v:'100%', l:'Accurate, consistent trade data' },
  { v:'6', l:'Specialists. One high-impact squad.' },
]
const csResults = [
  'Intraday risk visibility improved from hours to minutes',
  'Manual reporting efforts dropped by 80%',
  'Accurate and consistent trade and market data across all teams',
  'Sharper insights enabling faster, smarter decisions',
]

const gradText = { fontStyle:'normal' as const, background:'linear-gradient(120deg,var(--accent),var(--accent-2))', WebkitBackgroundClip:'text' as const, backgroundClip:'text' as const, color:'transparent' as const }

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

      {/* APPROACH */}
      <section className="section" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Our Approach</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              Turn Data into a <em style={gradText}>Power Move</em>
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

      {/* CLIENT IMPACT — inline case study toggle */}
      <CaseStudySection
        left={
          <div>
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'20px'}}>
              Data Stories From <em style={gradText}>the Field</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'32px'}}>
              For our clients, data isn&apos;t noise. It&apos;s leverage. The stories below show how teams used StradIT&apos;s AI-powered analytics to turn data into momentum, and momentum into sustained results.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Write Your Data Success Story With Us
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        }
        tag="Case Study · Data Analytics"
        cardTitle={<>80% Reduction in Manual Reporting<br />&amp; Scalability Delivered</>}
        cardDesc="How StradIT modernised a global investment bank's data infrastructure 360° — delivering a cloud-native data lake, real-time ingestion, unified data models, and self-service BI across 300+ applications."
        stats={[['80%','Less Manual Reporting'],['Real-Time','Risk Visibility'],['360°','Transformation']]}
      >
        {/* ── CS 01: CLIENT OVERVIEW ── */}
        <section className="section" style={{paddingTop:'80px'}}>
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·01</span><span>Client Overview</span></div>
            <div className="section-intro">
              <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
                A Global Investment Bank <em style={gradText}>Drowning in Data</em>
              </h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
                A global investment bank running multi-asset trading operations spanning equities, fixed income, foreign exchange, and derivatives. Despite the scale of their operations, their data infrastructure had not kept pace — patching the old system was not the answer. They needed a complete transformation, and StradIT was their best bet.
              </p>
            </div>
            <div className="cs-g2" style={{marginBottom:'32px'}}>
              {csChallenges.map((c,i) => (
                <div key={i} style={{background:'var(--ink-1)',padding:'28px 24px',display:'flex',gap:'14px',alignItems:'flex-start'}}>
                  <span style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',color:'var(--accent)',flexShrink:0,marginTop:'3px'}}>{String(i+1).padStart(2,'0')}</span>
                  <p style={{color:'var(--text-1)',fontSize:'14px',lineHeight:'1.65'}}>{c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CS 02: WHY STRADIT ── */}
        <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·02</span><span>Why StradIT</span></div>
            <div className="two-col">
              <div>
                <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>
                  The Leader in <em style={gradText}>Data &amp; Analytics Modernisation</em>
                </h2>
                <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',marginBottom:'24px'}}>
                  StradIT deployed a focused team of four Data Engineers, one Data Scientist, and one Data Architect — working side by side with client teams to design and deliver a platform built for speed, scale, and governance.
                </p>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'1px',background:'var(--line)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
                {csWhyPoints.map((pt,i) => (
                  <div key={i} style={{background:'var(--ink-2)',padding:'22px 20px',display:'flex',gap:'14px',alignItems:'center'}}>
                    <span style={{width:'28px',height:'28px',borderRadius:'50%',border:'1px solid var(--accent)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--accent)',fontSize:'11px',flexShrink:0}}>✓</span>
                    <span style={{color:'var(--text-0)',fontSize:'14px',lineHeight:'1.5'}}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CS 03: WHAT WE OFFERED ── */}
        <section className="section">
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·03</span><span>What We Offered</span></div>
            <div className="section-intro">
              <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em'}}>More Than a <em style={gradText}>Technology Upgrade</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7'}}>The bank needed a platform that could unify scattered data sources, deliver real-time insights, and scale gracefully as trading volumes grow.</p>
            </div>
            <div className="cs-g3" style={{marginBottom:'32px'}}>
              {csOfferings.map((o,i) => (
                <div key={i} style={{background:'var(--ink-1)',padding:'24px 20px',display:'flex',gap:'12px',alignItems:'flex-start'}}>
                  <span style={{color:'var(--accent)',flexShrink:0,marginTop:'2px'}}>→</span>
                  <span style={{color:'var(--text-1)',fontSize:'13px',lineHeight:'1.6'}}>{o}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CS 04: HOW WE DELIVERED ── */}
        <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·04</span><span>How We Delivered It</span></div>
            <div className="section-intro">
              <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em'}}>Clarity to Chaos. <em style={gradText}>Confidence to the Client.</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7'}}>A structured six-step approach to bring order to complexity.</p>
            </div>
            <div className="cs-steps" style={{marginBottom:'32px'}}>
              {csSteps.map(step => (
                <div key={step.num} className="cs-step" style={{background:'var(--ink-2)',padding:'28px 32px'}}>
                  <div>
                    <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.16em',color:'var(--text-3)',marginBottom:'2px',textTransform:'uppercase'}}>Step</div>
                    <div style={{fontFamily:'var(--font-display)',fontSize:'34px',fontWeight:600,letterSpacing:'-0.04em',lineHeight:1,background:'linear-gradient(135deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>{step.num}</div>
                  </div>
                  <div>
                    <div style={{fontFamily:'var(--font-display)',fontSize:'17px',fontWeight:500,letterSpacing:'-0.02em',marginBottom:'4px'}}>{step.title}</div>
                    <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--cyan)',marginBottom:'8px'}}>{step.tech}</div>
                    <p style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.7'}}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CS 05: OUTCOMES ── */}
        <section className="section">
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·05</span><span>Outcomes</span></div>
            <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em',marginBottom:'12px'}}>The Results <em style={gradText}>Spoke for Themselves</em></h2>
            <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',maxWidth:'680px',marginBottom:'40px'}}>The bank moved from firefighting data issues to confidently leveraging AI-powered analytics as a competitive advantage.</p>
            <div className="cs-g4" style={{marginBottom:'40px'}}>
              {csOutcomes.map(o => (
                <div key={o.l} style={{background:'var(--ink-1)',padding:'28px 20px',display:'flex',flexDirection:'column',gap:'6px'}}>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,3vw,36px)',fontWeight:600,letterSpacing:'-0.03em',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',lineHeight:1.1}}>{o.v}</div>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--text-3)',lineHeight:1.4}}>{o.l}</div>
                </div>
              ))}
            </div>
            <div className="cs-g2">
              {csResults.map((r,i) => (
                <div key={i} style={{background:'var(--ink-1)',padding:'24px 28px',display:'flex',gap:'14px',alignItems:'flex-start'}}>
                  <span style={{color:'var(--accent)',flexShrink:0,marginTop:'2px'}}>→</span>
                  <span style={{color:'var(--text-1)',fontSize:'14px',lineHeight:'1.6'}}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CS CTA ── */}
        <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
          <div className="container" style={{textAlign:'center',maxWidth:'640px',margin:'0 auto'}}>
            <h2 style={{fontSize:'clamp(24px,3.5vw,40px)',letterSpacing:'-0.03em',marginBottom:'16px',lineHeight:1.1}}>
              StradIT Can Build the Foundation <em style={gradText}>That Scales</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',marginBottom:'28px'}}>
              From data lake to real-time insights, governed and production-ready.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Request a Data &amp; Analytics Assessment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </section>
      </CaseStudySection>

      <Footer />
    </>
  )
}

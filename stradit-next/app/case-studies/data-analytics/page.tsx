import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'
import CaseStudyToggle from '@/components/CaseStudyToggle'

export const metadata = {
  title: 'Reduction in Manual Reporting & Scalability Delivered — StradIT Case Study',
  description:
    'How StradIT modernised a global investment bank\'s data infrastructure 360°, cutting manual reporting by 80% and delivering intraday risk visibility.',
}

const challenges = [
  'Data lived in silos across disconnected systems',
  'Reporting ran on slow, outdated batch processes',
  'Analysts spent countless hours on manual reporting tasks',
  'Complex risk models required for FRTB, Basel III, and MiFID II compliance',
]

const whyPoints = [
  'Fully tailored data intelligence',
  'AI/ML-driven data analytics',
  'Lean, high-impact squad for every client',
  'Expertise to handle structured and unstructured data',
]

const offerings = [
  'Building a cloud-native enterprise data lake',
  'Enabling real-time data ingestion',
  'Creating a unified data model',
  'Delivering high-performance analytics',
  'Empowering business users with self-service reporting tools',
  'Embedding governance, lineage, and audit controls from day one',
]

const steps = [
  {
    num: '01',
    title: 'Laying the Foundation with a Scalable Data Lake',
    tech: 'Microsoft Azure',
    body: 'We designed and implemented an Enterprise Data Lake on Microsoft Azure, giving the client a centralised repository with elastic storage and compute — a single source of truth for all trading and risk data.',
  },
  {
    num: '02',
    title: 'Bringing Data to Life in Real Time',
    tech: 'Kafka · Spark Streaming',
    body: 'Batch processing was killing the agility of our client. Our data squad introduced real-time data ingestion using Kafka and Spark Streaming, resulting in low-latency processing of trade executions and market data the moment it moves.',
  },
  {
    num: '03',
    title: 'Creating One Version of the Truth',
    tech: 'Master Data Management',
    body: 'We built a Unified Data Model and implemented Master Data Management to eliminate inconsistent data plaguing the bank. This standardised trade data, counterparty information, and reference data — resulting in confusion-free processing across every team.',
  },
  {
    num: '04',
    title: 'Powering Advanced Analytics at Speed',
    tech: 'Databricks · Snowflake',
    body: 'We deployed a high-performance analytics layer using Databricks and Snowflake for portfolio risk calculations, scenario modelling, and stress testing at speeds simply not possible before. Complex models no longer required overnight runs.',
  },
  {
    num: '05',
    title: 'Putting Insights in the Hands of Business Users',
    tech: 'Power BI · Tableau',
    body: 'We rolled out self-service business intelligence through Power BI and Tableau, giving traders, risk analysts, and compliance officers the ability to explore data and generate reports on their own terms — no IT ticket required.',
  },
  {
    num: '06',
    title: 'Building Governance Into the DNA',
    tech: 'Apache Atlas · Collibra',
    body: 'We deployed Apache Atlas and Collibra for automated data lineage, governance controls, and audit trails. The bank now has full visibility into the origin of every data point, its transformations, and its intended use.',
  },
]

const outcomes = [
  { v: '80%', l: 'Drop in manual reporting effort' },
  { v: 'Minutes', l: 'Intraday risk visibility (was hours)' },
  { v: '100%', l: 'Accurate, consistent trade data' },
  { v: '6', l: 'Specialists. One high-impact squad.' },
]

const results = [
  'Intraday risk visibility improved from hours to minutes',
  'Manual reporting efforts dropped by 80%',
  'Accurate and consistent trade and market data across all teams',
  'Sharper insights enabling faster, smarter decisions',
]

export default function DataAnalyticsCaseStudyPage() {
  return (
    <>
      <Nav activePage="coe" />

      {/* ── HERO ── */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="data" /></div>
        <div className="container hero__inner">
          <div className="hero__eyebrow eyebrow">Case Study · Data Analytics</div>
          <h1 className="hero__title">
            80% Reduction in Manual Reporting<br />
            &amp; <em>Scalability Delivered</em>
          </h1>
          <p className="hero__sub">
            From hours to minutes — a 360° data infrastructure transformation.
          </p>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.65',maxWidth:'600px',marginBottom:'36px'}}>
            Discover how StradIT modernised a leading investment bank's data infrastructure end-to-end,
            delivering real-time analytics, a cloud-native data lake, and self-service reporting that
            turned data complexity into competitive advantage.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Request a Data &amp; Analytics Assessment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe/data" className="btn btn--ghost">Back to Data CoE</Link>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-cell"><div className="hero__meta-v">80%</div><div className="hero__meta-k">Less Manual Reporting</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">Real-Time</div><div className="hero__meta-k">Risk Visibility</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">6-Person</div><div className="hero__meta-k">Lean Delivery Squad</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">360°</div><div className="hero__meta-k">Data Transformation</div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">Pipeline · Active</span>
          <span className="hero__hud-grid">
            <span>LATENCY <b>82ms</b></span>
            <span>MANUAL OPS <b>−80%</b></span>
            <span>QUALITY <b>99.2%</b></span>
          </span>
          <span>Case Study · Data</span>
        </div>
      </header>

      <CaseStudyToggle>

      {/* ── 01 CLIENT OVERVIEW ── */}
      <section className="section" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Client Overview</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              A Global Investment Bank{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Drowning in Data</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              A global investment bank running multi-asset trading operations spanning equities,
              fixed income, foreign exchange, and derivatives. Despite the scale of their operations,
              their data infrastructure had not kept pace — patching the old system was not the answer.
              They needed a complete transformation, and StradIT was their best bet.
            </p>
          </div>

          {/* Challenges */}
          <div style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            gap:'1px',
            background:'var(--line)',
            border:'1px solid var(--line)',
            borderRadius:'var(--radius-lg)',
            overflow:'hidden',
            marginBottom:'40px',
          }}>
            {challenges.map((c, i) => (
              <div key={i} style={{
                background:'var(--ink-1)',
                padding:'32px 28px',
                display:'flex',
                gap:'16px',
                alignItems:'flex-start',
              }}>
                <span style={{
                  fontFamily:'var(--font-mono)',
                  fontSize:'10px',
                  letterSpacing:'0.16em',
                  color:'var(--accent)',
                  flexShrink:0,
                  marginTop:'3px',
                }}>
                  {String(i+1).padStart(2,'0')}
                </span>
                <p style={{color:'var(--text-1)',fontSize:'14px',lineHeight:'1.65'}}>{c}</p>
              </div>
            ))}
          </div>

          <p style={{
            color:'var(--text-2)',
            fontSize:'14px',
            lineHeight:'1.7',
            maxWidth:'760px',
            padding:'24px',
            borderLeft:'3px solid var(--accent)',
            background:'var(--accent-soft)',
            borderRadius:'0 var(--radius) var(--radius) 0',
          }}>
            For them, patching the old system was not the answer. They required a complete
            data and analytics transformation — and StradIT was their best bet.
          </p>
        </div>
      </section>

      {/* ── 02 WHY STRADIT ── */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">02</span><span>Why StradIT</span></div>
          <div className="two-col">
            <div>
              <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'20px'}}>
                The Leader in{' '}
                <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Data &amp; Analytics Modernisation</em>
              </h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'16px'}}>
                StradIT's Data Analytics CoE combines deep technical expertise with a practical
                understanding of how trading floors, risk functions, and compliance teams actually work.
              </p>
              <p style={{color:'var(--text-2)',fontSize:'14px',lineHeight:'1.7',marginBottom:'28px'}}>
                We partnered with the bank and their system integrator, deploying a focused team of
                four Data Engineers, one Data Scientist, and one Data Architect. This lean,
                high-impact squad worked side by side with client teams to design and deliver a
                platform built for speed, scale, and governance.
              </p>
              <Link href="/coe/data" className="btn btn--ghost">
                Explore Data CoE
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'1px',background:'var(--line)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
              {whyPoints.map((pt, i) => (
                <div key={i} style={{
                  background:'var(--ink-2)',
                  padding:'28px 24px',
                  display:'flex',
                  gap:'16px',
                  alignItems:'center',
                }}>
                  <span style={{
                    width:'32px',height:'32px',
                    borderRadius:'50%',
                    border:'1px solid var(--accent)',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    color:'var(--accent)',
                    fontSize:'12px',
                    flexShrink:0,
                  }}>✓</span>
                  <span style={{color:'var(--text-0)',fontSize:'15px',lineHeight:'1.5'}}>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 WHAT WE OFFERED ── */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">03</span><span>What We Offered</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              More Than a{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Technology Upgrade</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              The bank needed a platform that could unify scattered data sources, deliver real-time
              insights, and scale gracefully as trading volumes grow. We planned and delivered
              100% customised solutions across every layer of their data estate.
            </p>
          </div>

          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr)',
            gap:'1px',
            background:'var(--line)',
            border:'1px solid var(--line)',
            borderRadius:'var(--radius-lg)',
            overflow:'hidden',
            marginBottom:'40px',
          }}>
            {offerings.map((o, i) => (
              <div key={i} style={{
                background:'var(--ink-1)',
                padding:'28px 24px',
                display:'flex',
                gap:'14px',
                alignItems:'flex-start',
              }}>
                <span style={{color:'var(--accent)',flexShrink:0,marginTop:'2px'}}>→</span>
                <span style={{color:'var(--text-1)',fontSize:'14px',lineHeight:'1.6'}}>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 HOW WE DELIVERED ── */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">04</span><span>How We Delivered It</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              Clarity to Chaos.{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Confidence to the Client.</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              StradIT assembled a data squad featuring the best minds in analytics and AI — working
              through a structured six-step approach to bring order to complexity.
            </p>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'1px',background:'var(--line)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',overflow:'hidden',marginBottom:'40px'}}>
            {steps.map((step) => (
              <div key={step.num} style={{
                background:'var(--ink-2)',
                padding:'36px 40px',
                display:'grid',
                gridTemplateColumns:'80px 1fr',
                gap:'32px',
                alignItems:'start',
              }}>
                <div>
                  <div style={{
                    fontFamily:'var(--font-mono)',
                    fontSize:'10px',
                    letterSpacing:'0.16em',
                    color:'var(--text-3)',
                    marginBottom:'4px',
                    textTransform:'uppercase',
                  }}>Step</div>
                  <div style={{
                    fontFamily:'var(--font-display)',
                    fontSize:'42px',
                    fontWeight:600,
                    letterSpacing:'-0.04em',
                    lineHeight:1,
                    background:'linear-gradient(135deg,var(--accent),var(--accent-2))',
                    WebkitBackgroundClip:'text',
                    backgroundClip:'text',
                    color:'transparent',
                  }}>{step.num}</div>
                </div>
                <div>
                  <div style={{
                    fontFamily:'var(--font-display)',
                    fontSize:'19px',
                    fontWeight:500,
                    letterSpacing:'-0.02em',
                    marginBottom:'6px',
                    color:'var(--text-0)',
                  }}>{step.title}</div>
                  <div style={{
                    fontFamily:'var(--font-mono)',
                    fontSize:'10px',
                    letterSpacing:'0.12em',
                    textTransform:'uppercase',
                    color:'var(--cyan)',
                    marginBottom:'10px',
                  }}>{step.tech}</div>
                  <p style={{color:'var(--text-2)',fontSize:'14px',lineHeight:'1.7'}}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 OUTCOMES ── */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">05</span><span>What the Client Achieved</span></div>
          <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>
            The Results{' '}
            <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Spoke for Themselves</em>
          </h2>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',maxWidth:'680px',marginBottom:'48px'}}>
            The bank moved from firefighting data issues to confidently leveraging AI-powered
            analytics as a competitive advantage.
          </p>

          {/* Stats row */}
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(4,1fr)',
            gap:'1px',
            background:'var(--line)',
            border:'1px solid var(--line)',
            borderRadius:'var(--radius-lg)',
            overflow:'hidden',
            marginBottom:'48px',
          }}>
            {outcomes.map((o) => (
              <div key={o.l} style={{
                background:'var(--ink-1)',
                padding:'36px 28px',
                display:'flex',
                flexDirection:'column',
                gap:'8px',
              }}>
                <div style={{
                  fontFamily:'var(--font-display)',
                  fontSize:'clamp(26px,3vw,40px)',
                  fontWeight:600,
                  letterSpacing:'-0.03em',
                  background:'linear-gradient(120deg,var(--accent),var(--accent-2))',
                  WebkitBackgroundClip:'text',
                  backgroundClip:'text',
                  color:'transparent',
                  lineHeight:1.1,
                }}>{o.v}</div>
                <div style={{
                  fontFamily:'var(--font-mono)',
                  fontSize:'11px',
                  letterSpacing:'0.12em',
                  textTransform:'uppercase',
                  color:'var(--text-3)',
                  lineHeight:1.4,
                }}>{o.l}</div>
              </div>
            ))}
          </div>

          {/* Result bullets */}
          <div style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            gap:'1px',
            background:'var(--line)',
            border:'1px solid var(--line)',
            borderRadius:'var(--radius-lg)',
            overflow:'hidden',
          }}>
            {results.map((r, i) => (
              <div key={i} style={{
                background:'var(--ink-1)',
                padding:'28px 32px',
                display:'flex',
                gap:'16px',
                alignItems:'flex-start',
              }}>
                <span style={{color:'var(--accent)',flexShrink:0,marginTop:'2px'}}>→</span>
                <span style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.6'}}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container" style={{textAlign:'center',maxWidth:'680px',margin:'0 auto'}}>
          <div style={{
            fontFamily:'var(--font-mono)',
            fontSize:'11px',
            letterSpacing:'0.16em',
            textTransform:'uppercase',
            color:'var(--accent)',
            marginBottom:'20px',
          }}>Drowning in Data Complexity?</div>
          <h2 style={{
            fontSize:'clamp(28px,4vw,46px)',
            letterSpacing:'-0.03em',
            marginBottom:'20px',
            lineHeight:1.1,
          }}>
            StradIT Can Build the Foundation{' '}
            <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>
              That Scales
            </em>
          </h2>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'36px'}}>
            We help you build a modern analytics foundation that grows with your ambitions —
            from data lake to real-time insights, governed and production-ready.
          </p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/contact" className="btn btn--primary">
              Request a Data &amp; Analytics Assessment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe/data" className="btn btn--ghost">
              Explore Data CoE
            </Link>
          </div>
        </div>
      </section>

      </CaseStudyToggle>

      <Footer />
    </>
  )
}

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'
import CaseStudyToggle from '@/components/CaseStudyToggle'

export const metadata = {
  title: 'Zero Data Loss Readiness Across 300+ Applications — StradIT Case Study',
  description:
    'How StradIT helped a global financial institution build bulletproof cyber resiliency across 300+ applications with zero data loss.',
}

const steps = [
  {
    num: '01',
    title: 'Getting Under the Hood of Every Application',
    body: "We began by understanding everything — carefully mapping each application's architecture, identifying its data sources, and tracing downstream dependencies. No application was treated as a black box.",
  },
  {
    num: '02',
    title: 'Measuring Recovery Readiness',
    body: 'Next, we evaluated the Recovery Point Capability of every application in scope. This included examining existing backup mechanisms, replay capabilities, and calculating exactly how much data could be lost in different failure scenarios.',
  },
  {
    num: '03',
    title: 'Building Custom Test Plans',
    body: 'We designed 100% tailored test plans for each application — accounting for database type (Oracle, SQL Server, DB2), application criticality, integration complexity, and business function. No two plans were alike.',
  },
  {
    num: '04',
    title: 'Running the Tests and Keeping Governance Tight',
    body: 'Our experts performed tests alongside client teams, ensuring every governance standard was met. All evidence, reports, and sign-offs were securely stored for full audit readiness.',
  },
  {
    num: '05',
    title: 'Closing the Gaps and Arming Teams with Playbooks',
    body: 'After testing, we compiled a clear list of gaps and remediation recommendations. For every application, we created or updated playbooks and runbooks with step-by-step instructions for recovering systems with minimal data loss. These documents became the go-to resource for teams facing an incident.',
  },
]

const outcomes = [
  { v: '300+', l: 'Applications assessed, tested & documented' },
  { v: '100%', l: 'Tailored test plans per application' },
  { v: 'Zero',  l: 'Data loss in recovery scenarios' },
  { v: '2+ yrs', l: 'Ongoing partnership retained' },
]

const whyPoints = [
  '100% tailored cybersecurity advisory',
  'Recovery frameworks built from the ground up',
  '24/7 threat monitoring and management',
]

const challenges = [
  'No visibility into how applications would perform during a malware attack',
  'Blind spots in tracking data entry points',
  'Absence of standard operating procedures',
  'Critical gaps in backup processes',
]

const results = [
  'Automated data comparison tools for faster recovery validation',
  'Clear, actionable playbooks ready for any incident',
  'Reduced risk exposure across critical infrastructure',
  'Confidence in zero data loss recovery',
]

export default function CyberResiliencyPage() {
  return (
    <>
      <Nav activePage="coe" />

      {/* ── HERO ── */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="cyber" /></div>
        <div className="container hero__inner">
          <div className="hero__eyebrow eyebrow">Case Study · Cyber Security</div>
          <h1 className="hero__title">
            Zero Data Loss Readiness<br />
            Across <em>300+ Applications</em>
          </h1>
          <p className="hero__sub">
            When a malware attack hits, every second counts.
          </p>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.65',maxWidth:'600px',marginBottom:'36px'}}>
            Discover how StradIT collaborated with a major financial institution to develop
            bulletproof, AI-fortified cyber resiliency — so mission-critical applications
            could recover with little disruption and no loss of data.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Request a Cyber Resiliency Assessment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe/cyber" className="btn btn--ghost">Back to Cyber CoE</Link>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-cell"><div className="hero__meta-v">300+</div><div className="hero__meta-k">Applications Covered</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">Zero</div><div className="hero__meta-k">Data Loss Achieved</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">2+ Years</div><div className="hero__meta-k">Partnership</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">24/7</div><div className="hero__meta-k">Monitoring & Response</div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">Defense · Nominal</span>
          <span className="hero__hud-grid">
            <span>APPS <b>300+</b></span>
            <span>DATA LOSS <b>0%</b></span>
            <span>PLAYBOOKS <b>300+</b></span>
          </span>
          <span>Case Study · Cyber</span>
        </div>
      </header>

      <CaseStudyToggle>

      {/* ── 01 CLIENT OVERVIEW ── */}
      <section className="section" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Client Overview</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              A Global Financial Institution{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Under Pressure</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              Our client is a prominent global financial institution specialising in asset management,
              serving clients across the world. Their technology landscape spans 300+ applications
              powered by Oracle, SQL Server, and DB2 databases — a sprawling estate with high stakes
              and zero tolerance for downtime.
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
            Leadership understood the gravity of the situation: just one cyber attack could
            lead to extended downtime, significant data loss, hefty regulatory fines, and
            long-term damage to their reputation. They needed a reliable partner to evaluate
            their entire application portfolio and build a solid plan for resilience.
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
                A Proven Cyber{' '}
                <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Resiliency Practice</em>
              </h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'28px'}}>
                StradIT offers a proven Cyber Resiliency practice, refined over years of
                safeguarding critical infrastructure for clients in banking, insurance, and
                asset management. We don't do cookie-cutter solutions — every engagement is
                rooted in deep technical analysis, tailored to each client's unique risk profile.
              </p>
              <Link href="/coe/cyber" className="btn btn--ghost">
                Explore Cyber CoE
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

      {/* ── 03 HOW WE MADE IT HAPPEN ── */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">03</span><span>How We Made It Happen</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              Proactive. Precise.{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Battle-Tested.</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              Cybersecurity at StradIT is never reactive. We took a structured, multi-step approach
              to help this client overcome their cybersecurity challenges from the ground up.
            </p>
          </div>

          {/* Steps */}
          <div style={{display:'flex',flexDirection:'column',gap:'1px',background:'var(--line)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',overflow:'hidden',marginBottom:'40px'}}>
            {steps.map((step) => (
              <div key={step.num} style={{
                background:'var(--ink-1)',
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
                    marginBottom:'10px',
                    color:'var(--text-0)',
                  }}>{step.title}</div>
                  <p style={{color:'var(--text-2)',fontSize:'14px',lineHeight:'1.7'}}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/contact" className="btn btn--ghost">
            Explore our Cyber CoE
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      {/* ── 04 OUTCOMES ── */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">04</span><span>What the Client Walked Away With</span></div>
          <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>
            A Transformed{' '}
            <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Cyber Resiliency Posture</em>
          </h2>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',maxWidth:'680px',marginBottom:'48px'}}>
            Two years into our partnership, this institution still chooses StradIT. The reason is
            simple: a tailored cybersecurity strategy that makes threats a thing of the past.
          </p>

          {/* Stats row */}
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(4, 1fr)',
            gap:'1px',
            background:'var(--line)',
            border:'1px solid var(--line)',
            borderRadius:'var(--radius-lg)',
            overflow:'hidden',
            marginBottom:'48px',
          }}>
            {outcomes.map((o) => (
              <div key={o.l} style={{
                background:'var(--ink-2)',
                padding:'36px 28px',
                display:'flex',
                flexDirection:'column',
                gap:'8px',
              }}>
                <div style={{
                  fontFamily:'var(--font-display)',
                  fontSize:'clamp(28px,3vw,42px)',
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
      <section className="section" style={{borderTop:'1px solid var(--line)'}}>
        <div className="container" style={{textAlign:'center',maxWidth:'680px',margin:'0 auto'}}>
          <div style={{
            fontFamily:'var(--font-mono)',
            fontSize:'11px',
            letterSpacing:'0.16em',
            textTransform:'uppercase',
            color:'var(--accent)',
            marginBottom:'20px',
          }}>Unsure How Your Organisation Would Survive a Cyber Incident?</div>
          <h2 style={{
            fontSize:'clamp(28px,4vw,46px)',
            letterSpacing:'-0.03em',
            marginBottom:'20px',
            lineHeight:1.1,
          }}>
            StradIT Can Help You{' '}
            <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>
              Close the Gaps
            </em>
          </h2>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'36px'}}>
            We uncover vulnerabilities and fix them before attackers find them first.
          </p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/contact" className="btn btn--primary">
              Request a Cyber Resiliency Assessment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe/cyber" className="btn btn--ghost">
              Explore Cyber CoE
            </Link>
          </div>
        </div>
      </section>

      </CaseStudyToggle>

      <Footer />
    </>
  )
}

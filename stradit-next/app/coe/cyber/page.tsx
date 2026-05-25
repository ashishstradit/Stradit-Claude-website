import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'
import CaseStudySection from '@/components/CaseStudySection'

export const metadata = { title: 'Cyber Security — Applied AI — StradIT' }

const cards = [
  { title:'Cybersecurity Advisory', desc:'Construct a resilient cybersecurity ecosystem tailored to unique risk profile with AI-informed prioritization at every step.', items:['Identify high-risk assets and prioritize defense by business impact','Build security frameworks aligned with industry and organizational objectives','Strengthen compliance and audit readiness for GDPR, HIPAA, ISO 27001, and more'] },
  { title:'Cybersecurity Engineering', desc:'Protect digital assets from day one using AI-powered, scalable, and compliant security frameworks.', items:['Deploy security controls that reduce risk from day one','Apply tailored protection across apps, data, networks, and identities','Build cloud-native and hybrid architectures with zero-trust enforcement'] },
  { title:'Managed Cybersecurity', desc:'Monitor, manage, and mitigate threats using AI-driven managed cybersecurity services. Centralize operations to reduce tool sprawl and eliminate blind spots.', items:['Run 24/7 monitoring and incident response driven by real-time intelligence','Scale managed security to match your business size, industry, and regulations'] },
]

const csChallenges = [
  'No visibility into how applications would perform during a malware attack',
  'Blind spots in tracking data entry points',
  'Absence of standard operating procedures',
  'Critical gaps in backup processes',
]
const csWhyPoints = [
  '100% tailored cybersecurity advisory',
  'Recovery frameworks built from the ground up',
  '24/7 threat monitoring and management',
]
const csSteps = [
  { num:'01', title:'Getting Under the Hood of Every Application', body:"We began by understanding everything — carefully mapping each application's architecture, identifying its data sources, and tracing downstream dependencies. No application was treated as a black box." },
  { num:'02', title:'Measuring Recovery Readiness', body:'Next, we evaluated the Recovery Point Capability of every application in scope. This included examining existing backup mechanisms, replay capabilities, and calculating exactly how much data could be lost in different failure scenarios.' },
  { num:'03', title:'Building Custom Test Plans', body:'We designed 100% tailored test plans for each application — accounting for database type (Oracle, SQL Server, DB2), application criticality, integration complexity, and business function. No two plans were alike.' },
  { num:'04', title:'Running the Tests and Keeping Governance Tight', body:'Our experts performed tests alongside client teams, ensuring every governance standard was met. All evidence, reports, and sign-offs were securely stored for full audit readiness.' },
  { num:'05', title:'Closing the Gaps and Arming Teams with Playbooks', body:'After testing, we compiled a clear list of gaps and remediation recommendations. For every application, we created or updated playbooks and runbooks with step-by-step instructions for recovering systems with minimal data loss.' },
]
const csOutcomes = [
  { v:'300+', l:'Applications assessed, tested & documented' },
  { v:'100%', l:'Tailored test plans per application' },
  { v:'Zero', l:'Data loss in recovery scenarios' },
  { v:'2+ yrs', l:'Ongoing partnership retained' },
]
const csResults = [
  'Automated data comparison tools for faster recovery validation',
  'Clear, actionable playbooks ready for any incident',
  'Reduced risk exposure across critical infrastructure',
  'Confidence in zero data loss recovery',
]

const gradText = { fontStyle:'normal' as const, background:'linear-gradient(120deg,var(--accent),var(--accent-2))', WebkitBackgroundClip:'text' as const, backgroundClip:'text' as const, color:'transparent' as const }

export default function CoeCyberPage() {
  return (
    <>
      <Nav activePage="coe" />

      {/* HERO */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="cyber" /></div>
        <div className="container hero__inner">
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

      {/* APPROACH */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Our Approach</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              Cybersecurity Engineered for{' '}
              <em style={gradText}>Business Resilience</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              StradIT unites AI-driven threat modeling, precise engineering, and relentless managed defense to safeguard mission-critical assets, reduce business risk, and empower readiness for rapid change.
            </p>
          </div>
          <div className="cards-3">
            {cards.map((card,i) => (
              <div key={card.title} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',padding:'36px 28px',display:'flex',flexDirection:'column',gap:'16px'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',color:'var(--accent)'}}>0{i+1}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'20px',fontWeight:500,letterSpacing:'-0.02em'}}>{card.title}</div>
                <p style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.65',flex:1}}>{card.desc}</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'6px'}}>
                  {card.items.map(item => <li key={item} style={{fontSize:'13px',color:'var(--text-1)',display:'flex',gap:'8px'}}><span style={{color:'var(--accent)',flexShrink:0}}>→</span>{item}</li>)}
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

      {/* CLIENT IMPACT — inline case study toggle */}
      <CaseStudySection
        left={
          <div>
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'20px'}}>
              Learn How Security Wins From <em style={gradText}>The Front Lines</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'32px'}}>
              Cybersecurity should feel like stability, not constant fire drills. The stories below show how teams like yours reduced noise, contained threats faster, and built a security posture that holds up on the toughest days.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Strengthen Your Security Posture
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        }
        tag="Case Study · Cyber Resiliency"
        cardTitle={<>Zero Data Loss Readiness<br />Across 300+ Applications</>}
        cardDesc="How StradIT helped a global asset management firm build bulletproof cyber resiliency — assessing, testing, and documenting every application with tailored playbooks and automated recovery tools."
        stats={[['300+','Apps Covered'],['Zero','Data Loss'],['2+ yrs','Partnership']]}
      >
        {/* ── CS 01: CLIENT OVERVIEW ── */}
        <section className="section" style={{paddingTop:'80px'}}>
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·01</span><span>Client Overview</span></div>
            <div className="section-intro">
              <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>A Global Financial Institution <em style={gradText}>Under Pressure</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
                Our client is a prominent global financial institution specialising in asset management. Their technology landscape spans 300+ applications powered by Oracle, SQL Server, and DB2 databases — a sprawling estate with high stakes and zero tolerance for downtime.
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
                <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>A Proven Cyber <em style={gradText}>Resiliency Practice</em></h2>
                <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',marginBottom:'24px'}}>
                  StradIT offers a proven Cyber Resiliency practice, refined over years of safeguarding critical infrastructure for clients in banking, insurance, and asset management.
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

        {/* ── CS 03: HOW WE DELIVERED ── */}
        <section className="section">
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·03</span><span>How We Made It Happen</span></div>
            <div className="section-intro">
              <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em'}}>Proactive. Precise. <em style={gradText}>Battle-Tested.</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7'}}>Cybersecurity at StradIT is never reactive. We took a structured, multi-step approach to help this client overcome their cybersecurity challenges from the ground up.</p>
            </div>
            <div className="cs-steps" style={{marginBottom:'32px'}}>
              {csSteps.map(step => (
                <div key={step.num} className="cs-step" style={{background:'var(--ink-1)',padding:'28px 32px'}}>
                  <div>
                    <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.16em',color:'var(--text-3)',marginBottom:'2px',textTransform:'uppercase'}}>Step</div>
                    <div style={{fontFamily:'var(--font-display)',fontSize:'34px',fontWeight:600,letterSpacing:'-0.04em',lineHeight:1,background:'linear-gradient(135deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>{step.num}</div>
                  </div>
                  <div>
                    <div style={{fontFamily:'var(--font-display)',fontSize:'17px',fontWeight:500,letterSpacing:'-0.02em',marginBottom:'8px'}}>{step.title}</div>
                    <p style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.7'}}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CS 04: OUTCOMES ── */}
        <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·04</span><span>Outcomes</span></div>
            <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em',marginBottom:'12px'}}>A Transformed <em style={gradText}>Cyber Resiliency Posture</em></h2>
            <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',maxWidth:'680px',marginBottom:'40px'}}>Two years into our partnership, this institution still chooses StradIT.</p>
            <div className="cs-g4" style={{marginBottom:'40px'}}>
              {csOutcomes.map(o => (
                <div key={o.l} style={{background:'var(--ink-2)',padding:'28px 20px',display:'flex',flexDirection:'column',gap:'6px'}}>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,3vw,36px)',fontWeight:600,letterSpacing:'-0.03em',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',lineHeight:1.1}}>{o.v}</div>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--text-3)',lineHeight:1.4}}>{o.l}</div>
                </div>
              ))}
            </div>
            <div className="cs-g2">
              {csResults.map((r,i) => (
                <div key={i} style={{background:'var(--ink-1)',padding:'22px 24px',display:'flex',gap:'12px',alignItems:'flex-start'}}>
                  <span style={{color:'var(--accent)',flexShrink:0,marginTop:'2px'}}>→</span>
                  <span style={{color:'var(--text-1)',fontSize:'13px',lineHeight:'1.6'}}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CS CTA ── */}
        <section className="section" style={{borderTop:'1px solid var(--line)'}}>
          <div className="container" style={{textAlign:'center',maxWidth:'640px',margin:'0 auto'}}>
            <h2 style={{fontSize:'clamp(24px,3.5vw,40px)',letterSpacing:'-0.03em',marginBottom:'16px',lineHeight:1.1}}>
              StradIT Can Help You <em style={gradText}>Close the Gaps</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',marginBottom:'28px'}}>
              We uncover vulnerabilities and fix them before attackers find them first.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Request a Cyber Resiliency Assessment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </section>
      </CaseStudySection>

      <Footer />
    </>
  )
}

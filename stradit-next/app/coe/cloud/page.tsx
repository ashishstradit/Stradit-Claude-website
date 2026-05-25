import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'
import CaseStudySection from '@/components/CaseStudySection'

export const metadata = { title: 'Cloud & Infrastructure — Applied AI — StradIT' }

const cards = [
  { title:'End-to-End Consulting & Service Delivery', desc:'Identify needs, understand the utility of different cloud infrastructures, and make informed decisions.', items:['Cloud readiness assessment and a clear migration roadmap','Architectures balancing performance, cost, and flexibility across platforms','Legacy modernization planning to move from outdated systems to cloud'] },
  { title:'Managed Services & Ongoing Support', desc:'Keep your cloud reliable, optimized, and secure over the long term through AI-managed cloud services.', items:['Proactive monitoring to spot issues before they escalate','Continuous optimization across workloads, apps, and infrastructure','24/7 support for mission-critical systems and business continuity'] },
]

const csScope = [
  'Full Application Portfolio Discovery across 300+ apps',
  'Cloud Readiness & Feasibility Assessment',
  'Technical Architecture Review',
  'Financial Modelling — Licence Analysis',
  'COTS & 3rd Party App Evaluation',
  'Regulatory & Data Residency Compliance',
]
const csWhyPoints = [
  'Multi-cloud architecture expertise across Azure, AWS, and GCP',
  'Financial industry compliance in our DNA',
  'Lean, decisive squad with zero bureaucracy',
  'Data sovereignty, GDPR, and residency requirements fully addressed',
]
const csSteps = [
  { num:'01', title:'Mapping the Portfolio From Ground Up', body:'StradIT evaluated every application: its technical architecture, dependencies, cloud readiness score, hosting constraints, and regulatory classification. Nothing was assumed. Everything was measured.' },
  { num:'02', title:'Modelling the Financials — Beyond the Obvious Costs', body:'Our team built a comprehensive financial model quantifying the total cost of running each app in the cloud, identifying savings from infrastructure consolidation, and surfacing licence rationalisation opportunities that had been overlooked for years.' },
  { num:'03', title:'Building a Roadmap That Respects Reality', body:'We segmented applications into migration waves based on complexity, cost, risk, and business value. Each wave came with a clear sequencing plan, a governance framework, and defined KPIs so progress could be tracked and reported with confidence.' },
  { num:'04', title:'Resolving the Licence Complexity', body:'One of the most complex challenges was untangling legacy Oracle and third-party application licences. StradIT led licence renegotiations, restructured agreements, and identified where SaaS replacements could deliver better value at a fraction of the cost.' },
  { num:'05', title:'Keeping Regulators and Data Residency Teams Comfortable', body:'Every cloud migration recommendation was tested against the client\'s regulatory obligations. StradIT worked alongside the client\'s legal and compliance teams to ensure data residency, GDPR, and sovereignty constraints were fully satisfied — with no shortcuts.' },
]
const csOutcomes = [
  { v:'30%', l:'Reduction in operational costs' },
  { v:'70%', l:'Reduction in licence costs' },
  { v:'50%', l:'Faster deployment cycles' },
  { v:'300+', l:'Apps assessed and mapped' },
]
const csResults = [
  'Cloud-ready roadmap delivered with full financial justification',
  'Regulatory and data residency requirements fully addressed',
  'Legacy licence waste eliminated through expert renegotiation',
  'Phased migration plan aligned to business priorities',
]

const gradText = { fontStyle:'normal' as const, background:'linear-gradient(120deg,var(--accent),var(--accent-2))', WebkitBackgroundClip:'text' as const, backgroundClip:'text' as const, color:'transparent' as const }

export default function CoeCloudPage() {
  return (
    <>
      <Nav activePage="coe" />

      {/* HERO */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="cloud" /></div>
        <div className="container hero__inner">
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

      {/* APPROACH */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Our Approach</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              Shaping Cloud You Need <em style={gradText}>With Conviction</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              From early discovery and planning to 24/7 operations, we partner with you to build resilient, AI-optimized cloud systems built for production.
            </p>
          </div>
          <div className="cards-2">
            {cards.map((card,i) => (
              <div key={card.title} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',padding:'40px 36px',display:'flex',flexDirection:'column',gap:'16px'}}>
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
            Define Your Cloud Roadmap
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      {/* CLIENT IMPACT — inline case study toggle */}
      <CaseStudySection
        left={
          <div>
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'20px'}}>
              Cloud Outcomes That Actually <em style={gradText}>Hold Up In Production</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'32px',maxWidth:'680px'}}>
              Wondering how the cloud is becoming the backbone of modern businesses? Read the case study below to see how our cloud advisory fixed operational costs, tamed licence spend, and laid the foundations of fast and stable growth.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Redefine Cloud With StradIT
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        }
        tag="Case Study · Cloud & Infrastructure"
        cardTitle={<>30% Less Operations Cost with<br />Expert Cloud Advisory</>}
        cardDesc="How StradIT helped a US-based financial institution move from a fragmented legacy data-centre landscape to a cloud-ready, cost-optimised portfolio — without compromising regulatory or data-residency requirements."
        stats={[['30%','Less Ops Cost'],['70%','Less Licence Cost'],['50%','Faster Deployment']]}
      >
        {/* ── CS 01: CLIENT OVERVIEW ── */}
        <section className="section" style={{paddingTop:'80px'}}>
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·01</span><span>Client Overview</span></div>
            <div className="section-intro">
              <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>A US Financial Institution <em style={gradText}>Trapped in Legacy</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
                A US-based financial institution managing a complex portfolio of over 300 applications across on-premise data centres. Cloud transformation had been on the roadmap for years — but the weight of technical debt, compliance obligations, and unstructured licence agreements had kept them stuck.
              </p>
            </div>
          </div>
        </section>

        {/* ── CS 02: WHY STRADIT ── */}
        <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·02</span><span>Why StradIT</span></div>
            <div className="two-col">
              <div>
                <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>Cloud Expertise Built for <em style={gradText}>Regulated Environments</em></h2>
                <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',marginBottom:'24px'}}>
                  StradIT was brought in to do what internal teams couldn't: cut through the complexity, align stakeholders, and deliver an actionable cloud transformation plan grounded in financial rigour and regulatory precision.
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

        {/* ── CS 03: SCOPE ── */}
        <section className="section">
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·03</span><span>Scope of Engagement</span></div>
            <div className="section-intro">
              <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em'}}>A Complete <em style={gradText}>Cloud Advisory Programme</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7'}}>A six-track engagement covering every dimension of cloud readiness.</p>
            </div>
            <div className="cs-g3" style={{marginBottom:'32px'}}>
              {csScope.map((s,i) => (
                <div key={i} style={{background:'var(--ink-1)',padding:'24px 20px',display:'flex',gap:'12px',alignItems:'flex-start'}}>
                  <span style={{color:'var(--accent)',flexShrink:0,marginTop:'2px'}}>→</span>
                  <span style={{color:'var(--text-1)',fontSize:'13px',lineHeight:'1.6'}}>{s}</span>
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
              <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em'}}>Cloud Strategy Backed by <em style={gradText}>Financial Precision</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7'}}>Five focused workstreams that turned a stalled programme into a clear path forward.</p>
            </div>
            <div className="cs-steps" style={{marginBottom:'32px'}}>
              {csSteps.map(step => (
                <div key={step.num} className="cs-step" style={{background:'var(--ink-2)',padding:'28px 32px'}}>
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

        {/* ── CS 05: OUTCOMES ── */}
        <section className="section">
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·05</span><span>Outcomes</span></div>
            <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em',marginBottom:'12px'}}>Cloud Clarity. <em style={gradText}>Cost Confidence.</em></h2>
            <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',maxWidth:'680px',marginBottom:'40px'}}>The client moved from a cloud conversation that had stalled for years to a funded, phased programme with full regulatory clearance.</p>
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
                <div key={i} style={{background:'var(--ink-1)',padding:'22px 24px',display:'flex',gap:'12px',alignItems:'flex-start'}}>
                  <span style={{color:'var(--accent)',flexShrink:0,marginTop:'2px'}}>→</span>
                  <span style={{color:'var(--text-1)',fontSize:'13px',lineHeight:'1.6'}}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CS CTA ── */}
        <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
          <div className="container" style={{textAlign:'center',maxWidth:'640px',margin:'0 auto'}}>
            <h2 style={{fontSize:'clamp(24px,3.5vw,40px)',letterSpacing:'-0.03em',marginBottom:'16px',lineHeight:1.1}}>
              StradIT Can Build the <em style={gradText}>Cloud Foundation You Deserve</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',marginBottom:'28px'}}>
              Strategy, architecture, migration, and managed operations — all in one place.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Request a Cloud Advisory Session
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </section>
      </CaseStudySection>

      <Footer />
    </>
  )
}

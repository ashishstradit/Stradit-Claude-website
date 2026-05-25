import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'
import CaseStudySection from '@/components/CaseStudySection'

export const metadata = { title: 'Automated AI Testing — StradIT' }

const csChallenges = [
  'Legacy framework couldn\'t adapt to new requirements',
  'Only developers with deep Java knowledge could write or maintain test scripts',
  'High licensing costs for proprietary tools',
  'Longer test cycles slowing down releases',
]
const csWhyPoints = [
  'Practical, hands-on experience building frameworks that actually work for real teams',
  'We believe the best framework is the one anyone can use — no inventing the wheel',
  'We partnered closely to understand testing needs, application landscape, and long-term goals',
]
const csOfferings = [
  'End-to-end development of a test automation framework',
  'Test execution across APIs, user interfaces, and databases',
  'A keyword-driven approach',
  'Seamless integration with modern technology stacks',
  'Agile practices for speed and transparency',
]
const csSteps = [
  { num:'01', title:'Choosing the Right Foundation', tech:'Robot Framework · Python', body:'We selected Robot Framework as the backbone of the new solution — an open-source automation platform that supports a keyword-driven approach. We paired it with Python. The result? Zero licensing cost and a testing solution that everyone on the team could use seamlessly.' },
  { num:'02', title:'Designing for Flexibility and Scale', tech:'Page Object Model', body:'Our team designed the framework using the Page Object Model, which separates test logic from page-specific code. We powered it with built-in support for multiple environments, allowing the client to run the same tests against development, staging, and production without rewrites. Easy and hassle-free testing.' },
  { num:'03', title:'Enabling End-to-End Coverage', tech:'API · UI · Database', body:'We built the framework to handle API testing, UI testing, and database validation in a unified flow — the bank was no longer testing in isolation. Issues at their infant stage were caught whether they originated in backend services, frontend interfaces, or data layers.' },
  { num:'04', title:'Making It Easy for Everyone', tech:'Keyword-Driven Testing', body:'Since Robot Framework is keyword-driven, the in-house testers were able to write and understand tests using plain language keywords. They didn\'t have to wrestle with complex code. The entire team — not just developers — became active contributors to quality.' },
  { num:'05', title:'Delivering with Agile Discipline', tech:'Agile · Governance', body:'We followed Agile methodology throughout the engagement, delivering working increments on a regular cadence. Our governance framework kept the project on track with clear visibility into progress, risks, and outcomes. The client always knew where things stood and had input at every stage.' },
]
const csOutcomes = [
  { v:'Zero', l:'Licensing costs' },
  { v:'Faster', l:'Test development cycles' },
  { v:'Fewer', l:'Errors in test scripts' },
  { v:'Broader', l:'Adoption across teams' },
]
const csResults = [
  'Zero licensing costs — fully open-source foundation',
  'Faster test development and shorter release cycles',
  'Fewer errors in test scripts with keyword-driven simplicity',
  'Broader adoption across the entire team, not just developers',
  'Smooth integration with cloud, AI, and data analytics stacks',
  'A testing foundation that scales with the bank\'s ambitions',
]

const gradText = { fontStyle:'normal' as const, background:'linear-gradient(120deg,var(--accent),var(--accent-2))', WebkitBackgroundClip:'text' as const, backgroundClip:'text' as const, color:'transparent' as const }

export default function CoeTestingPage() {
  return (
    <>
      <Nav activePage="coe" />

      {/* HERO */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="testing" /></div>
        <div className="container hero__inner">
          <h1 className="hero__title">Automated <em>AI Testing</em></h1>
          <p className="hero__sub">Engineering Trust in Every Line of Code</p>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.65',maxWidth:'600px',marginBottom:'36px'}}>
            StradIT provides bespoke and AI-powered Testing &amp; Quality Engineering that enable faster time-to-market without compromising on quality, reduce defect leakage, and lower TCO while enhancing customer satisfaction.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Strengthen Your Quality Engineering
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe" className="btn btn--ghost">All practices</Link>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-cell"><div className="hero__meta-v">70+</div><div className="hero__meta-k">Professionals</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">3x faster</div><div className="hero__meta-k">Regression Cycles</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">40% Fewer</div><div className="hero__meta-k">Production Defects</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Reference</div><div className="hero__meta-v" style={{fontSize:'12px',lineHeight:'1.4'}}><small>About — Social Driver</small></div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">Suite · Green</span>
          <span className="hero__hud-grid">
            <span>TESTS <b>42K</b></span><span>PASS <b>99.6%</b></span><span>TIME <b>7m12s</b></span>
          </span>
          <span>QA · v2026.05</span>
        </div>
      </header>

      {/* APPROACH */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Our Approach</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              Precision-Driven Testing for <em style={gradText}>Confident Delivery</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              We bring quality into the full product lifecycle, from early validation to release readiness. Our approach combines proven QA practices with AI-assisted test optimization and business-aligned strategies, so teams can move fast without adding risk.
            </p>
          </div>
          <div className="cards-3">
            {[
              { title:'End-to-End QA Lifecycle Support', desc:'StradIT is committed to equipping enterprises with state-of-the-art quality engineering. From targeted testing engagements to fully managed QA programs, we help teams release more often with fewer surprises.', items:['Framing and deploying of tailored test strategies','End-to-end automation scripting and maintenance','Structured defect tracking and resolution'] },
              { title:'Testing & Quality Engineering Frameworks', desc:'StradIT is a strategic partner that understands both tech and business. We deliver inventive testing & quality engineering frameworks designed to lower QA overheads and reduce operational risks.', items:['Tailored frameworks','Streamlined automated practices','Reusable components'] },
              { title:'Domain-Specific Testing Expertise', desc:'StradIT combines domain expertise with advanced QA frameworks and empowers enterprises to release technology that is secure, compliant, and trusted by end-users.', items:['Context-aware testing','Rigorous validation','Business-centric outcomes'] },
            ].map((card,i)=>(
              <div key={card.title} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',padding:'36px 28px',display:'flex',flexDirection:'column',gap:'16px'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',color:'var(--accent)'}}>0{i+1}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'20px',fontWeight:500,letterSpacing:'-0.02em'}}>{card.title}</div>
                <p style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.65',flex:1}}>{card.desc}</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'6px'}}>
                  {card.items.map(item=>(
                    <li key={item} style={{fontSize:'13px',color:'var(--text-1)',display:'flex',gap:'8px'}}>
                      <span style={{color:'var(--accent)'}}>→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn btn--ghost">
            Optimize Your QA Lifecycle
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      {/* CLIENT IMPACT — inline case study toggle */}
      <CaseStudySection
        eyebrowLabel="Trusted by Fortune 500"
        left={
          <div>
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'20px'}}>
              Releases That Feel Calm, From Development to <em style={gradText}>Launch Day</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'32px'}}>
              Fortune 500 enterprises trust StradIT to embed AI-enhanced quality into every stage of design, development, and deployment. The outcome? Fewer noisy faults, cleaner launches, and quality that holds strong as you scale.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Validate Your Product With Precision
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        }
        tag="Case Study · Automated AI Testing"
        cardTitle={<>Zero Licensing &amp; Unmatched Results:<br />The StradIT Difference</>}
        cardDesc="Breaking free from expensive, complex testing frameworks is not a dream anymore. Discover how a global investment bank modernised its automation with a framework anyone on the team can use."
        stats={[['Zero','Licensing Costs'],['70+','QA Experts'],['5-Step','Transformation']]}
      >
        {/* ── CS 01: CLIENT OVERVIEW ── */}
        <section className="section" style={{paddingTop:'80px'}}>
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·01</span><span>Client Overview</span></div>
            <div className="section-intro">
              <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>A Global Investment Bank <em style={gradText}>Held Back by Legacy Testing</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
                One of the world&apos;s major investment banks, offering investment management and financial services across the globe. The bank was using an outdated test automation setup, causing a heap of hurdles. As the bank planned to adopt cloud, AI integration, and advanced data analytics, it needed a testing approach that could keep pace without draining budgets. This is when StradIT decided to step in.
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
                  StradIT&apos;s Test Automation: <em style={gradText}>A Game-Changer</em>
                </h2>
                <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',marginBottom:'24px'}}>
                  StradIT brings practical, hands-on experience in building test automation frameworks that actually work for real teams. We understand that the best framework is the one that anyone can use without feeling like they&apos;re inventing the wheel.
                </p>
                <div className="cs-mini-g3">
                  {[['70+','Experts'],['Fully-managed','QAs'],['Enterprise-grade','Result']].map(([v,l]) => (
                    <div key={l} style={{background:'var(--ink-3)',border:'1px solid var(--line)',borderRadius:'var(--radius)',padding:'20px 16px',textAlign:'center'}}>
                      <div style={{fontFamily:'var(--font-display)',fontSize:'22px',fontWeight:600,letterSpacing:'-0.03em',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',marginBottom:'4px'}}>{v}</div>
                      <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--text-3)'}}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'1px',background:'var(--line)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
                {csWhyPoints.map((pt,i) => (
                  <div key={i} style={{background:'var(--ink-2)',padding:'22px 20px',display:'flex',gap:'14px',alignItems:'flex-start'}}>
                    <span style={{width:'28px',height:'28px',borderRadius:'50%',border:'1px solid var(--accent)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--accent)',fontSize:'11px',flexShrink:0,marginTop:'2px'}}>✓</span>
                    <span style={{color:'var(--text-0)',fontSize:'14px',lineHeight:'1.55'}}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CS 03: WHAT WE SET OUT TO DO ── */}
        <section className="section">
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·03</span><span>What We Set Out To Do</span></div>
            <div className="section-intro">
              <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em'}}>A Complete <em style={gradText}>Testing Transformation</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7'}}>This client needed a complete transformation of how testing was done across their application portfolio. To achieve this goal, we delivered:</p>
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

        {/* ── CS 04: HOW WE BUILT THE SOLUTION ── */}
        <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·04</span><span>How We Built the Solution</span></div>
            <div className="section-intro">
              <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em'}}>Lean, Agile, and <em style={gradText}>Laser-Focused</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7'}}>The testing and automation strategy we adopted was lean, agile, and laser-focused on the client&apos;s needs.</p>
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
            <div className="section-eyebrow"><span className="idx">CS·05</span><span>What the Client Achieved</span></div>
            <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em',marginBottom:'12px'}}>
              A Genuine Shift in <em style={gradText}>How Testing Works</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',maxWidth:'680px',marginBottom:'40px'}}>
              Since launching the new framework in February 2024, the bank has experienced a genuine shift in how testing supports its delivery pipeline. The bank now has a testing foundation that scales with its ambitions, costs nothing to license, and puts quality in the hands of the people who understand the business best.
            </p>
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
              Stuck With Expensive, Complicated <em style={gradText}>Testing Tools?</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',marginBottom:'28px'}}>
              StradIT can help you build something better — faster, smarter, and free of unnecessary licensing costs.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Request a Test Automation Assessment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </section>
      </CaseStudySection>

      <Footer />
    </>
  )
}

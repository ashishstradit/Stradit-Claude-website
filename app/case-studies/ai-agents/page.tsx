import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'

export const metadata = {
  title: '70% Faster Due Diligence with Purpose-Built AI Agents — StradIT Case Study',
  description:
    'How StradIT built a digital AI workforce that reduced two weeks of due diligence to minutes, delivering a 5,000% ROI for a global financial organisation.',
}

const challenges = [
  'Slow and inconsistent manual processes across asset classes and geographies',
  'Rigid legacy RPA tools unable to handle complex, judgment-intensive workflows',
  'Complex regulatory requirements raising the bar for AML/KYC and compliance',
  'Operations limited to business hours — no 24/7 coverage across jurisdictions',
]

const whyPoints = [
  'Conversational AI agents trained on domain-specific financial knowledge',
  'Autonomous workflows that intelligently escalate exceptions to human reviewers',
  'Continuous learning loops to increase accuracy with each completed task',
  'Enterprise-level security, compliance, and full audit trails',
]

export default function AiAgentsCaseStudyPage() {
  return (
    <>
      <Nav activePage="coe" />

      {/* ── HERO ── */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="ai" /></div>
        <div className="container hero__inner">
          <div className="hero__eyebrow eyebrow">Case Study · Applied Artificial Intelligence</div>
          <h1 className="hero__title">
            70% Faster Due Diligence<br />
            with <em>Purpose-Built AI Agents</em>
          </h1>
          <p className="hero__sub">
            Some companies hired more analysts. This company hired AI agents instead.
          </p>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.65',maxWidth:'600px',marginBottom:'36px'}}>
            StradIT created a digital workforce that reduced two weeks of work to minutes,
            yielding a 5,000% ROI — transforming a headcount-constrained operation into an
            intelligence-driven machine running 24/7 across 50+ jurisdictions.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Request an AI Agent Assessment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe/ai" className="btn btn--ghost">Back to AI CoE</Link>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-cell"><div className="hero__meta-v">70%+</div><div className="hero__meta-k">Faster Due Diligence</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">5,000%</div><div className="hero__meta-k">ROI Delivered</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">2 min</div><div className="hero__meta-k">Was 2 Weeks</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">24/7</div><div className="hero__meta-k">50+ Jurisdictions</div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">Agents · Active</span>
          <span className="hero__hud-grid">
            <span>DEALS <b>40+/yr</b></span>
            <span>ACCURACY <b>95%+</b></span>
            <span>COST <b>$250/mo</b></span>
          </span>
          <span>Case Study · AI</span>
        </div>
      </header>

      {/* ── 01 CLIENT OVERVIEW ── */}
      <section className="section" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Client Overview</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              A Financial Firm Losing{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>to Complexity</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              A mid-to-large financial organisation running alternative investments, AML/KYC,
              and fund operations across multiple asset classes and geographies. They had
              the ambition to grow — what they needed was intelligence that could keep up with it.
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
            They had the ambition. What they needed was intelligence that could keep up with it.
            StradIT built them a digital workforce — not more headcount.
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
                AI Development Built for{' '}
                <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>the Demands of Finance</em>
              </h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'16px'}}>
                StradIT&apos;s expertise in AI development centres on building intelligent agents for
                financial institutions. These are not chatbots operating on a pre-set script.
              </p>
              <p style={{color:'var(--text-2)',fontSize:'14px',lineHeight:'1.7',marginBottom:'28px'}}>
                Every agent is trained on domain-specific knowledge, governed by enterprise-grade
                compliance controls, and designed to improve continuously — handling the work
                that slows human teams down, around the clock.
              </p>
              <Link href="/coe/ai" className="btn btn--ghost">
                Explore AI CoE
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

      {/* ── 03 THE COST COMPARISON ── */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">03</span><span>The Numbers That Matter</span></div>
          <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'48px'}}>
            Human Analyst vs.{' '}
            <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>AI Agent</em>
          </h2>

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
            {/* Human analyst column */}
            <div style={{background:'var(--ink-1)',padding:'40px 36px',display:'flex',flexDirection:'column',gap:'20px'}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--text-3)'}}>Human Analyst</div>
              <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(36px,4vw,56px)',fontWeight:600,letterSpacing:'-0.04em',color:'var(--text-2)',lineHeight:1}}>$200K<span style={{fontSize:'16px',color:'var(--text-3)'}}>/yr</span></div>
              <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                {['Business hours only','One geography / language','Scales with headcount','2-week due diligence cycle','Manual compliance checks'].map(item => (
                  <div key={item} style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'13px',color:'var(--text-2)'}}>
                    <span style={{color:'var(--text-3)',flexShrink:0}}>×</span>{item}
                  </div>
                ))}
              </div>
            </div>
            {/* AI agent column */}
            <div style={{background:'var(--ink-2)',padding:'40px 36px',display:'flex',flexDirection:'column',gap:'20px',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 60% at 0% 100%, rgba(255,122,61,0.08), transparent 70%)',pointerEvents:'none'}} />
              <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)'}}>StradIT AI Agent</div>
              <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(36px,4vw,56px)',fontWeight:600,letterSpacing:'-0.04em',lineHeight:1,background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>$250<span style={{fontSize:'16px'}}>  /mo</span></div>
              <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                {['24/7 — never offline','50+ jurisdictions, 10+ languages','Scales with intelligence','2-minute due diligence','Automated, explainable compliance'].map(item => (
                  <div key={item} style={{display:'flex',gap:'10px',alignItems:'center',fontSize:'13px',color:'var(--text-1)'}}>
                    <span style={{color:'var(--accent)',flexShrink:0}}>✓</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 OUTCOMES ── */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">04</span><span>What the Client Achieved</span></div>
          <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>
            Purpose-Built Agents,{' '}
            <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Proven Results</em>
          </h2>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',maxWidth:'680px',marginBottom:'48px'}}>
            The results demonstrated what purpose-built AI agents can do when built with the
            right expertise and deployed with the right governance.
          </p>
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
          }}>Is Your Team Spending Too Much Time on Work AI Could Handle?</div>
          <h2 style={{
            fontSize:'clamp(28px,4vw,46px)',
            letterSpacing:'-0.03em',
            marginBottom:'20px',
            lineHeight:1.1,
          }}>
            StradIT Builds AI Agents Tailored to{' '}
            <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>
              Financial Operations
            </em>
          </h2>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'36px'}}>
            From design and training through deployment and ongoing optimisation —
            faster, more accurately, and at a fraction of the cost.
          </p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/contact" className="btn btn--primary">
              Request an AI Agent Assessment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe/ai" className="btn btn--ghost">
              Explore AI CoE
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

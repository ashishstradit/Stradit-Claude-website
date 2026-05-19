import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'
import CaseStudySection from '@/components/CaseStudySection'

export const metadata = { title: 'Applied Artificial Intelligence — StradIT' }

const cards = [
  { title:'AI Engineering', desc:'From model designing to deployment, StradIT delivers meticulously formulated frameworks for AI solutions.', items:['Tailored ML and generative AI models','Accelerators and integration toolkits','LLMOps and MLOps foundations'] },
  { title:'Testing & Validation Frameworks', desc:'Enterprise-ready AI solutions delivered through stringent testing and validation.', items:['LLM evaluation frameworks for accuracy, reliability, and scalability','Risk scoring models to surface vulnerabilities and guide mitigation','Guardrails and assurance controls for responsible, policy-aligned AI'] },
  { title:'Business Copilots & Knowledge Systems', desc:'Domain-specific AI copilots and intelligent knowledge systems to embed AI into how teams work.', items:['Tailored AI copilots to address industry-specific challenges','Enterprise knowledge systems powered by fine-tuned LLMs','Knowledge graphs that connect data for smarter decisions'] },
  { title:'Strategic AI Frameworks', desc:'Adopt AI with confidence by aligning every solution to business goals, organizational readiness, and long-term strategy.', items:['Domain value assessment to define where AI will move the needle','AI maturity models to guide adoption from pilot to scale','Use case scoring to prioritize what delivers ROI fastest'] },
  { title:'AI Literacy & Enablement', desc:'AI is as good as the person using it. This is why we go beyond building AI solutions and offer extensive AI literacy and upskilling programs.', items:['AI literacy programs for shared understanding and alignment','Expert-led training across ML, LLMs, generative AI, and governance','Ongoing masterclasses to keep skills sharp as the ecosystem evolves'] },
]

const csChallenges = [
  'Slow and inconsistent manual processes across asset classes and geographies',
  'Rigid legacy RPA tools unable to handle complex, judgment-intensive workflows',
  'Complex regulatory requirements raising the bar for AML/KYC and compliance',
  'Operations limited to business hours — no 24/7 coverage across jurisdictions',
]
const csWhyPoints = [
  'Conversational AI agents trained on domain-specific financial knowledge',
  'Autonomous workflows that intelligently escalate exceptions to human reviewers',
  'Continuous learning loops to increase accuracy with each completed task',
  'Enterprise-level security, compliance, and full audit trails',
]
const csOutcomes = [
  { v:'70%+', l:'Faster due diligence' },
  { v:'5,000%', l:'ROI on the investment' },
  { v:'40+', l:'Deals per year (was a few)' },
  { v:'24/7', l:'Ops across 50+ jurisdictions' },
]
const csResults = [
  'AltsIQ identified 95%+ of operational risks without missing a beat',
  'Due diligence reduced from a 2-week slog to a 2-minute exercise',
  'Deal capacity grew from a few per year to 40+ at the same cost point',
  'AI agent cost: $250/month vs. $200K/year for a human analyst',
  'Operations now run 24/7 across 50+ jurisdictions in 10+ languages',
  'Compliance analysis improved for speed, accuracy, and explainability',
]

const gradText = { fontStyle:'normal' as const, background:'linear-gradient(120deg,var(--accent),var(--accent-2))', WebkitBackgroundClip:'text' as const, backgroundClip:'text' as const, color:'transparent' as const }

export default function CoeAiPage() {
  return (
    <>
      <Nav activePage="coe" />

      {/* HERO */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="ai" /></div>
        <div className="container hero__inner">
          <div className="hero__eyebrow eyebrow">Center of Excellence · Applied AI</div>
          <h1 className="hero__title">Applied <em>Artificial Intelligence</em></h1>
          <p className="hero__sub">Intelligent AI for a Smarter Future</p>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.65',maxWidth:'600px',marginBottom:'36px'}}>
            AI should not live in slides and pilots. It should run inside real workflows. StradIT builds secured, governed, and ready to scale enterprise-grade AI solutions across ML, generative AI, LLMs, guardrails, assurance AI, and maturity models.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Start Your AI Transformation
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe" className="btn btn--ghost">All practices</Link>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-cell"><div className="hero__meta-v">60%</div><div className="hero__meta-k">Workflow Efficiency Gain</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">4x Faster</div><div className="hero__meta-k">Knowledge Retrieval</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">50% Better</div><div className="hero__meta-k">Time-to-Value</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Reference</div><div className="hero__meta-v" style={{fontSize:'12px',lineHeight:'1.4'}}><small>About — Social Driver</small></div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">Inference live · 1.2M tok/s</span>
          <span className="hero__hud-grid"><span>MODELS <b>14</b></span><span>AGENTS <b>62</b></span><span>EVAL PASS <b>97.4%</b></span></span>
          <span>AI · v2026.05</span>
        </div>
      </header>

      {/* APPROACH */}
      <section className="section" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Our Approach</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              AI Engineered for <em style={gradText}>Real-World Impact</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              StradIT delivers measurable AI outcomes, not experiments. We pair deep engineering with strategic planning so every solution is designed to deploy, adopt, and perform, aligned to your business, risk posture, and operating model.
            </p>
          </div>
          <div className="cards-2-top">
            {cards.slice(0,2).map((card,i) => (
              <div key={card.title} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',padding:'36px 32px',display:'flex',flexDirection:'column',gap:'16px'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',color:'var(--accent)'}}>0{i+1}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'20px',fontWeight:500,letterSpacing:'-0.02em'}}>{card.title}</div>
                <p style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.65',flex:1}}>{card.desc}</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'6px'}}>
                  {card.items.map(item => <li key={item} style={{fontSize:'13px',color:'var(--text-1)',display:'flex',gap:'8px'}}><span style={{color:'var(--accent)',flexShrink:0}}>→</span>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="cards-3-bottom">
            {cards.slice(2).map((card,i) => (
              <div key={card.title} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',padding:'36px 28px',display:'flex',flexDirection:'column',gap:'16px'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',color:'var(--accent)'}}>0{i+3}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'20px',fontWeight:500,letterSpacing:'-0.02em'}}>{card.title}</div>
                <p style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.65',flex:1}}>{card.desc}</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'6px'}}>
                  {card.items.map(item => <li key={item} style={{fontSize:'13px',color:'var(--text-1)',display:'flex',gap:'8px'}}><span style={{color:'var(--accent)',flexShrink:0}}>→</span>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn btn--ghost">
            Deploy Smart AI
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      {/* CLIENT IMPACT — inline case study toggle */}
      <CaseStudySection
        left={
          <div>
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'20px'}}>
              AI That&apos;s More Than <em style={gradText}>A Buzzword</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'32px',maxWidth:'680px'}}>
              Our Center of Excellence around AI Solutions has helped global enterprises move from &quot;let&apos;s try AI&quot; to &quot;we can&apos;t imagine running this operation without it.&quot;
            </p>
            <Link href="/contact" className="btn btn--primary">
              Validate AI With Confidence
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        }
        tag="Case Study · Applied AI"
        cardTitle={<>70% Faster Due Diligence with<br />Purpose-Built AI Agents</>}
        cardDesc="How StradIT built a digital AI workforce that cut a 2-week due diligence cycle to 2 minutes — operating 24/7 across 50+ jurisdictions, delivering a 5,000% ROI for a global financial organisation."
        stats={[['70%+','Faster Due Diligence'],['5,000%','ROI'],['24/7','50+ Jurisdictions']]}
      >
        {/* ── CS 01: CLIENT OVERVIEW ── */}
        <section className="section" style={{paddingTop:'80px'}}>
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·01</span><span>Client Overview</span></div>
            <div className="section-intro">
              <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>A Financial Firm Losing <em style={gradText}>to Complexity</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
                A mid-to-large financial organisation running alternative investments, AML/KYC, and fund operations across multiple asset classes and geographies. They had the ambition to grow — what they needed was intelligence that could keep up with it.
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
                  AI Development Built for <em style={gradText}>the Demands of Finance</em>
                </h2>
                <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',marginBottom:'24px'}}>
                  Every agent is trained on domain-specific knowledge, governed by enterprise-grade compliance controls, and designed to improve continuously — handling the work that slows human teams down, around the clock.
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

        {/* ── CS 03: COST COMPARISON ── */}
        <section className="section">
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·03</span><span>The Numbers That Matter</span></div>
            <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em',marginBottom:'40px'}}>
              Human Analyst vs. <em style={gradText}>AI Agent</em>
            </h2>
            <div className="cs-g2" style={{marginBottom:'32px'}}>
              <div style={{background:'var(--ink-1)',padding:'36px 28px',display:'flex',flexDirection:'column',gap:'16px'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--text-3)'}}>Human Analyst</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(32px,4vw,48px)',fontWeight:600,letterSpacing:'-0.04em',color:'var(--text-2)',lineHeight:1}}>$200K<span style={{fontSize:'14px',color:'var(--text-3)'}}>/yr</span></div>
                <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                  {['Business hours only','One geography / language','Scales with headcount','2-week due diligence cycle','Manual compliance checks'].map(item=>(
                    <div key={item} style={{display:'flex',gap:'8px',alignItems:'center',fontSize:'13px',color:'var(--text-2)'}}>
                      <span style={{color:'var(--text-3)',flexShrink:0}}>×</span>{item}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{background:'var(--ink-2)',padding:'36px 28px',display:'flex',flexDirection:'column',gap:'16px',position:'relative',overflow:'hidden'}}>
                <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 60% at 0% 100%, rgba(255,122,61,0.08), transparent 70%)',pointerEvents:'none'}} />
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--accent)'}}>StradIT AI Agent</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(32px,4vw,48px)',fontWeight:600,letterSpacing:'-0.04em',lineHeight:1,background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>$250<span style={{fontSize:'14px'}}>/mo</span></div>
                <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                  {['24/7 — never offline','50+ jurisdictions, 10+ languages','Scales with intelligence','2-minute due diligence','Automated, explainable compliance'].map(item=>(
                    <div key={item} style={{display:'flex',gap:'8px',alignItems:'center',fontSize:'13px',color:'var(--text-1)'}}>
                      <span style={{color:'var(--accent)',flexShrink:0}}>✓</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CS 04: OUTCOMES ── */}
        <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
          <div className="container">
            <div className="section-eyebrow"><span className="idx">CS·04</span><span>Outcomes</span></div>
            <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em',marginBottom:'12px'}}>Purpose-Built Agents, <em style={gradText}>Proven Results</em></h2>
            <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',maxWidth:'680px',marginBottom:'40px'}}>The results demonstrated what purpose-built AI agents can do when built with the right expertise and deployed with the right governance.</p>
            <div className="cs-g4" style={{marginBottom:'40px'}}>
              {csOutcomes.map(o=>(
                <div key={o.l} style={{background:'var(--ink-2)',padding:'28px 20px',display:'flex',flexDirection:'column',gap:'6px'}}>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(24px,3vw,36px)',fontWeight:600,letterSpacing:'-0.03em',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',lineHeight:1.1}}>{o.v}</div>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--text-3)',lineHeight:1.4}}>{o.l}</div>
                </div>
              ))}
            </div>
            <div className="cs-g2">
              {csResults.map((r,i)=>(
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
              StradIT Builds AI Agents Tailored to <em style={gradText}>Financial Operations</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',marginBottom:'28px'}}>
              From design and training through deployment and ongoing optimisation — faster, more accurately, and at a fraction of the cost.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Request an AI Agent Assessment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </section>
      </CaseStudySection>

      <Footer />
    </>
  )
}

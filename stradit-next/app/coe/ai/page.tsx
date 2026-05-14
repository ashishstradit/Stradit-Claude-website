import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'

export const metadata = { title: 'Applied Artificial Intelligence — StradIT' }

const cards = [
  {
    title: 'AI Engineering',
    desc: 'From model designing to deployment, StradIT delivers meticulously formulated frameworks for AI solutions.',
    items: [
      'Tailored ML and generative AI models',
      'Accelerators and integration toolkits',
      'LLMOps and MLOps foundations',
    ],
  },
  {
    title: 'Testing & Validation Frameworks',
    desc: 'Enterprise-ready AI solutions delivered through stringent testing and validation.',
    items: [
      'LLM evaluation frameworks for accuracy, reliability, and scalability',
      'Risk scoring models to surface vulnerabilities and guide mitigation',
      'Guardrails and assurance controls for responsible, policy-aligned AI',
    ],
  },
  {
    title: 'Business Copilots & Knowledge Systems',
    desc: 'Domain-specific AI copilots and intelligent knowledge systems to embed AI into how teams work.',
    items: [
      'Tailored AI copilots to address industry-specific challenges',
      'Enterprise knowledge systems powered by fine-tuned LLMs',
      'Knowledge graphs that connect data for smarter decisions',
    ],
  },
  {
    title: 'Strategic AI Frameworks',
    desc: 'Adopt AI with confidence by aligning every solution to business goals, organizational readiness, and long-term strategy.',
    items: [
      'Domain value assessment to define where AI will move the needle',
      'AI maturity models to guide adoption from pilot to scale',
      'Use case scoring to prioritize what delivers ROI fastest',
    ],
  },
  {
    title: 'AI Literacy & Enablement',
    desc: 'AI is as good as the person using it. This is why we go beyond building AI solutions and offer extensive AI literacy and upskilling programs.',
    items: [
      'AI literacy programs for shared understanding and alignment',
      'Expert-led training across ML, LLMs, generative AI, and governance',
      'Ongoing masterclasses to keep skills sharp as the ecosystem evolves',
    ],
  },
]

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

      {/* AI ENGINEERED FOR REAL-WORLD IMPACT */}
      <section className="section" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Our Approach</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              AI Engineered for{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Real-World Impact</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              StradIT delivers measurable AI outcomes, not experiments. We pair deep engineering with strategic planning so every solution is designed to deploy, adopt, and perform, aligned to your business, risk posture, and operating model.
            </p>
          </div>
          <div className="cards-2-top">
            {cards.slice(0,2).map((card, i) => (
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

          <div className="cards-3-bottom">
            {cards.slice(2).map((card, i) => (
              <div key={card.title} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',padding:'36px 28px',display:'flex',flexDirection:'column',gap:'16px'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',color:'var(--accent)'}}>0{i+3}</div>
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
            Deploy Smart AI
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      {/* AI THAT'S MORE THAN A BUZZWORD */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">02</span><span>Client Impact</span></div>
          <div>
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'20px'}}>
              AI That's More Than{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>A Buzzword</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'32px',maxWidth:'680px'}}>
              Our Center of Excellence around AI Solutions has helped global enterprises move from "let's try AI" to "we can't imagine running this operation without it." The stories below are proof of this.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Validate AI With Confidence
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

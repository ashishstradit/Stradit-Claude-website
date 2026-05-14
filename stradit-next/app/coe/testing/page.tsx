import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'

export const metadata = { title: 'Automated AI Testing — StradIT' }

export default function CoeTestingPage() {
  return (
    <>
      <Nav activePage="coe" />

      {/* HERO */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="testing" /></div>
        <div className="container hero__inner">
          <div className="hero__eyebrow eyebrow">Center of Excellence · Quality Engineering</div>
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

      {/* PRECISION-DRIVEN TESTING */}
      <section className="section" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Our Approach</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              Precision-Driven Testing for <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Confident Delivery</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              We bring quality into the full product lifecycle, from early validation to release readiness. Our approach combines proven QA practices with AI-assisted test optimization and business-aligned strategies, so teams can move fast without adding risk.
            </p>
          </div>
          <div className="cards-3">
            {[
              {
                title:'End-to-End QA Lifecycle Support',
                desc:'StradIT is committed to equipping enterprises with state-of-the-art quality engineering through fully-managed QA programs. From targeted testing engagements to fully managed QA programs, we help teams release more often with fewer surprises.',
                items:['Framing and deploying of tailored test strategies','End-to-end automation scripting and maintenance','Structured defect tracking and resolution'],
              },
              {
                title:'Testing & Quality Engineering Frameworks',
                desc:'StradIT is a strategic partner that understands both tech and business. We deliver inventive testing & quality engineering frameworks designed to lower QA overheads and reduce operational risks.',
                items:['Tailored frameworks','Streamlined automated practices','Reusable components'],
              },
              {
                title:'Domain-Specific Testing Expertise',
                desc:'StradIT combines domain expertise with advanced QA frameworks and empowers enterprises to release technology that is secure, compliant, and trusted by end-users.',
                items:['Context-aware testing','Rigorous validation','Business-centric outcomes'],
              },
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

      {/* RELEASES THAT FEEL CALM */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">02</span><span>Trusted by Fortune 500</span></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr',gap:'80px',alignItems:'center'}}>
            <div>
              <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'20px'}}>
                Releases That Feel Calm,<br/>From Development to the <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Launch Day</em>
              </h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'32px'}}>
                Fortune 500 enterprises trust StradIT to embed AI-enhanced quality into every stage of design, development, and deployment. The outcome? Fewer noisy faults, cleaner launches, and quality that holds strong as you scale.
              </p>
              <Link href="/contact" className="btn btn--primary">
                Validate Your Product With Precision
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

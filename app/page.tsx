import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'
import LandingCarousel from '@/components/LandingCarousel'
import CoeCard from '@/components/CoeCard'

const coeCards = [
  {
    href: '/coe/ai', size: 'lg' as const, animDelay: 0,
    badge: 'CoE · Flagship', chips: ['LLM', 'Agents', 'Governance'],
    theme: 'ai' as const, animKey: 'card-ai',
    title: 'Applied Artificial Intelligence',
    desc: 'Production-grade AI workflows with guardrails, human oversight, and clear ROI paths.',
    highlights: ['Intelligent process automation','LLM governance and guardrails','AI readiness training for teams','Responsible AI playbooks'],
    cta: 'Explore practice',
  },
  {
    href: '/coe/data', size: 'md' as const, animDelay: 80,
    badge: 'CoE', chips: ['Streaming', 'BI'],
    theme: 'data' as const, animKey: 'card-data',
    title: 'Data Analytics — Applied AI',
    desc: 'Turn fragmented data into trusted insights; built for speed, accuracy, and action.',
    highlights: ['Modern analytics foundations','AI-powered data quality','Executive dashboards','Predictive models'],
    cta: 'Explore',
  },
  {
    href: '/coe/cyber', size: 'sm' as const, animDelay: 160,
    badge: 'CoE', chips: ['Threat', 'Compliance'],
    theme: 'cyber' as const, animKey: 'card-cyber',
    title: 'Cyber Security — Applied AI',
    desc: 'Strengthen security posture with AI-driven threat intelligence.',
    highlights: ['Security architecture','AI-enhanced threat visibility','Compliance & audit readiness','Secure AI & data protection'],
    cta: 'Explore',
  },
  {
    href: '/coe/cloud', size: 'sm' as const, animDelay: 240,
    badge: 'CoE', chips: ['Migration', 'SRE'],
    theme: 'cloud' as const, animKey: 'card-cloud',
    title: 'Cloud & Infrastructure — Applied AI',
    desc: "AI-optimized cloud & infrastructure that's resilient, scalable, and cost-aware.",
    highlights: ['AI-assisted cloud migration','Infrastructure modernization','Reliability engineering','Platform standardization'],
    cta: 'Explore',
  },
  {
    href: '/coe/testing', size: 'sm' as const, animDelay: 320,
    badge: 'CoE', chips: ['QA', 'Resilience'],
    theme: 'testing' as const, animKey: 'card-testing',
    title: 'Automated AI Testing',
    desc: 'Ship faster with AI-powered testing woven into every release.',
    highlights: ['Automation-first QA','Performance & resilience testing','Test strategy and tooling','Continuous quality systems'],
    cta: 'Explore',
  },
  {
    href: '/gcc', size: 'md' as const, animDelay: 400,
    style: { minHeight: '280px' }, visualStyle: { minHeight: '130px' },
    badge: 'Global', chips: ['GCC', 'Enablement'],
    theme: 'gcc' as const, animKey: 'card-gcc',
    title: 'Global Capability Center (GCC)',
    desc: 'AI-enabled centers that operate as a true extension of your business.',
    highlights: ['GCC setup and operating model','Talent, tooling, and delivery governance','CoE design and scaling','Continuous performance improvement'],
    cta: 'Explore GCC',
  },
]

export const metadata = { title: 'StradIT — Applied AI & Engineering for Capital Markets' }

export default function HomePage() {
  return (
    <>
      <Nav activePage="home" />

      {/* HERO */}
      <header className="hero hero--carousel">
        <LandingCarousel />
        <div className="container hero__inner">
          <div className="hero__eyebrow eyebrow">Applied AI · Engineering · Delivery</div>
          <h1 className="hero__title">
            <em>Applied AI and Engineering</em><br/>
            That Delivers <span className="blue">Measurable Change</span>
          </h1>
          <p className="hero__sub">StradIT helps you turn technology into a lasting edge through applied AI and high-quality engineering delivery.</p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Start Your Digital Transformation
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe" className="btn btn--ghost">Explore Our Center of Excellence</Link>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-cell"><div className="hero__meta-k">Engagements</div><div className="hero__meta-v">40+ <small>capital-markets programs</small></div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Production AI</div><div className="hero__meta-v">120+ <small>governed workflows shipped</small></div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Delivery</div><div className="hero__meta-v">8 wks <small>median time-to-value</small></div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Coverage</div><div className="hero__meta-v">4 regions <small>USA · UK · Europe · Asia</small></div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">Live · StradIT AI Mesh</span>
          <span className="hero__hud-grid">
            <span>NODES <b>1,284</b></span>
            <span>LATENCY <b>42ms</b></span>
            <span>UPTIME <b>99.99%</b></span>
          </span>
          <span>v2026.05</span>
        </div>
      </header>

      {/* ABOUT STRADIT */}
      <section className="section" style={{paddingBottom:'48px',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>The Firm</span></div>
          <Link className="pair-card reveal" href="/about" style={{display:'block',maxWidth:'100%'}}>
            <div style={{display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:'48px',alignItems:'center'}}>
              <div>
                <div className="num" style={{marginBottom:'10px'}}>→ About Stradit</div>
                <div className="title">About <em>Stradit</em></div>
                <div className="desc" style={{maxWidth:'540px'}}>Engineers and operators building the applied AI layer for global finance. We sit alongside CTOs, CIOs and COOs at the most regulated institutions in the world — delivering production AI with the governance and rigor regulators demand.</div>
              </div>
              <div>
                <div className="row" style={{marginBottom:'24px',display:'flex',gap:'24px'}}>
                  <div><div className="stat__v">2014</div><div className="stat__l">Founded</div></div>
                  <div><div className="stat__v">300+</div><div className="stat__l">Projects</div></div>
                  <div><div className="stat__v">5</div><div className="stat__l">Practices</div></div>
                  <div><div className="stat__v">4</div><div className="stat__l">Regions</div></div>
                </div>
                <span className="cta-link">Meet the firm</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CENTERS OF EXCELLENCE */}
      <section className="coe-section">
        <div className="container">
          <div className="coe-header">
            <h2 className="reveal">Automate. Elevate. <em>Accelerate.</em></h2>
            <p className="reveal reveal-delay-1">AI built into every layer so your enterprise doesn&apos;t just keep up, it pulls ahead.</p>
          </div>
          <div className="coe-rail">
            {coeCards.map((card) => (
              <CoeCard key={card.href} {...card} />
            ))}
          </div>{/* end coe-rail */}
        </div>{/* end container */}
      </section>{/* end coe-section */}

      {/* STARTIT */}
      <section className="section" style={{borderTop:'1px solid var(--line)',background:'var(--ink-1)'}}>
        <div className="container">
          <div className="two-col">
            <div>
              <div className="section-eyebrow" style={{marginBottom:'24px'}}>
                <span className="idx">StartIT</span><span>AI Training &amp; Upskilling</span>
              </div>
              <h2 style={{fontSize:'clamp(26px,4.5vw,56px)',letterSpacing:'-0.03em',lineHeight:'1.08',marginBottom:'20px'}}>
                Turning your teams into{' '}
                <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>AI powerhouses.</em>
              </h2>
              <p style={{color:'var(--text-1)',fontSize:'17px',lineHeight:'1.65',marginBottom:'32px',maxWidth:'480px'}}>
                From &apos;AI Curious&apos; to &apos;AI Certified&apos; in only 8 weeks — training mapped to enterprise roles, grounded in domain realities, and backed by Stradit&apos;s Centers of Excellence.
              </p>
              <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
                <Link href="/startit" className="btn btn--primary">
                  Explore StartIT
                  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </Link>
                <Link href="/contact" className="btn btn--ghost">Book a strategy call</Link>
              </div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'12px'}}>
              {[
                ['Track 01','AI Literacy','Nail the AI Basics'],
                ['Track 02','AI Strategy','From Hype to ROI'],
                ['Track 03','AI Technical','Production-Ready AI'],
                ['Track 04','AI Applied','Build the Breakthrough'],
              ].map(([t,title,sub]) => (
                <div key={t} style={{background:'var(--ink-2)',border:'1px solid var(--line)',borderRadius:'var(--radius)',padding:'20px 22px'}}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',color:'var(--accent)',textTransform:'uppercase',marginBottom:'8px'}}>{t}</div>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'17px',fontWeight:500,letterSpacing:'-0.02em',marginBottom:'6px'}}>{title}</div>
                  <div style={{fontSize:'12px',fontStyle:'italic',color:'var(--accent-2)'}}>{sub}</div>
                </div>
              ))}
              <div style={{background:'var(--ink-2)',border:'1px solid var(--line)',borderLeft:'2px solid var(--accent)',borderRadius:'var(--radius)',padding:'20px 22px',gridColumn:'span 2'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',color:'var(--accent)',textTransform:'uppercase',marginBottom:'8px'}}>Track 05 · Frontier</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'17px',fontWeight:500,letterSpacing:'-0.02em',marginBottom:'6px'}}>Quantum AI Training</div>
                <div style={{fontSize:'12px',fontStyle:'italic',color:'var(--accent-2)'}}>Prepare for the Next Frontier</div>
              </div>
              <div style={{gridColumn:'span 2',display:'flex',gap:'16px',paddingTop:'8px',borderTop:'1px solid var(--line)',marginTop:'4px'}}>
                {[['8 wks','Cohort'],['5','Tracks'],['Hybrid','Delivery']].map(([v,l],i,a) => (
                  <div key={l} style={{flex:1,display:'flex',alignItems:'center',gap:'24px'}}>
                    <div style={{flex:1,textAlign:'center'}}>
                      <div style={{fontFamily:'var(--font-display)',fontSize:'22px',fontWeight:500,color:'var(--text-0)'}}>{v}</div>
                      <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--text-3)',marginTop:'4px'}}>{l}</div>
                    </div>
                    {i < a.length - 1 && <div style={{width:'1px',height:'40px',background:'var(--line)'}} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRADIT VENTURE */}
      <section className="section" style={{borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow" style={{marginBottom:'32px'}}>
            <span className="idx">Stradit Venture</span><span>Co-build · Equity-aligned</span>
          </div>
          <Link className="pair-card reveal" href="/contact" style={{display:'block',maxWidth:'100%'}}>
            <div style={{display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:'48px',alignItems:'center'}}>
              <div>
                <div className="num" style={{marginBottom:'10px'}}>→ Stradit Venture</div>
                <div className="title"><em>Stradit</em> Venture</div>
                <div className="desc" style={{maxWidth:'540px'}}>We co-build AI-native financial products with operators and asset managers — taking ideas from concept to production-grade in 12-week sprints. Equity-aligned, engineering-led, regulator-aware.</div>
              </div>
              <div>
                <div className="row" style={{marginBottom:'24px',display:'flex',gap:'24px'}}>
                  <div><div className="stat__v">12-wk</div><div className="stat__l">Sprint</div></div>
                  <div><div className="stat__v">8</div><div className="stat__l">Active</div></div>
                  <div><div className="stat__v">14</div><div className="stat__l">Shipped</div></div>
                </div>
                <span className="cta-link">Pitch us a product</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* EXCELLENCE VERIFIED */}
      <section className="section" style={{borderTop:'1px solid var(--line)',background:'var(--ink-1)'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'56px'}}>
            <h2 style={{fontSize:'clamp(32px,4.5vw,56px)',letterSpacing:'-0.03em',lineHeight:'1.05',marginBottom:'16px'}}>
              Excellence, Verified at the Foundation
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'17px',lineHeight:'1.6',maxWidth:'560px',margin:'0 auto'}}>
              At StradIT, excellence is not a mere promise. It is the core of our DNA.
            </p>
          </div>
        </div>

        {/* Marquee strip */}
        <div style={{overflow:'hidden',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)',padding:'20px 0',background:'var(--ink-0)'}}>
          <div style={{
            display:'flex',
            animation:'marquee 28s linear infinite',
            width:'max-content',
          }}>
            {[...Array(2)].map((_,ri) => (
              <div key={ri} style={{display:'flex',flexShrink:0}}>
                {[
                  '70+ Elite Engineering Minds',
                  '5,000+ Cloud Instances',
                  '99.9% Operational Resiliency',
                  'High-Velocity Deployment',
                  'Compliance-First Architecture',
                ].map((item) => (
                  <span key={item} style={{
                    display:'inline-flex',
                    alignItems:'center',
                    gap:'16px',
                    padding:'0 40px',
                    fontFamily:'var(--font-mono)',
                    fontSize:'13px',
                    letterSpacing:'0.12em',
                    textTransform:'uppercase',
                    color:'var(--text-1)',
                    whiteSpace:'nowrap',
                  }}>
                    <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--accent)',boxShadow:'0 0 8px var(--accent-glow)',flexShrink:0}} />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BAND */}
      <section className="section" style={{borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div style={{
            background:'radial-gradient(ellipse 80% 100% at 0% 50%,rgba(255,122,61,0.15),transparent 60%),radial-gradient(ellipse 60% 100% at 100% 50%,rgba(76,200,255,0.08),transparent 60%),var(--ink-2)',
            border:'1px solid var(--line-strong)',
            borderRadius:'var(--radius-lg)',
            padding:'72px 64px',
            display:'grid',
            gridTemplateColumns:'1fr auto',
            gap:'48px',
            alignItems:'center',
          }} className="cta-band">
            <div>
              <h2 style={{fontSize:'clamp(28px,4vw,52px)',letterSpacing:'-0.03em',marginBottom:'16px',lineHeight:'1.05'}}>
                Ready to turn innovation<br/>into execution?
              </h2>
              <p style={{color:'var(--text-1)',fontSize:'17px',lineHeight:'1.6',maxWidth:'560px'}}>
                Tell us what you&apos;re planning to build with AI and tech engineering. We&apos;ll map the fastest path from where you are to production outcomes.
              </p>
            </div>
            <div style={{flexShrink:0}}>
              <Link href="/contact" className="btn btn--primary" style={{fontSize:'16px',padding:'16px 32px'}}>
                Contact StradIT
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

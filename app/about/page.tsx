import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroCarousel from '@/components/HeroCarousel'

export const metadata = { title: 'About StradIT' }

export default function AboutPage() {
  return (
    <>
      <Nav activePage="about" />

      {/* HERO */}
      <header className="hero hero--compact hero--carousel">
        <HeroCarousel />
        <div className="container hero__inner">
          <h1 className="hero__title">
            Engineers building<br/>intelligent solutions<br/>for <em>global finance.</em>
          </h1>
          <p className="hero__sub" style={{marginBottom:'32px'}}>
            We deliver real results for the world's top 10 global financial institutions — turning complex technology challenges into production systems that move metrics, with the governance and rigor regulators demand.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Meet the team
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/gcc" className="btn btn--ghost">Our delivery model</Link>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-cell"><div className="hero__meta-k">Founded</div><div className="hero__meta-v">2014 <small>USA · UK · Europe · Asia</small></div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Projects</div><div className="hero__meta-v">500+ <small>enterprise programs delivered</small></div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Practices</div><div className="hero__meta-v">5 <small>Centers of Excellence</small></div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Advisors</div><div className="hero__meta-v">Top 10 <small>global financial institutions</small></div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">Origin · Global</span>
          <span className="hero__hud-grid">
            <span>YEARS <b>12</b></span><span>CLIENTS <b>50+</b></span>
          </span>
          <span>About · v2026.05</span>
        </div>
      </header>

      {/* OUR MISSION */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="two-col--start">
            <div>
              <div className="section-eyebrow"><span className="idx">02</span><span>Our Mission</span></div>
              <h2 style={{fontSize:'clamp(30px,4vw,48px)',letterSpacing:'-0.03em',marginBottom:'8px'}}>Our Mission</h2>
              <p style={{color:'var(--text-1)',fontSize:'18px',fontWeight:500,marginBottom:'20px',letterSpacing:'-0.01em',lineHeight:'1.4'}}>To Transform Technology Into Sustainable Advantage</p>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'32px'}}>
                StradIT aims to reshape AI and cybersecurity, data analytics, testing, &amp; cloud engineering into sustainable competitive advantages for progressive corporations.
              </p>
              <Link href="/coe" className="btn btn--ghost">
                Learn How We Execute
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'16px',paddingTop:'8px'}}>
              {[
                {n:'01',title:'Achieve 100% Dependability',desc:'Consistent delivery across every engagement, every time.'},
                {n:'02',title:'Ensure Absolute Security & Compliance',desc:'Built-in guardrails for data, security, and regulatory alignment.'},
                {n:'03',title:'Empower Teams with Intelligent Tech',desc:'Equipping your people with the tools and mindset to lead with AI.'},
              ].map((item,i)=>(
                <div key={item.n} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-2)',border:'1px solid var(--line)',borderRadius:'var(--radius)',padding:'24px 28px'}}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',color:'var(--accent)',marginBottom:'8px'}}>{item.n}</div>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'18px',fontWeight:500,letterSpacing:'-0.02em',marginBottom:'6px'}}>{item.title}</div>
                  <div style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.6'}}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="section">
        <div className="container">
          <div className="two-col--start">
            <div style={{display:'flex',flexDirection:'column',gap:'16px',paddingTop:'8px'}}>
              {[
                {title:'AI-Powered CoEs Embedded at the Workflow Core',desc:'Our Centers of Excellence are woven into your operations, not bolted on.'},
                {title:'Global Expertise & Strong Operational Focus',desc:'14 geographies, one delivery standard — yours.'},
                {title:'Results-Driven, Execution-First Solutions',desc:'We measure success by outcomes, not outputs.'},
              ].map((item,i)=>(
                <div key={item.title} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',border:'1px solid var(--line)',borderRadius:'var(--radius)',padding:'24px 28px',display:'flex',gap:'16px'}}>
                  <span style={{color:'var(--accent)',fontFamily:'var(--font-mono)',fontSize:'18px',flexShrink:0,marginTop:'2px'}}>→</span>
                  <div>
                    <div style={{fontFamily:'var(--font-display)',fontSize:'17px',fontWeight:500,letterSpacing:'-0.02em',marginBottom:'6px'}}>{item.title}</div>
                    <div style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.6'}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="section-eyebrow"><span className="idx">03</span><span>Our Vision</span></div>
              <h2 style={{fontSize:'clamp(30px,4vw,48px)',letterSpacing:'-0.03em',marginBottom:'8px'}}>Our Vision</h2>
              <p style={{color:'var(--text-1)',fontSize:'18px',fontWeight:500,marginBottom:'20px',letterSpacing:'-0.01em',lineHeight:'1.4'}}>To be the Trustworthy Partner for AI-led Innovation, Integrity, and Impact.</p>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'32px'}}>
                StradIT envisions a future where enterprises rely on us to transform advanced technologies into practical, secure, and scalable solutions.
              </p>
              <Link href="/coe" className="btn btn--ghost">
                Explore Our CoE
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR GLOBAL DELIVERY MODEL */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">04</span><span>Our Global Delivery Model</span></div>
          <div className="two-col--start" style={{marginBottom:'48px'}}>
            <div>
              <h2 style={{fontSize:'clamp(30px,4vw,48px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>Our Global Delivery Model</h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'24px'}}>
                Built on the Sun Model, our AI-enhanced delivery model guarantees zero downtime and non-stop execution for our Fortune 500 partners. We blend global talent with local impact and continuous delivery, keeping your projects always optimized and truly non-stop.
              </p>
              <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',marginBottom:'32px'}}>
                Regardless of the delivery model our clients prefer, they experience consistency, speed, and quality. Our global teams unfailingly meet deadlines while upholding the highest standards of quality and innovation.
              </p>
              <Link href="/contact" className="btn btn--primary">
                Request Your Tailored Delivery
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'16px'}}>
              {[
                {model:'On-site Model',desc:'Direct collaboration at the client locations'},
                {model:'Offsite Model',desc:'Dedicated delivery centers near client hubs'},
                {model:'Offshore Model',desc:'Global talent pool across geographies'},
                {model:'Hybrid Model',desc:'Blending onsite, offsite, and offshore models'},
              ].map((item,i)=>(
                <div key={item.model} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-2)',border:'1px solid var(--line)',borderRadius:'var(--radius)',padding:'24px'}}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.14em',color:'var(--accent)',textTransform:'uppercase',marginBottom:'8px'}}>0{i+1}</div>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'16px',fontWeight:500,letterSpacing:'-0.01em',marginBottom:'6px'}}>{item.model}</div>
                  <div style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.55'}}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WE TAKE PRIDE IN */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">05</span><span>We Take Pride In</span></div>
          <div className="two-col--start" style={{marginBottom:'48px'}}>
            <div>
              <h2 style={{fontSize:'clamp(30px,4vw,48px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>We Take Pride In</h2>
              <p style={{color:'var(--text-1)',fontSize:'18px',fontWeight:500,marginBottom:'20px',letterSpacing:'-0.01em',lineHeight:'1.4'}}>Designing AI and Tech Solutions, Engineered for the Future</p>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'32px'}}>
                At StradIT, excellence isn&apos;t a promise; it&apos;s our North Star, and we make this possible through:
              </p>
              <Link href="/coe" className="btn btn--ghost">
                Experience Our Excellence
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
              {[
                {title:'Integrated Center of Excellence',desc:'Drives innovation across AI, Cybersecurity, Cloud, and Quality Engineering.'},
                {title:'AI Readiness Training',desc:'Prepares teams with the mindset, mastery, and mechanisms to harness AI with precision.'},
                {title:'Continuous Assessment & Improvement',desc:'Confirm sustained excellence.'},
                {title:'Quality Assurance',desc:'Built into every layer of solutions we deliver.'},
              ].map((item,i)=>(
                <div key={item.title} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',border:'1px solid var(--line)',borderRadius:'var(--radius)',padding:'20px 24px',display:'flex',gap:'16px',alignItems:'flex-start'}}>
                  <span style={{color:'var(--accent)',fontSize:'18px',flexShrink:0,marginTop:'2px',fontFamily:'var(--font-mono)'}}>→</span>
                  <div>
                    <div style={{fontFamily:'var(--font-display)',fontSize:'16px',fontWeight:500,letterSpacing:'-0.01em',marginBottom:'4px'}}>{item.title}</div>
                    <div style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.6'}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

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
            About <em>StradIT</em>
          </h1>
          <p className="hero__sub" style={{fontSize:'clamp(18px,2vw,22px)',fontWeight:500,marginBottom:'20px'}}>
            Shaping the Future Through <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>AI-Powered Innovation</em>
          </p>
          <p className="hero__sub" style={{marginBottom:'16px'}}>
            StradIT is a trusted technology partner for enterprises that want AI to drive measurable business outcomes, not just make headlines. We deliver end-to-end transformation by aligning technology with strategic and operational priorities.
          </p>
          <p className="hero__sub" style={{marginBottom:'16px'}}>
            Our capabilities include Global Capability Center (GCC) setup and optimization, AI automation, legacy modernization, analytics, and testing — helping organizations scale innovation with control, speed, and confidence, with AI as the engine behind every capability.
          </p>
          <p className="hero__sub" style={{marginBottom:'32px'}}>
            At the core of StradIT is deep domain expertise across applied AI, data analytics, cybersecurity, cloud and infrastructure, testing, and quality engineering.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Start Your Digital Transformation
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
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

      {/* OUR PHILOSOPHY */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">04</span><span>Our Philosophy</span></div>
          <div className="section-intro" style={{marginBottom:'48px'}}>
            <h2 style={{fontSize:'clamp(30px,4vw,48px)',letterSpacing:'-0.03em'}}>At StradIT, every innovation is guided by <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>governance and accountability.</em></h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>Ensuring AI and technology deliver real, responsible, and lasting impact.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'var(--line)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',overflow:'hidden',marginBottom:'40px'}}>
            {[
              {title:'Technology with Accountability',desc:'We ensure tech is explainable, supervised, and aligned. Our solutions include built-in guardrails for data, security, and compliance.'},
              {title:'Engineering with Purpose',desc:'We are purpose-driven. Every solution, integration, and AI automation is meticulously designed to decode complexity and solve tangible business problems.'},
              {title:'Domain‑First Thinking',desc:'Our teams speak your language. Deep domain expertise across LLMs, governance, and guardrails shapes every design, strategy, and AI model we build.'},
            ].map((p,i)=>(
              <div key={p.title} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-2)',padding:'36px 28px'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',color:'var(--accent)',marginBottom:'12px'}}>0{i+1}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'20px',fontWeight:500,letterSpacing:'-0.02em',marginBottom:'12px'}}>{p.title}</div>
                <p style={{color:'var(--text-2)',fontSize:'14px',lineHeight:'1.65'}}>{p.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn btn--ghost">
            See Our Philosophy in Action
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      {/* GLOBAL DELIVERY MODEL */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">05</span><span>Global Delivery Model</span></div>
          <div className="two-col--start" style={{marginBottom:'48px'}}>
            <div>
              <h2 style={{fontSize:'clamp(30px,4vw,48px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>Built on the <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Sun Model</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'24px'}}>
                Our AI-enhanced delivery model guarantees zero downtime and non-stop execution for our Fortune 500 partners. We blend global talent with local impact and continuous delivery, keeping your projects always optimized and truly non-stop.
              </p>
              <p style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.7',marginBottom:'32px'}}>
                Regardless of the delivery model our clients prefer, they experience consistency, speed, and quality. Our global teams unfailingly meet deadlines while upholding the highest standards of quality and innovation.
              </p>
              <Link href="/contact" className="btn btn--primary">
                Request Your Tailored Delivery
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'16px'}}>
              {[
                {model:'On-site Model',desc:'Direct collaboration at the client locations'},
                {model:'Offsite Model',desc:'Dedicated delivery centers near client hubs'},
                {model:'Offshore Model',desc:'Global talent pool across geographies'},
                {model:'Hybrid Model',desc:'Blending onsite, offsite, and offshore models'},
              ].map((m,i)=>(
                <div key={m.model} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',border:'1px solid var(--line)',borderRadius:'var(--radius)',padding:'24px'}}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.14em',color:'var(--accent)',textTransform:'uppercase',marginBottom:'8px'}}>0{i+1}</div>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'16px',fontWeight:500,letterSpacing:'-0.01em',marginBottom:'6px'}}>{m.model}</div>
                  <div style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.55'}}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WE TAKE PRIDE IN */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">06</span><span>We Take Pride In</span></div>
          <div className="two-col--start" style={{marginBottom:'48px'}}>
            <div>
              <h2 style={{fontSize:'clamp(30px,4vw,48px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>Designing AI and Tech Solutions, <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Engineered for the Future</em></h2>
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
                {title:'Continuous Assessment & Improvement',desc:'Confirm sustained excellence across every engagement.'},
                {title:'Quality Assurance',desc:'Built into every layer of solutions we deliver.'},
              ].map((item,i)=>(
                <div key={item.title} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-2)',border:'1px solid var(--line)',borderRadius:'var(--radius)',padding:'20px 24px',display:'flex',gap:'16px',alignItems:'flex-start'}}>
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

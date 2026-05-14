import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'

export const metadata = { title: 'Global Capability Center — StradIT' }

export default function GccPage() {
  return (
    <>
      <Nav activePage="gcc" />

      {/* HERO */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="gcc" /></div>
        <div className="container hero__inner">
          <div className="hero__eyebrow eyebrow">Global Capability Center · 4 Regions</div>
          <h1 className="hero__title">Your Global<br/><em>Capability Center</em></h1>
          <p className="hero__sub">
            Built by StradIT. Owned by you.<br/>
            Your dedicated tech team, finance hub, or innovation center will be fully operational in weeks, not months. We set it up. We run the backend. You call the shots.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Build What&apos;s Yours
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/about" className="btn btn--ghost">About StradIT</Link>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-cell"><div className="hero__meta-k">Regions</div><div className="hero__meta-v">4 <small>USA · UK · Europe · Asia</small></div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">First hires</div><div className="hero__meta-v">2–4 wks <small>not quarters</small></div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Cost saving</div><div className="hero__meta-v">Up to 50% <small>without cutting corners</small></div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Scale</div><div className="hero__meta-v">100 – 500 <small>we grow when you grow</small></div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">Mesh · Online</span>
          <span className="hero__hud-grid">
            <span>USA <b>●</b></span><span>UK <b>●</b></span><span>EU <b>●</b></span><span>ASIA <b>●</b></span>
          </span>
          <span>GCC · v2026.05</span>
        </div>
      </header>

      {/* THE STRADIT DIFFERENCE */}
      <section className="section" style={{paddingTop:'100px'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'80px',alignItems:'center'}}>
            <div>
              <div className="section-eyebrow"><span className="idx">01</span><span>The StradIT Difference</span></div>
              <h2 style={{fontSize:'clamp(30px,4vw,48px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>
                The StradIT <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Difference</em>
              </h2>
              <p style={{color:'var(--text-1)',fontSize:'17px',lineHeight:'1.7',marginBottom:'32px'}}>
                With StradIT&apos;s GCC, you hire top-tier talent with zero headaches and with full control. This isn&apos;t outsourcing. This is ownership.
              </p>
              <Link href="/contact" className="btn btn--primary">
                Build Your Global Team
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
              {[
                {n:'01', title:'First hires in 2–4 weeks. Not quarters.', desc:'We move fast so you can start delivering value immediately.'},
                {n:'02', title:'Cut costs up to 50% without cutting corners.', desc:'Premium talent, optimized operations, no compromise on quality.'},
                {n:'03', title:'Go from 5 to 50 to 500. We grow when you grow.', desc:'Elastic capacity that scales with your ambitions, not against them.'},
                {n:'04', title:'One partner. Full stack. No juggling vendors.', desc:'Strategy, talent, compliance, and delivery — all under one roof.'},
              ].map((item,i)=>(
                <div key={item.n} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',border:'1px solid var(--line)',borderRadius:'var(--radius)',padding:'20px 24px',display:'flex',gap:'16px'}}>
                  <span style={{fontFamily:'var(--font-mono)',fontSize:'11px',color:'var(--accent)',flexShrink:0,marginTop:'2px'}}>{item.n}</span>
                  <div>
                    <div style={{fontFamily:'var(--font-display)',fontSize:'16px',fontWeight:500,letterSpacing:'-0.01em',marginBottom:'4px'}}>{item.title}</div>
                    <div style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.55'}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU UNLOCK */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">02</span><span>What You Unlock</span></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'end',marginBottom:'48px'}}>
            <div>
              <h2 style={{fontSize:'clamp(30px,4vw,48px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>What You <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Unlock</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
                StradIT helps you establish and run a captive center that functions as a seamless extension of your headquarters. From IT and finance to R&amp;D and customer operations, we help you centralize, scale, and innovate.
              </p>
            </div>
            <Link href="/contact" className="btn btn--ghost" style={{justifySelf:'end'}}>
              Build Your Global Team
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'var(--line)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
            {[
              {title:'Global Talent, Local Expertise',desc:'Access world-class professionals in tech, analytics, finance, and beyond in locations that make strategic sense.'},
              {title:'Cost Without Compromise',desc:'Reduce operational costs by up to 50% while elevating quality and output.'},
              {title:'Speed to Scale',desc:'Ramp up (or down) with agility. Your GCC grows with your ambitions.'},
              {title:'Innovation at the Core',desc:'Transform your center into a hub for R&D, digital transformation, and next-gen capabilities.'},
              {title:'Total Visibility',desc:'Track payroll, team performance, costs, and compliance — all in one place.'},
              {title:'One Partner, Full Stack',desc:'No juggling vendors. Strategy, talent, compliance, and delivery under one roof.'},
            ].map((item,i)=>(
              <div key={item.title} className={`reveal reveal-delay-${i%3}`} style={{background:'var(--ink-2)',padding:'36px 28px'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.16em',color:'var(--accent)',marginBottom:'12px'}}>0{i+1}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'19px',fontWeight:500,letterSpacing:'-0.02em',marginBottom:'10px'}}>{item.title}</div>
                <p style={{color:'var(--text-2)',fontSize:'14px',lineHeight:'1.6'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR BUILDERS */}
      <section className="section">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'80px',alignItems:'center'}}>
            <div>
              <div className="section-eyebrow"><span className="idx">03</span><span>Built for Builders</span></div>
              <h2 style={{fontSize:'clamp(30px,4vw,48px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>
                Built for <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Builders</em>
              </h2>
              <p style={{color:'var(--text-1)',fontSize:'17px',lineHeight:'1.7',marginBottom:'32px'}}>
                StradIT GCCs power the teams that build the future.
              </p>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
              {[
                'AI & Machine Learning teams',
                'Cloud & DevOps operations',
                'Data Analytics hubs',
                'Cybersecurity centers',
                'Testing & Quality engineering services',
              ].map((item,i)=>(
                <div key={item} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-1)',border:'1px solid var(--line)',borderRadius:'var(--radius)',padding:'18px 22px',display:'flex',gap:'12px',alignItems:'center'}}>
                  <span style={{width:'8px',height:'8px',borderRadius:'50%',background:'var(--accent)',boxShadow:'0 0 8px var(--accent-glow)',flexShrink:0}} />
                  <span style={{fontFamily:'var(--font-display)',fontSize:'16px',fontWeight:500,letterSpacing:'-0.01em'}}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{padding:'80px 0',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div style={{background:'radial-gradient(ellipse 80% 100% at 0% 50%,rgba(255,122,61,0.15),transparent 60%),radial-gradient(ellipse 60% 100% at 100% 50%,rgba(76,200,255,0.08),transparent 60%),var(--ink-2)',border:'1px solid var(--line-strong)',borderRadius:'var(--radius-lg)',padding:'64px 56px',display:'grid',gridTemplateColumns:'1fr auto',gap:'48px',alignItems:'center'}}>
            <div>
              <h2 style={{fontSize:'clamp(26px,4vw,44px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>Ready to Build Your Global Powerhouse?</h2>
              <p style={{color:'var(--text-1)',fontSize:'17px',lineHeight:'1.6',maxWidth:'560px'}}>
                Let&apos;s talk about what your GCC could look like and how fast we can get you there.
              </p>
            </div>
            <Link href="/contact" className="btn btn--primary" style={{whiteSpace:'nowrap'}}>
              Book a Free Strategy Call
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

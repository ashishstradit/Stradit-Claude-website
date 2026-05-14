import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'

export const metadata = { title: 'StartIT — StradIT' }

export default function StartitPage() {
  return (
    <>
      <Nav activePage="startit" />

      {/* HERO */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="startit" /></div>
        <div className="container hero__inner">
          <div className="hero__eyebrow eyebrow">StartIT · AI Training &amp; Upskilling</div>
          <h1 className="hero__title">Turning Your Teams Into<br/><em>AI Powerhouses</em></h1>
          <p className="hero__sub">From &apos;AI Curious&apos; to &apos;AI Certified&apos; in Only 8 Weeks with StartIT.</p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Join Our AI Training
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe" className="btn btn--ghost">Our Centers of Excellence</Link>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-cell"><div className="hero__meta-k">Cohort model</div><div className="hero__meta-v">8-week <small>guided learning sprint</small></div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Tracks</div><div className="hero__meta-v">5 <small>role-based learning paths</small></div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Delivery</div><div className="hero__meta-v">Hybrid <small>in-person · remote · on-site</small></div></div>
            <div className="hero__meta-cell"><div className="hero__meta-k">Output</div><div className="hero__meta-v">Capstone <small>portfolio + interview-ready</small></div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">StartIT · Live Cohort</span>
          <span className="hero__hud-grid"><span>TRACKS <b>5</b></span><span>DURATION <b>8 wks</b></span><span>FORMAT <b>Hybrid</b></span></span>
          <span>StartIT · v2026.05</span>
        </div>
      </header>

      {/* 01 — Lead with Confidence */}
      <section className="section" style={{paddingTop:'100px'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'80px',alignItems:'center'}}>
            <div>
              <div className="section-eyebrow"><span className="idx">01</span><span>Why StartIT</span></div>
              <h2 style={{fontSize:'clamp(30px,4vw,48px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>Lead AI and Technology<br/>With Confidence</h2>
              <p style={{color:'var(--text-1)',fontSize:'17px',lineHeight:'1.65',marginBottom:'32px'}}>
                StradIT turns learning AI and tech engineering from an uphill battle to a strategic leap forward through guided learning, hands-on labs, mentorship, and a clear path from concepts to outcomes.
              </p>
              <Link href="/contact" className="btn btn--primary">
                Join Our AI Training
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr',gap:'16px'}}>
              {[
                {icon:<><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>, title:'8-week cohort model', desc:'Structured sprints from concepts to outcomes'},
                {icon:<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>, title:'5 role-based tracks', desc:'Literacy · Strategy · Technical · Applied · Quantum AI'},
                {icon:<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>, title:'Capstone outputs', desc:'Portfolio-ready, interview-ready stories'},
              ].map((item,i)=>(
                <div key={i} style={{background:'var(--ink-1)',border:'1px solid var(--line)',borderRadius:'var(--radius)',padding:'24px 28px',display:'flex',alignItems:'center',gap:'20px'}}>
                  <div style={{width:'44px',height:'44px',borderRadius:'10px',background:'var(--accent-soft)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8">{item.icon}</svg>
                  </div>
                  <div>
                    <div style={{fontFamily:'var(--font-display)',fontSize:'18px',fontWeight:500,letterSpacing:'-0.02em'}}>{item.title}</div>
                    <div style={{color:'var(--text-2)',fontSize:'13px',marginTop:'4px'}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Fuel Your Career */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'80px',alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
              {[
                'Guided learning paths',
                'Mentored projects based on realistic scenarios',
                'Exposure to StradIT\'s AI Centers of Excellence',
                'Support to build confidence, portfolios, and interview-ready stories',
              ].map((item,i)=>(
                <div key={i} className={`reveal reveal-delay-${i+1}`} style={{background:'var(--ink-2)',border:'1px solid var(--line)',borderRadius:'var(--radius)',padding:'18px 22px',display:'flex',gap:'12px',alignItems:'flex-start'}}>
                  <span style={{color:'var(--accent)',fontFamily:'var(--font-mono)',fontSize:'16px',flexShrink:0,marginTop:'1px'}}>→</span>
                  <span style={{color:'var(--text-1)',fontSize:'15px',lineHeight:'1.5'}}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="section-eyebrow"><span className="idx">02</span><span>Fuel Your Career</span></div>
              <h2 style={{fontSize:'clamp(30px,4vw,48px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>Fuel Your Career<br/>with <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>StartIT</em></h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
                StartIT, our AI training and returnship program, helps leaders and tech professionals to make AI concepts their second nature, with training mapped to enterprise roles and grounded in domain realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Five Tracks */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">03</span><span>Build Rock-solid Confidence</span></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',alignItems:'end',marginBottom:'48px'}}>
            <h2 style={{fontSize:'clamp(30px,4vw,48px)',letterSpacing:'-0.03em'}}>Five tracks.<br/>Every role. Every depth.</h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.6'}}>StartIT is organized into four tracks, so every participant learns what they need, at the right depth, with a shared language across business and technology.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px'}}>
            {[
              {t:'Track 1',title:'AI Literacy',tag:'Nail the AI Basics',desc:'Learn what AI is, what it can do, and how to use it responsibly in daily workflows.',items:['Core AI and ML concepts explained','Understanding of LLMs\' capabilities','Responsible AI basics, ethics, and guardrails','Practical ways to work with AI tools']},
              {t:'Track 2',title:'AI Strategy',tag:'From Hype to ROI',desc:'Built for senior leaders and business heads who need to connect AI to business value.',items:['Translate business goals into AI portfolios','Identify invest vs pause decisions','Design adoption roadmaps','Align stakeholders around measurable AI outcomes']},
              {t:'Track 3',title:'AI Technical',tag:'Production-Ready AI',desc:'A hands-on track for data scientists, engineers, and technical teams, grounded in production realities.',items:['ML pipelines and model lifecycle','Deep learning and NLP fundamentals','Combining traditional ML with LLMs','Integrating AI into existing architectures']},
              {t:'Track 4',title:'AI Applied',tag:'Build the Breakthrough',desc:'AI Applied brings everything into real workflows. Hands-on creation and domain-specific prototyping.',items:['Asset management research','Intelligent document processing','Wealth engagement and personalization','AI agents, copilots, and customer interaction flows']},
            ].map((track,i)=>(
              <div key={track.t} className={`reveal reveal-delay-${i}`} style={{background:'var(--ink-1)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',padding:'32px',display:'flex',flexDirection:'column',gap:'12px'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.18em',color:'var(--accent)',textTransform:'uppercase'}}>{track.t}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'22px',fontWeight:500,letterSpacing:'-0.02em'}}>{track.title}</div>
                <div style={{fontStyle:'italic',color:'var(--accent-2)',fontSize:'14px'}}>{track.tag}</div>
                <p style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.6',flex:1}}>{track.desc}</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'6px'}}>
                  {track.items.map(item=>(
                    <li key={item} style={{fontSize:'13px',color:'var(--text-1)',display:'flex',gap:'8px'}}><span style={{color:'var(--accent)'}}>→</span>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Track 5 — full width */}
            <div className="reveal reveal-delay-4" style={{background:'var(--ink-1)',border:'1px solid var(--line)',borderLeft:'2px solid var(--accent)',borderRadius:'var(--radius-lg)',padding:'32px',display:'flex',flexDirection:'column',gap:'12px',gridColumn:'span 2'}}>
              <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',letterSpacing:'0.18em',color:'var(--accent)',textTransform:'uppercase'}}>Track 5 · Frontier</div>
              <div style={{fontFamily:'var(--font-display)',fontSize:'22px',fontWeight:500,letterSpacing:'-0.02em'}}>Quantum AI Training</div>
              <div style={{fontStyle:'italic',color:'var(--accent-2)',fontSize:'14px'}}>Prepare for the Next Frontier</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>
                <p style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.6'}}>StartIT helps your teams explore quantum computing and AI through a practical, business-first approach.</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'6px'}}>
                  {['Fundamentals of quantum computing','Quantum-inspired optimization techniques','Hybrid quantum-AI model prototyping','Organization-wide quantum readiness'].map(item=>(
                    <li key={item} style={{fontSize:'13px',color:'var(--text-1)',display:'flex',gap:'8px'}}><span style={{color:'var(--accent)'}}>→</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'center',marginTop:'48px'}}>
            <Link href="/contact" className="btn btn--primary">
              Upskill Your Teams With StartIT
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 04 — Transformation Pillars */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">04</span><span>The StartIT Transformation</span></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'end',marginBottom:'48px'}}>
            <h2 style={{fontSize:'clamp(28px,4vw,44px)',letterSpacing:'-0.03em'}}>Move from scattered pilots to a unified, <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>AI-driven future.</em></h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.6'}}>After completing StartIT, your organization will achieve critical pillars of maturity.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'var(--line)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
            {[
              {n:'01',title:'A Unified AI Vocabulary',desc:'Shared language across business and technology so alignment becomes the default.'},
              {n:'02',title:'Strategic Decision-Making',desc:'Leaders who can evaluate, invest, and prioritize AI with confidence and rigor.'},
              {n:'03',title:'Actionable Product Roadmaps',desc:'From classroom to pipeline: real use cases that go into the next sprint.'},
              {n:'04',title:'Responsible Technical Excellence',desc:'Engineers who build and test AI with guardrails, governance, and production discipline.'},
              {n:'05',title:'Re-entry with AI Confidence',desc:'Returners who come back portfolio-ready, interview-ready, and future-proofed.'},
              {n:'06',title:'A Culture of AI-First Thinking',desc:'An organization where AI is the default lens — not the exception.'},
            ].map((p,i)=>(
              <div key={p.n} className={`reveal reveal-delay-${i%3}`} style={{background:'var(--ink-2)',padding:'36px 28px'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'0.16em',color:'var(--accent)',marginBottom:'12px'}}>{p.n}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'19px',fontWeight:500,letterSpacing:'-0.02em',marginBottom:'10px'}}>{p.title}</div>
                <p style={{color:'var(--text-2)',fontSize:'13px',lineHeight:'1.6'}}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{padding:'80px 0',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div style={{background:'radial-gradient(ellipse 80% 100% at 0% 50%,rgba(255,122,61,0.15),transparent 60%),radial-gradient(ellipse 60% 100% at 100% 50%,rgba(76,200,255,0.08),transparent 60%),var(--ink-2)',border:'1px solid var(--line-strong)',borderRadius:'var(--radius-lg)',padding:'64px 56px',display:'grid',gridTemplateColumns:'1fr auto',gap:'48px',alignItems:'center'}}>
            <div>
              <h2 style={{fontSize:'clamp(26px,4vw,44px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>Ready to make your organization truly AI-ready?</h2>
              <p style={{color:'var(--text-1)',fontSize:'17px',lineHeight:'1.6',maxWidth:'560px'}}>Book a strategy call and see how StartIT can turn your people into confident builders, decision-makers, and leaders in the age of AI.</p>
            </div>
            <Link href="/contact" className="btn btn--primary" style={{whiteSpace:'nowrap'}}>
              Talk to Our AI Training Team
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{paddingTop:'60px'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">05</span><span>Frequently Asked Questions</span></div>
          <h2 style={{fontSize:'clamp(26px,3.5vw,40px)',letterSpacing:'-0.03em',marginBottom:'40px'}}>Common questions about StartIT</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
            {[
              {q:'Q1',question:'How long does the StartIT program run?',answer:'Many clients start with a 6–12 week plan. StartIT is designed to adapt to your calendar, intensity, and cohort size.'},
              {q:'Q2',question:'Can the training focus on financial services use cases only?',answer:'Yes. We can tailor tracks for banking, asset management, treasury, and risk, including regulatory and governance needs.'},
              {q:'Q3',question:'Do you offer in-person, remote, or hybrid training?',answer:'All three. We align delivery to your locations and time zones.'},
              {q:'Q4',question:'Is this suitable if we are just starting our AI journey?',answer:'Yes. StartIT meets teams where they are, from first pilots to scaling across functions.'},
              {q:'Q5',question:'Can we integrate StartIT with internal L&D programs?',answer:'Yes. We align with existing curriculum, certification plans, and learning platforms.'},
              {q:'Q6',question:'How do we measure impact?',answer:'We define success metrics upfront, such as skill assessments, validated use cases, roadmap progress, and stakeholder feedback.'},
            ].map((faq,i)=>(
              <div key={faq.q} style={{padding:'32px',borderRight:i%2===0?'1px solid var(--line)':'none',borderBottom:i<4?'1px solid var(--line)':'none',background:'var(--ink-1)'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'11px',letterSpacing:'0.12em',color:'var(--accent)',marginBottom:'10px'}}>{faq.q}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'16px',fontWeight:500,marginBottom:'10px',letterSpacing:'-0.01em'}}>{faq.question}</div>
                <p style={{color:'var(--text-2)',fontSize:'14px',lineHeight:'1.65'}}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

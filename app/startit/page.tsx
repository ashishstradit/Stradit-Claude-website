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
          <div className="hero__meta hero__meta--three">
            <div className="hero__meta-cell"><div className="hero__meta-v">8-week</div><div className="hero__meta-k">Cohort Model</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">5</div><div className="hero__meta-k">Role-Based Tracks</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">Capstone</div><div className="hero__meta-k">Outputs</div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">StartIT · Live Cohort</span>
          <span className="hero__hud-grid"><span>TRACKS <b>5</b></span><span>DURATION <b>8 wks</b></span><span>FORMAT <b>Hybrid</b></span></span>
          <span>StartIT · v2026.05</span>
        </div>
      </header>

      {/* 01 — Lead with Confidence */}
      <section className="section startit-section startit-section--lead">
        <div className="container">
          <div className="startit-split">
            <div className="startit-split__copy">
              <div className="section-eyebrow"><span className="idx">01</span><span>Why StartIT</span></div>
              <h2 className="startit-heading">Lead AI and Technology<br/>With Confidence</h2>
              <p className="startit-lead">
                StradIT turns learning AI and tech engineering from an uphill battle to a strategic leap forward through guided learning, hands-on labs, mentorship, and a clear path from concepts to outcomes.
              </p>
              <Link href="/contact" className="btn btn--primary">
                Join Our AI Training
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
            <div className="startit-lead-cards">
              {[
                { icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>, title: '8-week cohort model', desc: 'Structured sprints from concepts to outcomes' },
                { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>, title: '5 role-based tracks', desc: 'Literacy · Strategy · Technical · Applied · Quantum AI' },
                { icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />, title: 'Capstone outputs', desc: 'Portfolio-ready, interview-ready stories' },
              ].map((item, i) => (
                <div key={i} className="startit-lead-card">
                  <div className="startit-lead-card__icon" aria-hidden>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8">{item.icon}</svg>
                  </div>
                  <div className="startit-lead-card__body">
                    <div className="startit-lead-card__title">{item.title}</div>
                    <div className="startit-lead-card__desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Fuel Your Career */}
      <section className="section startit-section startit-section--band" style={{ background: 'var(--ink-1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="startit-split startit-split--flip-sm">
            <div className="startit-split__a startit-career-grid">
              {[
                { n: '01', title: 'Guided Paths', desc: 'Clear learning journeys for every role.' },
                { n: '02', title: 'Mentored Projects', desc: 'Hands-on work with realistic business scenarios.' },
                { n: '03', title: 'CoE Exposure', desc: 'Learn from StradIT\'s applied AI practices.' },
                { n: '04', title: 'Career Confidence', desc: 'Build portfolio and interview-ready stories.' },
              ].map((item, i) => (
                <div key={item.n} className={`startit-career-item reveal reveal-delay-${i + 1}`}>
                  <span className="startit-career-item__mark" aria-hidden>{item.n}</span>
                  <div>
                    <div className="startit-career-item__title">{item.title}</div>
                    <p className="startit-career-item__text">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="startit-split__b">
              <div className="section-eyebrow"><span className="idx">02</span><span>Fuel Your Career</span></div>
              <h2 className="startit-heading">
                Fuel Your Career<br/>with <em className="startit-gradient-text">StartIT</em>
              </h2>
              <p className="startit-body">
                StartIT, our AI training and returnship program, helps leaders and tech professionals to make AI concepts their second nature, with training mapped to enterprise roles and grounded in domain realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Five Tracks */}
      <section className="section startit-section">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">03</span><span>Build Rock-solid Confidence</span></div>
          <div className="startit-tracks-intro">
            <h2 className="startit-heading startit-heading--tight">Build Rock-solid Confidence</h2>
            <p className="startit-tracks-intro__lead">
              StartIT is organized into five tracks, so every participant learns what they need, at the right depth, with a shared language across business and technology.
            </p>
          </div>
          <div className="startit-tracks-grid">
            {[
              { t: 'Track 1', title: 'AI Literacy', tag: 'Nail the AI Basics', desc: 'Learn what AI can do and how to use it responsibly in daily workflows.' },
              { t: 'Track 2', title: 'AI Strategy', tag: 'From Hype to ROI', desc: 'Connect AI opportunities to business value, adoption, and measurable outcomes.' },
              { t: 'Track 3', title: 'AI Technical', tag: 'Production-Ready AI', desc: 'A practical track for teams building models, pipelines, and AI integrations.' },
              { t: 'Track 4', title: 'AI Applied', tag: 'Build the Breakthrough', desc: 'Create domain-specific prototypes for real workflows and business use cases.' },
            ].map((track, i) => (
              <div key={track.t} className={`startit-track-card reveal reveal-delay-${i % 3}`}>
                <div className="startit-track-card__idx">{track.t}</div>
                <div className="startit-track-card__title">{track.title}</div>
                <div className="startit-track-card__tag">{track.tag}</div>
                <p className="startit-track-card__desc">{track.desc}</p>
              </div>
            ))}
            <div className="startit-track-card reveal reveal-delay-4">
              <div className="startit-track-card__idx">Track 5</div>
              <div className="startit-track-card__title">Quantum AI Training</div>
              <div className="startit-track-card__tag">Prepare for the Next Frontier</div>
              <p className="startit-track-card__desc">Explore quantum computing and AI through a practical, business-first approach.</p>
            </div>
          </div>
          <div className="startit-tracks-cta">
            <Link href="/contact" className="btn btn--primary">
              Upskill Your Teams With StartIT
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 04 — Transformation Pillars */}
      <section className="section startit-section startit-section--band" style={{ background: 'var(--ink-1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">04</span><span>The StartIT Transformation</span></div>
          <div className="startit-pillars-intro">
            <h2 className="startit-heading startit-heading--pillars">The StartIT Transformation</h2>
            <p className="startit-pillars-intro__lead">
              Move from scattered AI pilots to a shared, practical way of working with AI across teams.
            </p>
          </div>
          <div className="startit-pillars-grid">
            {[
              { n: '01', title: 'Shared AI Language', desc: 'Business and tech teams align faster.' },
              { n: '02', title: 'Sharper AI Decisions', desc: 'Leaders know what to invest in.' },
              { n: '03', title: 'Roadmaps That Move', desc: 'Training turns into real product work.' },
              { n: '04', title: 'Responsible Engineering', desc: 'Teams build with guardrails and governance.' },
              { n: '05', title: 'Returnship Confidence', desc: 'Participants leave portfolio-ready.' },
              { n: '06', title: 'AI-First Culture', desc: 'AI becomes part of everyday thinking.' },
            ].map((p, i) => (
              <div key={p.n} className={`startit-pillar-cell reveal reveal-delay-${i % 3}`}>
                <div className="startit-pillar-cell__idx">{p.n}</div>
                <div>
                  <div className="startit-pillar-cell__title">{p.title}</div>
                  <p className="startit-pillar-cell__desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner — reuse GCC CTA band styles */}
      <section className="gcc-cta-wrap">
        <div className="container">
          <div className="gcc-cta-band">
            <div className="gcc-cta-band__copy">
              <h2 className="gcc-cta-band__title">Ready to make your organization truly AI-ready?</h2>
              <p className="gcc-cta-band__lead">
                Book a strategy call and see how StartIT can turn your people into confident builders, decision-makers, and leaders in the age of AI.
              </p>
            </div>
            <Link href="/contact" className="btn btn--primary gcc-cta-band__btn">
              Talk to Our AI Training Team
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section startit-section startit-section--faq">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">05</span><span>Frequently Asked Questions</span></div>
          <h2 className="startit-faq-title">Frequently Asked Questions</h2>
          <div className="startit-faq-grid">
            {[
              { q: 'Q1', question: 'How long does it run?', answer: 'Usually 6-12 weeks, shaped around your team.' },
              { q: 'Q2', question: 'Can it focus on finance?', answer: 'Yes. Banking, asset management, treasury, and risk.' },
              { q: 'Q3', question: 'Remote or in-person?', answer: 'Both, including hybrid delivery.' },
              { q: 'Q4', question: 'How is impact measured?', answer: 'Skills gained, use cases built, and roadmap progress.' },
            ].map(faq => (
              <div key={faq.q} className="startit-faq-cell">
                <div className="startit-faq-cell__q">{faq.q}</div>
                <div className="startit-faq-cell__question">{faq.question}</div>
                <p className="startit-faq-cell__answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

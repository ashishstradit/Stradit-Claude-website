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
            <div className="startit-split__a startit-career-list">
              {[
                'Guided learning paths',
                'Mentored projects based on realistic scenarios',
                'Exposure to StradIT\'s AI Centers of Excellence',
                'Support to build confidence, portfolios, and interview-ready stories',
              ].map((item, i) => (
                <div key={i} className={`startit-career-item reveal reveal-delay-${i + 1}`}>
                  <span className="startit-career-item__mark" aria-hidden>→</span>
                  <span className="startit-career-item__text">{item}</span>
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
            <h2 className="startit-heading startit-heading--tight">Five tracks.<br/>Every role. Every depth.</h2>
            <p className="startit-tracks-intro__lead">
              StartIT is organized into four tracks, so every participant learns what they need, at the right depth, with a shared language across business and technology.
            </p>
          </div>
          <div className="startit-tracks-grid">
            {[
              { t: 'Track 1', title: 'AI Literacy', tag: 'Nail the AI Basics', desc: 'Learn what AI is, what it can do, and how to use it responsibly in daily workflows.', items: ['Core AI and ML concepts explained', 'Understanding of LLMs\' capabilities', 'Responsible AI basics, ethics, and guardrails', 'Practical ways to work with AI tools'] },
              { t: 'Track 2', title: 'AI Strategy', tag: 'From Hype to ROI', desc: 'Built for senior leaders and business heads who need to connect AI to business value.', items: ['Translate business goals into AI portfolios', 'Identify invest vs pause decisions', 'Design adoption roadmaps', 'Align stakeholders around measurable AI outcomes'] },
              { t: 'Track 3', title: 'AI Technical', tag: 'Production-Ready AI', desc: 'A hands-on track for data scientists, engineers, and technical teams, grounded in production realities.', items: ['ML pipelines and model lifecycle', 'Deep learning and NLP fundamentals', 'Combining traditional ML with LLMs', 'Integrating AI into existing architectures'] },
              { t: 'Track 4', title: 'AI Applied', tag: 'Build the Breakthrough', desc: 'AI Applied brings everything into real workflows. Hands-on creation and domain-specific prototyping.', items: ['Asset management research', 'Intelligent document processing', 'Wealth engagement and personalization', 'AI agents, copilots, and customer interaction flows'] },
            ].map((track, i) => (
              <div key={track.t} className={`startit-track-card reveal reveal-delay-${i % 3}`}>
                <div className="startit-track-card__idx">{track.t}</div>
                <div className="startit-track-card__title">{track.title}</div>
                <div className="startit-track-card__tag">{track.tag}</div>
                <p className="startit-track-card__desc">{track.desc}</p>
                <ul className="startit-track-card__list">
                  {track.items.map(item => (
                    <li key={item}><span>→</span>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="startit-track-card startit-track-card--wide reveal reveal-delay-4">
              <div className="startit-track-card__idx">Track 5 · Frontier</div>
              <div className="startit-track-card__title">Quantum AI Training</div>
              <div className="startit-track-card__tag">Prepare for the Next Frontier</div>
              <div className="startit-track-wide-inner">
                <p className="startit-track-card__desc">StartIT helps your teams explore quantum computing and AI through a practical, business-first approach.</p>
                <ul className="startit-track-card__list">
                  {['Fundamentals of quantum computing', 'Quantum-inspired optimization techniques', 'Hybrid quantum-AI model prototyping', 'Organization-wide quantum readiness'].map(item => (
                    <li key={item}><span>→</span>{item}</li>
                  ))}
                </ul>
              </div>
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
            <h2 className="startit-heading startit-heading--pillars">
              Move from scattered pilots to a unified, <em className="startit-gradient-text">AI-driven future.</em>
            </h2>
            <p className="startit-pillars-intro__lead">After completing StartIT, your organization will achieve critical pillars of maturity.</p>
          </div>
          <div className="startit-pillars-grid">
            {[
              { n: '01', title: 'A Unified AI Vocabulary', desc: 'Shared language across business and technology so alignment becomes the default.' },
              { n: '02', title: 'Strategic Decision-Making', desc: 'Leaders who can evaluate, invest, and prioritize AI with confidence and rigor.' },
              { n: '03', title: 'Actionable Product Roadmaps', desc: 'From classroom to pipeline: real use cases that go into the next sprint.' },
              { n: '04', title: 'Responsible Technical Excellence', desc: 'Engineers who build and test AI with guardrails, governance, and production discipline.' },
              { n: '05', title: 'Re-entry with AI Confidence', desc: 'Returners who come back portfolio-ready, interview-ready, and future-proofed.' },
              { n: '06', title: 'A Culture of AI-First Thinking', desc: 'An organization where AI is the default lens — not the exception.' },
            ].map((p, i) => (
              <div key={p.n} className={`startit-pillar-cell reveal reveal-delay-${i % 3}`}>
                <div className="startit-pillar-cell__idx">{p.n}</div>
                <div className="startit-pillar-cell__title">{p.title}</div>
                <p className="startit-pillar-cell__desc">{p.desc}</p>
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
          <h2 className="startit-faq-title">Common questions about StartIT</h2>
          <div className="startit-faq-grid">
            {[
              { q: 'Q1', question: 'How long does the StartIT program run?', answer: 'Many clients start with a 6–12 week plan. StartIT is designed to adapt to your calendar, intensity, and cohort size.' },
              { q: 'Q2', question: 'Can the training focus on financial services use cases only?', answer: 'Yes. We can tailor tracks for banking, asset management, treasury, and risk, including regulatory and governance needs.' },
              { q: 'Q3', question: 'Do you offer in-person, remote, or hybrid training?', answer: 'All three. We align delivery to your locations and time zones.' },
              { q: 'Q4', question: 'Is this suitable if we are just starting our AI journey?', answer: 'Yes. StartIT meets teams where they are, from first pilots to scaling across functions.' },
              { q: 'Q5', question: 'Can we integrate StartIT with internal L&D programs?', answer: 'Yes. We align with existing curriculum, certification plans, and learning platforms.' },
              { q: 'Q6', question: 'How do we measure impact?', answer: 'We define success metrics upfront, such as skill assessments, validated use cases, roadmap progress, and stakeholder feedback.' },
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

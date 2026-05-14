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
      <section className="section gcc-section gcc-section--diff">
        <div className="container">
          <div className="gcc-diff-grid">
            <div className="gcc-diff-copy">
              <div className="section-eyebrow"><span className="idx">01</span><span>The StradIT Difference</span></div>
              <h2 className="gcc-diff-heading">
                The StradIT <em className="gcc-gradient-text">Difference</em>
              </h2>
              <p className="gcc-diff-lead">
                With StradIT&apos;s GCC, you hire top-tier talent with zero headaches and with full control. This isn&apos;t outsourcing. This is ownership.
              </p>
              <Link href="/contact" className="btn btn--primary">
                Build Your Global Team
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
            <div className="gcc-diff-cards">
              {[
                { n: '01', title: 'First hires in 2–4 weeks. Not quarters.', desc: 'We move fast so you can start delivering value immediately.' },
                { n: '02', title: 'Cut costs up to 50% without cutting corners.', desc: 'Premium talent, optimized operations, no compromise on quality.' },
                { n: '03', title: 'Go from 5 to 50 to 500. We grow when you grow.', desc: 'Elastic capacity that scales with your ambitions, not against them.' },
                { n: '04', title: 'One partner. Full stack. No juggling vendors.', desc: 'Strategy, talent, compliance, and delivery — all under one roof.' },
              ].map((item, i) => (
                <div key={item.n} className={`gcc-diff-card reveal reveal-delay-${i + 1}`}>
                  <span className="gcc-diff-card__num">{item.n}</span>
                  <div className="gcc-diff-card__body">
                    <div className="gcc-diff-card__title">{item.title}</div>
                    <div className="gcc-diff-card__desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU UNLOCK */}
      <section className="section gcc-section gcc-section--unlock" style={{ background: 'var(--ink-1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">02</span><span>What You Unlock</span></div>
          <div className="gcc-unlock-intro">
            <div>
              <h2 className="gcc-unlock-heading">
                What You <em className="gcc-gradient-text">Unlock</em>
              </h2>
              <p className="gcc-unlock-lead">
                StradIT helps you establish and run a captive center that functions as a seamless extension of your headquarters. From IT and finance to R&amp;D and customer operations, we help you centralize, scale, and innovate.
              </p>
            </div>
            <Link href="/contact" className="btn btn--ghost gcc-unlock-intro__btn">
              Build Your Global Team
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
          <div className="gcc-unlock-grid">
            {[
              { title: 'Global Talent, Local Expertise', desc: 'Access world-class professionals in tech, analytics, finance, and beyond in locations that make strategic sense.' },
              { title: 'Cost Without Compromise', desc: 'Reduce operational costs by up to 50% while elevating quality and output.' },
              { title: 'Speed to Scale', desc: 'Ramp up (or down) with agility. Your GCC grows with your ambitions.' },
              { title: 'Innovation at the Core', desc: 'Transform your center into a hub for R&D, digital transformation, and next-gen capabilities.' },
              { title: 'Total Visibility', desc: 'Track payroll, team performance, costs, and compliance — all in one place.' },
              { title: 'One Partner, Full Stack', desc: 'No juggling vendors. Strategy, talent, compliance, and delivery under one roof.' },
            ].map((item, i) => (
              <div key={item.title} className={`gcc-unlock-cell reveal reveal-delay-${i % 3}`}>
                <div className="gcc-unlock-cell__idx">0{i + 1}</div>
                <div className="gcc-unlock-cell__title">{item.title}</div>
                <p className="gcc-unlock-cell__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR BUILDERS */}
      <section className="section gcc-section">
        <div className="container">
          <div className="gcc-builders-grid">
            <div>
              <div className="section-eyebrow"><span className="idx">03</span><span>Built for Builders</span></div>
              <h2 className="gcc-builders-heading">
                Built for <em className="gcc-gradient-text">Builders</em>
              </h2>
              <p className="gcc-builders-lead">
                StradIT GCCs power the teams that build the future.
              </p>
            </div>
            <div className="gcc-builders-list">
              {[
                'AI & Machine Learning teams',
                'Cloud & DevOps operations',
                'Data Analytics hubs',
                'Cybersecurity centers',
                'Testing & Quality engineering services',
              ].map((item, i) => (
                <div key={item} className={`gcc-builders-item reveal reveal-delay-${i + 1}`}>
                  <span className="gcc-builders-item__dot" aria-hidden />
                  <span className="gcc-builders-item__label">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="gcc-cta-wrap">
        <div className="container">
          <div className="gcc-cta-band">
            <div className="gcc-cta-band__copy">
              <h2 className="gcc-cta-band__title">Ready to Build Your Global Powerhouse?</h2>
              <p className="gcc-cta-band__lead">
                Let&apos;s talk about what your GCC could look like and how fast we can get you there.
              </p>
            </div>
            <Link href="/contact" className="btn btn--primary gcc-cta-band__btn">
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

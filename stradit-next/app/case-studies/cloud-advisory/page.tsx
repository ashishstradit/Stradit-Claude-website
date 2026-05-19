import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimCanvas from '@/components/AnimCanvas'
import CaseStudyToggle from '@/components/CaseStudyToggle'

export const metadata = {
  title: '30% Less Operations Cost with Cloud Advisory — StradIT Case Study',
  description:
    'How StradIT helped a US-based financial institution move from a fragmented legacy data-centre landscape to a cloud-ready, cost-optimised portfolio without compromising regulatory, security, or data-residency requirements.',
}

const challenges = [
  'Fragmented application portfolios across mainframe, mid-tier, and distributed systems',
  'Deep dependencies on proprietary middleware making migration risky',
  'Limited observability across environments — no unified visibility',
  'Multiple regulators enforcing stringent compliance and data-residency requirements',
]

const scope = [
  'End-to-end IT service assessment',
  'Detailed cloud readiness assessment',
  '100% personalised cloud deployment',
  'Extensive technology evaluation',
  'Multi-year cloud roadmap',
]

const whyPoints = [
  '5+ years of dedicated cloud advisory experience',
  '30+ cloud & infrastructure specialists',
  '7+ data centres successfully managed',
  '5,000+ cloud instances delivered for regulated industries',
  'Assessment-to-execution without relying on one-off scripts',
]

const steps = [
  {
    num: '01',
    title: 'IT Service Catalogue',
    body: 'Our Cloud & Infrastructure CoE collected and rationalised the complete IT service catalogue across all lines of business. We mapped each service to underlying applications, infrastructure components, and data domains — identifying services with redundant or overlapping functionality.',
  },
  {
    num: '02',
    title: 'Cloud Readiness Assessment',
    body: 'We performed functional, financial, and technical feasibility analysis for every service — evaluating application architecture patterns, integration style, and data flows. A scoring model for cloud suitability gave the client a priority-ranked list of cloud-ready services based on evidence, not opinion.',
  },
  {
    num: '03',
    title: 'Cloud Deployment Strategy',
    body: 'Workloads were classified into public, private, and hybrid cloud candidates. We defined isolation requirements for regulated data, customer PII, and payment workloads, and mapped non-functional requirements to avoid resource wastage — enabling deployment decisions based on evidence instead of generic best practices.',
  },
  {
    num: '04',
    title: 'Technology Selection',
    body: 'We constructed a detailed evaluation framework across IaaS, PaaS, and managed services while comparing hyperscaler offerings. Preferred vendors and implementation partners were identified based on alignment with the client\'s objectives, regulatory posture, and total cost of ownership.',
  },
  {
    num: '05',
    title: 'Cloud Roadmap & Governance',
    body: 'We created a cloud roadmap defining migration waves — covering quick wins first — and established a cloud governance framework to help the client realise early benefits while preparing for deeper modernisation. The result: a clear, executable plan with an agreed operating model built in.',
  },
]

const outcomes = [
  { v: '30%', l: 'Reduction in operations cost' },
  { v: '70%', l: 'Reduction in software licence cost' },
  { v: '50%', l: 'Faster application deployment' },
  { v: '5,000+', l: 'Cloud instances managed' },
]

export default function CloudAdvisoryCaseStudyPage() {
  return (
    <>
      <Nav activePage="coe" />

      {/* ── HERO ── */}
      <header className="hero hero--compact">
        <div className="hero__canvas"><AnimCanvas theme="cloud" /></div>
        <div className="container hero__inner">
          <div className="hero__eyebrow eyebrow">Case Study · Cloud &amp; Infrastructure</div>
          <h1 className="hero__title">
            30% Less Operations Cost<br />
            with <em>Expert Cloud Advisory</em>
          </h1>
          <p className="hero__sub">
            From fragmented legacy to cloud-ready — without compromising compliance.
          </p>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.65',maxWidth:'600px',marginBottom:'36px'}}>
            Learn how StradIT helped a US-based financial institution move from a fragmented
            legacy data-centre landscape to a cloud-ready, cost-optimised portfolio —
            without compromising regulatory, security, or data-residency requirements.
          </p>
          <div className="hero__cta">
            <Link href="/contact" className="btn btn--primary">
              Request a Cloud Readiness Assessment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe/cloud" className="btn btn--ghost">Back to Cloud CoE</Link>
          </div>
          <div className="hero__meta">
            <div className="hero__meta-cell"><div className="hero__meta-v">30%</div><div className="hero__meta-k">Less Ops Cost</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">70%</div><div className="hero__meta-k">Less Licence Cost</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">50%</div><div className="hero__meta-k">Faster Deployment</div></div>
            <div className="hero__meta-cell"><div className="hero__meta-v">5,000+</div><div className="hero__meta-k">Cloud Instances</div></div>
          </div>
        </div>
        <div className="hero__hud">
          <span className="pulse">Cloud · Operational</span>
          <span className="hero__hud-grid">
            <span>OPS COST <b>−30%</b></span>
            <span>LICENCES <b>−70%</b></span>
            <span>DEPLOY <b>50% faster</b></span>
          </span>
          <span>Case Study · Cloud</span>
        </div>
      </header>

      <CaseStudyToggle>

      {/* ── 01 CLIENT OVERVIEW ── */}
      <section className="section" style={{paddingTop:'100px'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">01</span><span>Client Overview</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              A Regulated Institution with a{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Legacy Problem</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              A leading US-based financial institution operating under strict regulatory, audit,
              and data-residency requirements — with a heterogeneous landscape of mainframe,
              mid-tier, and distributed systems. A simple lift-and-shift approach would have
              only moved costs, not optimised them. A structured, evidence-based cloud advisory
              approach was required.
            </p>
          </div>

          {/* Challenges */}
          <div style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            gap:'1px',
            background:'var(--line)',
            border:'1px solid var(--line)',
            borderRadius:'var(--radius-lg)',
            overflow:'hidden',
            marginBottom:'40px',
          }}>
            {challenges.map((c, i) => (
              <div key={i} style={{
                background:'var(--ink-1)',
                padding:'32px 28px',
                display:'flex',
                gap:'16px',
                alignItems:'flex-start',
              }}>
                <span style={{
                  fontFamily:'var(--font-mono)',
                  fontSize:'10px',
                  letterSpacing:'0.16em',
                  color:'var(--accent)',
                  flexShrink:0,
                  marginTop:'3px',
                }}>
                  {String(i+1).padStart(2,'0')}
                </span>
                <p style={{color:'var(--text-1)',fontSize:'14px',lineHeight:'1.65'}}>{c}</p>
              </div>
            ))}
          </div>

          <p style={{
            color:'var(--text-2)',
            fontSize:'14px',
            lineHeight:'1.7',
            maxWidth:'760px',
            padding:'24px',
            borderLeft:'3px solid var(--accent)',
            background:'var(--accent-soft)',
            borderRadius:'0 var(--radius) var(--radius) 0',
          }}>
            The absence of a common framework to assess cloud readiness resulted in higher
            operational costs and eroding margins. A structured, evidence-based cloud advisory
            approach was required — not guesswork.
          </p>
        </div>
      </section>

      {/* ── 02 STRADIT SCALE & EXPERIENCE ── */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">02</span><span>Our Proven Scale &amp; Experience</span></div>
          <div className="two-col">
            <div>
              <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'20px'}}>
                A Mature, Execution-Focused{' '}
                <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Cloud Practice</em>
              </h2>
              <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'16px'}}>
                StradIT brings a mature, execution-focused cloud practice to every engagement.
                With 5+ years of dedicated cloud advisory experience and a core group of 30+
                cloud and infrastructure specialists, our Cloud &amp; Infrastructure CoE has
                successfully managed 7+ data centres and 5,000+ cloud instances for clients
                across regulated industries.
              </p>
              <p style={{color:'var(--text-2)',fontSize:'14px',lineHeight:'1.7',marginBottom:'28px'}}>
                These accelerators allow StradIT to move from assessment to repeatable,
                codified implementation — without relying on one-off scripts.
              </p>
              <Link href="/coe/cloud" className="btn btn--ghost">
                Explore Cloud CoE
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'1px',background:'var(--line)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',overflow:'hidden'}}>
              {whyPoints.map((pt, i) => (
                <div key={i} style={{
                  background:'var(--ink-2)',
                  padding:'24px',
                  display:'flex',
                  gap:'16px',
                  alignItems:'center',
                }}>
                  <span style={{
                    width:'32px',height:'32px',
                    borderRadius:'50%',
                    border:'1px solid var(--accent)',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    color:'var(--accent)',
                    fontSize:'12px',
                    flexShrink:0,
                  }}>✓</span>
                  <span style={{color:'var(--text-0)',fontSize:'14px',lineHeight:'1.5'}}>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 SCOPE ── */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">03</span><span>Scope of Cloud Advisory</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              A Fully-Optimised{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Cloud Advisory</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              When the client reached StradIT for Cloud Advisory Services, we played at the
              front foot — delivering a comprehensive advisory that covered every dimension
              of their cloud readiness.
            </p>
          </div>

          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr)',
            gap:'1px',
            background:'var(--line)',
            border:'1px solid var(--line)',
            borderRadius:'var(--radius-lg)',
            overflow:'hidden',
            marginBottom:'40px',
          }}>
            {scope.map((s, i) => (
              <div key={i} style={{
                background:'var(--ink-1)',
                padding:'28px 24px',
                display:'flex',
                gap:'14px',
                alignItems:'flex-start',
              }}>
                <span style={{
                  fontFamily:'var(--font-mono)',
                  fontSize:'10px',
                  letterSpacing:'0.16em',
                  color:'var(--accent)',
                  flexShrink:0,
                  marginTop:'2px',
                }}>{String(i+1).padStart(2,'0')}</span>
                <span style={{color:'var(--text-1)',fontSize:'14px',lineHeight:'1.6'}}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 HOW WE DELIVERED ── */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="section-eyebrow"><span className="idx">04</span><span>Solutions Offered</span></div>
          <div className="section-intro">
            <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em'}}>
              A Multi-Step{' '}
              <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Cloud Strategy</em>
            </h2>
            <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7'}}>
              Hands-on mastery over cloud &amp; infrastructure. We brought structure to
              every decision — from catalogue to governance — so nothing was left to chance.
            </p>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'1px',background:'var(--line)',border:'1px solid var(--line)',borderRadius:'var(--radius-lg)',overflow:'hidden',marginBottom:'40px'}}>
            {steps.map((step) => (
              <div key={step.num} style={{
                background:'var(--ink-2)',
                padding:'36px 40px',
                display:'grid',
                gridTemplateColumns:'80px 1fr',
                gap:'32px',
                alignItems:'start',
              }}>
                <div>
                  <div style={{
                    fontFamily:'var(--font-mono)',
                    fontSize:'10px',
                    letterSpacing:'0.16em',
                    color:'var(--text-3)',
                    marginBottom:'4px',
                    textTransform:'uppercase',
                  }}>Step</div>
                  <div style={{
                    fontFamily:'var(--font-display)',
                    fontSize:'42px',
                    fontWeight:600,
                    letterSpacing:'-0.04em',
                    lineHeight:1,
                    background:'linear-gradient(135deg,var(--accent),var(--accent-2))',
                    WebkitBackgroundClip:'text',
                    backgroundClip:'text',
                    color:'transparent',
                  }}>{step.num}</div>
                </div>
                <div>
                  <div style={{
                    fontFamily:'var(--font-display)',
                    fontSize:'19px',
                    fontWeight:500,
                    letterSpacing:'-0.02em',
                    marginBottom:'10px',
                    color:'var(--text-0)',
                  }}>{step.title}</div>
                  <p style={{color:'var(--text-2)',fontSize:'14px',lineHeight:'1.7'}}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/contact" className="btn btn--ghost">
            Explore our Cloud CoE
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>

      {/* ── 05 OUTCOMES ── */}
      <section className="section">
        <div className="container">
          <div className="section-eyebrow"><span className="idx">05</span><span>Outcomes &amp; Benefits Delivered</span></div>
          <h2 style={{fontSize:'clamp(28px,4vw,46px)',letterSpacing:'-0.03em',marginBottom:'16px'}}>
            Tangible Benefits From{' '}
            <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>Day One</em>
          </h2>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',maxWidth:'680px',marginBottom:'48px'}}>
            Within the first phases of execution, the client realised tangible benefits driven
            directly by the advisory outputs — with peace of mind and a clear, executable roadmap
            built in from the start.
          </p>

          {/* Stats */}
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(4,1fr)',
            gap:'1px',
            background:'var(--line)',
            border:'1px solid var(--line)',
            borderRadius:'var(--radius-lg)',
            overflow:'hidden',
            marginBottom:'48px',
          }}>
            {outcomes.map((o) => (
              <div key={o.l} style={{
                background:'var(--ink-1)',
                padding:'36px 28px',
                display:'flex',
                flexDirection:'column',
                gap:'8px',
              }}>
                <div style={{
                  fontFamily:'var(--font-display)',
                  fontSize:'clamp(26px,3vw,40px)',
                  fontWeight:600,
                  letterSpacing:'-0.03em',
                  background:'linear-gradient(120deg,var(--accent),var(--accent-2))',
                  WebkitBackgroundClip:'text',
                  backgroundClip:'text',
                  color:'transparent',
                  lineHeight:1.1,
                }}>{o.v}</div>
                <div style={{
                  fontFamily:'var(--font-mono)',
                  fontSize:'11px',
                  letterSpacing:'0.12em',
                  textTransform:'uppercase',
                  color:'var(--text-3)',
                  lineHeight:1.4,
                }}>{o.l}</div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <p style={{
            color:'var(--text-1)',
            fontSize:'15px',
            lineHeight:'1.7',
            maxWidth:'760px',
            padding:'28px 32px',
            borderLeft:'3px solid var(--accent)',
            background:'var(--accent-soft)',
            borderRadius:'0 var(--radius) var(--radius) 0',
          }}>
            Peace of mind and hassle-free migration, backed by a clear, executable roadmap
            and an agreed operating model, come built in with every StradIT engagement.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{background:'var(--ink-1)',borderTop:'1px solid var(--line)'}}>
        <div className="container" style={{textAlign:'center',maxWidth:'680px',margin:'0 auto'}}>
          <div style={{
            fontFamily:'var(--font-mono)',
            fontSize:'11px',
            letterSpacing:'0.16em',
            textTransform:'uppercase',
            color:'var(--accent)',
            marginBottom:'20px',
          }}>Finding It Hard to Navigate Complex Cloud Decisions?</div>
          <h2 style={{
            fontSize:'clamp(28px,4vw,46px)',
            letterSpacing:'-0.03em',
            marginBottom:'20px',
            lineHeight:1.1,
          }}>
            Get a Structured Plan Your Teams Can{' '}
            <em style={{fontStyle:'normal',background:'linear-gradient(120deg,var(--accent),var(--accent-2))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>
              Execute With Confidence
            </em>
          </h2>
          <p style={{color:'var(--text-1)',fontSize:'16px',lineHeight:'1.7',marginBottom:'36px'}}>
            Talk to StradIT&apos;s Cloud Advisory team today. We turn cloud complexity into
            a clear, costed, compliance-ready roadmap.
          </p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/contact" className="btn btn--primary">
              Request a Cloud Readiness Assessment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link href="/coe/cloud" className="btn btn--ghost">
              Explore Cloud CoE
            </Link>
          </div>
        </div>
      </section>

      </CaseStudyToggle>

      <Footer />
    </>
  )
}

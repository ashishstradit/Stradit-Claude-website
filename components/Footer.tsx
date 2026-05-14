import Link from 'next/link'
import BrandIcon from './BrandIcon'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="nav__brand">
              <BrandIcon size={24} />
              <span className="brand-strad">STRAD</span><span className="brand-it">IT</span>
            </div>
            <p>Pioneering the next generation of applied artificial intelligence and engineering for global enterprises.</p>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/gcc">Global Capability Center</Link>
            <Link href="/startit">StartIT</Link>
            <Link href="/careers">Careers</Link>
          </div>
          <div className="footer__col">
            <h4>Center of Excellence</h4>
            <Link href="/coe/ai" style={{fontSize:'13px',whiteSpace:'nowrap'}}>Applied Artificial Intelligence</Link>
            <Link href="/coe/data" style={{fontSize:'13px',whiteSpace:'nowrap'}}>Data Analytics — Applied AI</Link>
            <Link href="/coe/cyber" style={{fontSize:'13px',whiteSpace:'nowrap'}}>Cyber Security — Applied AI</Link>
            <Link href="/coe/cloud" style={{fontSize:'13px',whiteSpace:'nowrap'}}>Cloud & Infrastructure — Applied AI</Link>
            <Link href="/coe/testing" style={{fontSize:'13px',whiteSpace:'nowrap'}}>Automated AI Testing</Link>
            <Link href="/gcc" style={{fontSize:'13px',whiteSpace:'nowrap'}}>Global Capability Center (GCC)</Link>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <a href="mailto:reachout@stradit.com">reachout@stradit.com</a>
            <Link href="/contact">Book a call</Link>
            <a href="https://www.linkedin.com/in/stradit-llc" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} Stradit LLC · All rights reserved</span>
          <span>v2026.05 · Built for institutional scale</span>
        </div>
      </div>
    </footer>
  )
}

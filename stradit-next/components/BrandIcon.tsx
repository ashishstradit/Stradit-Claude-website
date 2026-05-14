export default function BrandIcon({ size = 28 }: { size?: number }) {
  return (
    <svg className="brand-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1.2"/>
      <circle cx="12" cy="12" r="2.8" fill="#ffffff"/>
      <line x1="12" y1="9.2" x2="12" y2="3.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="14.4" y1="13.4" x2="19.5" y2="16.2" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="9.6" y1="13.4" x2="4.5" y2="16.2" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}

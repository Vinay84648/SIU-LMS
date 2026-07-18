export function Card({ children, style }) {
  return (
    <div style={{
      background: 'var(--surface)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      boxShadow: 'var(--shadow-1)',
      padding: 20,
      ...style,
    }}>{children}</div>
  )
}

export function SectionHeader({ title, subtitle, badge }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-1)', margin: 0 }}>{title}</h2>
          {badge && (
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--primary)', background: 'var(--primary-muted)', padding: '2px 8px', borderRadius: 100 }}>{badge}</span>
          )}
        </div>
        <p style={{ fontSize: 12, color: 'var(--text-3)', margin: '4px 0 0' }}>{subtitle}</p>
      </div>
    </div>
  )
}

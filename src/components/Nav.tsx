export function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(2,2,3,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '60px',
            gap: '16px',
          }}
        >
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
            }}
            aria-label="2026 台灣數位帳戶研究報告"
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #2563EB, #3b82f6)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                fontWeight: 600,
                color: 'white',
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              台
            </div>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--foreground)',
                letterSpacing: '-0.02em',
              }}
            >
              數位帳戶研究
            </span>
          </a>

          <ul
            style={{
              display: 'flex',
              gap: '4px',
              listStyle: 'none',
              flexWrap: 'wrap',
            }}
            role="navigation"
            aria-label="頁面導覽"
          >
            {[
              { href: '#compare', label: '比較表' },
              { href: '#neobank', label: '純網銀' },
              { href: '#charts', label: '圖表' },
              { href: '#brands', label: '品牌' },
              { href: '#trends', label: '趨勢' },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '13px',
                    color: 'var(--foreground-muted)',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    display: 'block',
                    transition: 'all 0.15s var(--easing)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'var(--foreground)'
                    el.style.background = 'var(--surface-hover)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.color = 'var(--foreground-muted)'
                    el.style.background = 'transparent'
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <span
            style={{
              fontSize: '11px',
              fontFamily: "'IBM Plex Mono', monospace",
              color: 'var(--accent-green)',
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.2)',
              padding: '3px 8px',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            2026 Q1
          </span>
        </div>
      </div>
    </nav>
  )
}

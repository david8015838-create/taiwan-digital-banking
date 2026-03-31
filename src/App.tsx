import { useState } from 'react'
import { Nav } from './components/Nav'
import {
  banks,
  neoBanks,
  cardRewards,
  transferRankings,
  marketTrends,
  type BankType,
} from './data/banks'

// ── Brand positions derived from banks data ─────────────────────────────────
const brandPositions = [
  { name: 'LINE Bank', tagline: '台灣用戶最多的純網銀', group: '重度 LINE 使用者', type: 'neobank' as BankType },
  { name: '樂天銀行', tagline: '新戶衝刺15%超高短期利率', group: '樂天生態圈愛用者', type: 'neobank' as BankType },
  { name: '將來銀行', tagline: '全聯深度整合、超市消費首選', group: '全聯常客', type: 'neobank' as BankType },
  { name: '聯邦銀行', tagline: '首月15%、萊爾富5%回饋', group: '便利超商消費族', type: 'private' as BankType },
  { name: '王道銀行', tagline: '每月給息、1元起息最靈活', group: '細水長流的穩定派', type: 'private' as BankType },
  { name: '台新銀行', tagline: 'Richart 智能存錢小查罐', group: '養成儲蓄習慣的年輕族', type: 'private' as BankType },
  { name: '凱基銀行', tagline: 'Karry 跨轉30次主打高頻交易', group: '日常頻繁轉帳族', type: 'private' as BankType },
  { name: '元大銀行', tagline: '超高99次跨轉、無利率訴求', group: '頻繁轉帳的投資族', type: 'private' as BankType },
  { name: '永豐銀行', tagline: 'DAWHO 國內5%/國外6%回饋王', group: '重度信用卡消費族', type: 'private' as BankType },
  { name: '渣打銀行', tagline: '心幸福300萬高額優惠存款', group: '大額資金停泊族', type: 'private' as BankType },
  { name: '臺灣銀行', tagline: '公股信賴、99次跨轉最安心', group: '保守穩健族', type: 'public' as BankType },
  { name: '華南銀行', tagline: 'SnY 新舊戶一致2.3%', group: '不追新戶優惠的老顧客', type: 'public' as BankType },
  { name: '彰化銀行', tagline: 'e財寶跨轉跨提都30次', group: '公股用戶的高服務需求族', type: 'public' as BankType },
  { name: '中華郵政', tagline: '全台據點最多、66次跨轉', group: '鄉鎮地區用戶', type: 'other' as BankType },
]

// ── Rate badge helper ────────────────────────────────────────────────────────
function getRateBadgeClass(rate: number): string {
  if (rate >= 8) return 'rate-badge rate-high'
  if (rate >= 2) return 'rate-badge rate-mid'
  return 'rate-badge rate-low'
}

const TYPE_LABELS: Record<BankType, string> = {
  neobank: '純網銀',
  private: '民營',
  public: '公股',
  other: '其他',
}

// ── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      style={{
        padding: '80px 0 60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ambient blob */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container">
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(37,99,235,0.1)',
            border: '1px solid rgba(37,99,235,0.25)',
            borderRadius: '100px',
            padding: '4px 14px',
            fontSize: '12px',
            fontFamily: "'IBM Plex Mono', monospace",
            color: '#60a5fa',
            marginBottom: '24px',
            animation: 'fadeInUp 0.5s var(--easing) forwards',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent-green)',
              display: 'inline-block',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
            aria-hidden="true"
          />
          資料更新：2026年3月
        </div>

        <h1
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            color: 'var(--foreground)',
            marginBottom: '16px',
            animation: 'fadeInUp 0.6s var(--easing) 0.05s both',
          }}
        >
          2026 台灣數位帳戶
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #2563EB, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            市場完整研究報告
          </span>
        </h1>

        <p
          style={{
            color: 'var(--foreground-muted)',
            fontSize: '15px',
            marginBottom: '40px',
            animation: 'fadeInUp 0.6s var(--easing) 0.1s both',
          }}
        >
          資料蒐集時間：2026年3月 ｜ 涵蓋 30 家銀行／機構
        </p>

        {/* Stat cards */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.6s var(--easing) 0.15s both',
          }}
        >
          {[
            { value: '30', label: '家銀行' },
            { value: '7', label: '大主題' },
            { value: '2026年3月', label: '更新時間' },
          ].map(({ value, label }) => (
            <div
              key={label}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '20px 32px',
                minWidth: '120px',
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: 'var(--foreground)',
                  letterSpacing: '-0.02em',
                }}
              >
                {value}
              </div>
              <div
                style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Bank Compare Table ────────────────────────────────────────────────────────
function BankCompareSection() {
  const [filter, setFilter] = useState<'all' | BankType>('all')
  const [sortBy, setSortBy] = useState<'rate' | 'transfer'>('rate')

  const filtered = banks
    .filter((b) => filter === 'all' || b.type === filter)
    .slice()
    .sort((a, b) =>
      sortBy === 'transfer' ? b.transferNum - a.transferNum : b.newRateNum - a.newRateNum,
    )

  const filterOptions: Array<{ value: 'all' | BankType; label: string }> = [
    { value: 'all', label: '全部' },
    { value: 'neobank', label: '純網銀' },
    { value: 'private', label: '民營' },
    { value: 'public', label: '公股' },
    { value: 'other', label: '其他' },
  ]

  return (
    <section id="compare" style={{ padding: '64px 0' }}>
      <div className="container">
        <SectionHeader
          tag="COMPARE"
          title="互動銀行比較表"
          desc="點擊篩選類別，或切換排序方式"
        />

        {/* Filter + Sort Controls */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {filterOptions.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: filter === value ? 'var(--border-accent)' : 'var(--border)',
                  background:
                    filter === value ? 'rgba(37,99,235,0.12)' : 'transparent',
                  color: filter === value ? '#60a5fa' : 'var(--foreground-muted)',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s var(--easing)',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            <span
              style={{ fontSize: '12px', color: 'var(--foreground-muted)', alignSelf: 'center' }}
            >
              排序：
            </span>
            {[
              { value: 'rate', label: '利率' },
              { value: 'transfer', label: '跨轉次數' },
            ].map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setSortBy(value as 'rate' | 'transfer')}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: sortBy === value ? 'rgba(249,115,22,0.4)' : 'var(--border)',
                  background:
                    sortBy === value ? 'rgba(249,115,22,0.1)' : 'transparent',
                  color:
                    sortBy === value ? 'var(--accent-orange)' : 'var(--foreground-muted)',
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.15s var(--easing)',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>銀行</th>
                <th>帳戶</th>
                <th>類型</th>
                <th className={`sortable ${sortBy === 'rate' ? 'sort-active' : ''}`}
                    onClick={() => setSortBy('rate')}
                >
                  新戶利率 ↕
                </th>
                <th>舊戶利率</th>
                <th>優惠額度</th>
                <th
                  className={`sortable ${sortBy === 'transfer' ? 'sort-active' : ''}`}
                  onClick={() => setSortBy('transfer')}
                >
                  跨轉次數 ↕
                </th>
                <th>特色</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((bank) => (
                <tr key={`${bank.name}-${bank.product}`}>
                  <td style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{bank.name}</td>
                  <td className="td-muted">{bank.product}</td>
                  <td>
                    <span className={`tag-type tag-${bank.type}`}>
                      {TYPE_LABELS[bank.type]}
                    </span>
                  </td>
                  <td>
                    {bank.newRateNum > 0 ? (
                      <span className={getRateBadgeClass(bank.newRateNum)}>
                        {bank.newRate}
                      </span>
                    ) : (
                      <span className="td-dash">{bank.newRate}</span>
                    )}
                  </td>
                  <td className="td-muted">{bank.oldRate}</td>
                  <td className="td-muted">{bank.rateLimit}</td>
                  <td>
                    {bank.transferNum > 0 ? (
                      <span className="count-badge">{bank.transferCount}</span>
                    ) : (
                      <span className="td-dash">{bank.transferCount}</span>
                    )}
                  </td>
                  <td className="feature-text">{bank.feature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          style={{
            fontSize: '11px',
            color: 'var(--foreground-muted)',
            marginTop: '10px',
            fontFamily: "'IBM Plex Mono', monospace",
          }}
        >
          共 {filtered.length} 筆 · 顯示 {filter === 'all' ? '全部' : TYPE_LABELS[filter as BankType]}
        </p>
      </div>
    </section>
  )
}

// ── Neo Banks Section ─────────────────────────────────────────────────────────
function NeoBankSection() {
  return (
    <section id="neobank" style={{ padding: '64px 0' }}>
      <div className="container">
        <SectionHeader
          tag="NEO BANK"
          title="三大純網銀深度比較"
          desc="LINE Bank、樂天銀行、將來銀行全方位對比"
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {neoBanks.map((bank) => (
            <div
              key={bank.id}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                transition: 'border-color 0.2s var(--easing)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-accent)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
              }}
            >
              {/* Gradient header */}
              <div
                style={{
                  background: bank.gradient,
                  borderBottom: '1px solid var(--border)',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'white',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {bank.logoText}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px' }}>{bank.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--foreground-muted)' }}>
                    {bank.subtitle}
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1px',
                  background: 'var(--border)',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {[
                  { label: '新戶利率', value: bank.newRate },
                  { label: '舊戶利率', value: bank.oldRate },
                  { label: '跨轉次數', value: bank.transferCount },
                  { label: '優惠額度', value: bank.rateLimit },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{ background: 'var(--bg-elevated)', padding: '14px 16px' }}
                  >
                    <div style={{ fontSize: '10px', color: 'var(--foreground-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--foreground)',
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div style={{ padding: '16px 20px' }}>
                <div style={{ fontSize: '11px', color: 'var(--foreground-muted)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  核心特色
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {bank.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: 'flex',
                        gap: '8px',
                        fontSize: '13px',
                        color: 'var(--foreground-muted)',
                        lineHeight: 1.4,
                      }}
                    >
                      <span style={{ color: 'var(--accent-green)', flexShrink: 0 }}>›</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    marginTop: '14px',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--border)',
                    fontSize: '12px',
                    color: '#60a5fa',
                  }}
                >
                  適合：{bank.targetGroup}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Charts Section ────────────────────────────────────────────────────────────
function ChartsSection() {
  const maxTransfer = Math.max(...transferRankings.map((t) => t.count))
  const maxCard = Math.max(...cardRewards.map((c) => c.domesticRate))

  return (
    <section id="charts" style={{ padding: '64px 0' }}>
      <div className="container">
        <SectionHeader
          tag="CHARTS"
          title="排行圖表"
          desc="跨行轉帳次數 ＆ 簽帳卡回饋率比較"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {/* Transfer ranking */}
          <ChartCard title="跨行轉帳次數排行" subtitle="免費次數/月，越多越好">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {transferRankings.map((item) => (
                <div key={`${item.bank}-${item.product}`}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '5px',
                    }}
                  >
                    <span style={{ fontSize: '13px', color: 'var(--foreground)' }}>
                      {item.bank}
                      <span className="td-muted" style={{ marginLeft: '6px' }}>
                        {item.product}
                      </span>
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className={`tag-type tag-${item.type}`}>
                        {TYPE_LABELS[item.type]}
                      </span>
                      <span className="count-badge">{item.display}</span>
                    </div>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{
                        '--bar-width': `${(item.count / maxTransfer) * 100}%`,
                        width: `${(item.count / maxTransfer) * 100}%`,
                        background: 'linear-gradient(90deg, var(--accent), #60a5fa)',
                      } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>

          {/* Card rewards */}
          <ChartCard title="簽帳金融卡回饋率排行" subtitle="國內消費回饋率 %">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cardRewards.map((item) => (
                <div key={`${item.bank}-${item.product}`}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '5px',
                    }}
                  >
                    <span style={{ fontSize: '13px', color: 'var(--foreground)' }}>
                      {item.bank}
                      <span className="td-muted" style={{ marginLeft: '6px' }}>
                        {item.product}
                      </span>
                    </span>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          color: 'var(--foreground-muted)',
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        海外 {item.overseasRate}%
                      </span>
                      <span className="count-badge">國內 {item.domesticRate}%</span>
                    </div>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{
                        '--bar-width': `${(item.domesticRate / maxCard) * 100}%`,
                        width: `${(item.domesticRate / maxCard) * 100}%`,
                        background: 'linear-gradient(90deg, var(--accent-orange), #fbbf24)',
                      } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>
      </div>
    </section>
  )
}

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '24px',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontWeight: 600, fontSize: '15px', marginBottom: '4px' }}>{title}</div>
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)' }}>{subtitle}</div>
      </div>
      {children}
    </div>
  )
}

// ── Brand Positions Section ───────────────────────────────────────────────────
function BrandsSection() {
  return (
    <section id="brands" style={{ padding: '64px 0' }}>
      <div className="container">
        <SectionHeader
          tag="POSITIONING"
          title="品牌定位卡片"
          desc="各銀行的一句話市場定位與適合族群"
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '12px',
          }}
        >
          {brandPositions.map((brand) => (
            <div
              key={brand.name}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '18px 20px',
                transition: 'all 0.2s var(--easing)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'var(--surface-hover)'
                el.style.borderColor = 'var(--border-accent)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'var(--surface)'
                el.style.borderColor = 'var(--border)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '8px',
                }}
              >
                <span style={{ fontWeight: 600, fontSize: '14px' }}>{brand.name}</span>
                <span className={`tag-type tag-${brand.type}`}>
                  {TYPE_LABELS[brand.type]}
                </span>
              </div>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--foreground)',
                  lineHeight: 1.5,
                  marginBottom: '10px',
                }}
              >
                {brand.tagline}
              </p>
              <div
                style={{
                  fontSize: '11px',
                  color: '#60a5fa',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span aria-hidden="true">→</span>
                {brand.group}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Market Trends Section ─────────────────────────────────────────────────────
function TrendsSection() {
  return (
    <section id="trends" style={{ padding: '64px 0' }}>
      <div className="container">
        <SectionHeader
          tag="TRENDS"
          title="7 大市場趨勢"
          desc="2026年台灣數位帳戶市場關鍵觀察"
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          {marketTrends.map((trend, i) => (
            <div
              key={trend.title}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '22px',
                animation: `fadeInUp 0.5s var(--easing) ${i * 0.05}s both`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '12px',
                }}
              >
                <span style={{ fontSize: '24px' }} role="img" aria-hidden="true">
                  {trend.icon}
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    fontFamily: "'IBM Plex Mono', monospace",
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: `${trend.tagColor}18`,
                    color: trend.tagColor,
                    border: `1px solid ${trend.tagColor}30`,
                  }}
                >
                  {trend.tag}
                </span>
              </div>
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '8px',
                  color: 'var(--foreground)',
                }}
              >
                {trend.title}
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--foreground-muted)',
                  lineHeight: 1.6,
                }}
              >
                {trend.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const sources = [
    'Money101',
    '卡優新聞網',
    'Mr.Market市場先生',
    '理財學伴',
    '新手理財領路者',
    'CashFeel',
    '數位時代',
  ]

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '40px 0',
        marginTop: '40px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '12px', color: 'var(--foreground-muted)' }}>
            <span style={{ marginRight: '6px' }}>資料來源：</span>
            {sources.map((s, i) => (
              <span key={s}>
                {s}
                {i < sources.length - 1 && (
                  <span style={{ margin: '0 6px', opacity: 0.3 }}>·</span>
                )}
              </span>
            ))}
          </div>
          <div
            style={{
              fontSize: '12px',
              color: 'var(--foreground-muted)',
              background: 'rgba(249,115,22,0.08)',
              border: '1px solid rgba(249,115,22,0.2)',
              borderRadius: '8px',
              padding: '8px 16px',
              maxWidth: '600px',
            }}
          >
            ⚠ 所有利率以各銀行官網公告為準，本報告僅供參考，不構成投資建議
          </div>
          <div
            style={{
              fontSize: '11px',
              fontFamily: "'IBM Plex Mono', monospace",
              color: 'rgba(255,255,255,0.2)',
              marginTop: '8px',
            }}
          >
            2026 台灣數位帳戶市場研究報告 · 資料截至 2026 年 3 月
          </div>
        </div>
      </div>
    </footer>
  )
}

// ── Section Header ────────────────────────────────────────────────────────────
function SectionHeader({
  tag,
  title,
  desc,
}: {
  tag: string
  title: string
  desc: string
}) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <div
        style={{
          fontSize: '11px',
          fontWeight: 600,
          fontFamily: "'IBM Plex Mono', monospace",
          color: '#60a5fa',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}
      >
        {tag}
      </div>
      <h2
        style={{
          fontSize: 'clamp(20px, 3vw, 28px)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: '8px',
          color: 'var(--foreground)',
        }}
      >
        {title}
      </h2>
      <p style={{ fontSize: '14px', color: 'var(--foreground-muted)' }}>{desc}</p>
    </div>
  )
}

// ── App Root ──────────────────────────────────────────────────────────────────
function App() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <BankCompareSection />
        <NeoBankSection />
        <ChartsSection />
        <BrandsSection />
        <TrendsSection />
      </main>
      <Footer />
    </>
  )
}

export default App

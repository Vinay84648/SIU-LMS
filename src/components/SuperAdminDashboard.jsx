import { useState } from 'react'
import {
  AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts'
import {
  Building2, Users, Activity, HardDrive, DollarSign, Mail,
  TrendingUp, TrendingDown, Globe, Shield,
  MoreHorizontal, ArrowUpRight, Server, Eye,
  CheckCircle2, Clock, Filter,
} from 'lucide-react'

const trafficData = [
  { month: 'Jan', requests: 18.2, target: 16 },
  { month: 'Feb', requests: 19.5, target: 18 },
  { month: 'Mar', requests: 21.0, target: 20 },
  { month: 'Apr', requests: 22.8, target: 22 },
  { month: 'May', requests: 24.4, target: 23 },
  { month: 'Jun', requests: 26.1, target: 25 },
  { month: 'Jul', requests: 27.8, target: 27 },
  { month: 'Aug', requests: 30.2, target: 28 },
  { month: 'Sep', requests: 32.1, target: 30 },
  { month: 'Oct', requests: 3.46, target: 3.2 },
  { month: 'Nov', requests: 3.70, target: 3.4 },
  { month: 'Dec', requests: 3.94, target: 3.8 },
]

const sessionData = [
  { time: '00:00', sessions: 1240 },
  { time: '04:00', sessions: 820 },
  { time: '08:00', sessions: 4200 },
  { time: '10:00', sessions: 7800 },
  { time: '12:00', sessions: 9200 },
  { time: '14:00', sessions: 8600 },
  { time: '16:00', sessions: 7400 },
  { time: '18:00', sessions: 5800 },
  { time: '20:00', sessions: 3900 },
  { time: '22:00', sessions: 2100 },
]

const storageData = [
  { name: 'Videos', value: 48, color: '#6B7280' },
  { name: 'Documents', value: 24, color: '#9CA3AF' },
  { name: 'Images', value: 14, color: '#10B981' },
  { name: 'Databases', value: 10, color: '#F59E0B' },
  { name: 'Other', value: 4, color: '#D1D5DB' },
]

const emailStats = [
  { label: 'Delivered', value: 94820, rate: 97.8, color: 'var(--success)', icon: CheckCircle2 },
  { label: 'Bounced', value: 1240, rate: 1.3, color: 'var(--warning)', icon: TrendingDown },
  { label: 'Spam', value: 380, rate: 0.4, color: 'var(--danger)', icon: Shield },
  { label: 'Pending', value: 290, rate: 0.3, color: 'var(--info)', icon: Clock },
]

const universities = [
  { id: 1, name: 'Massachusetts Institute of Technology', code: 'MIT', region: 'NA', users: 12480, plan: 'Self-Hosted', status: 'active', health: 99.9, storage: 84 },
  { id: 2, name: 'Stanford University', code: 'SU', region: 'NA', users: 10920, plan: 'Managed', status: 'active', health: 99.7, storage: 71 },
  { id: 3, name: 'University of Oxford', code: 'UOX', region: 'EU', users: 9840, plan: 'Managed', status: 'active', health: 99.4, storage: 63 },
  { id: 4, name: 'ETH Zürich', code: 'ETH', region: 'EU', users: 8240, plan: 'Self-Hosted', status: 'active', health: 98.8, storage: 55 },
  { id: 5, name: 'National University Singapore', code: 'NUS', region: 'APAC', users: 7620, plan: 'Managed', status: 'provisioning', health: 94.2, storage: 28 },
  { id: 6, name: 'University of Tokyo', code: 'UTK', region: 'APAC', users: 6980, plan: 'Community', status: 'active', health: 99.1, storage: 41 },
  { id: 7, name: 'University of Cape Town', code: 'UCT', region: 'AF', users: 4120, plan: 'Community', status: 'suspended', health: 0, storage: 38 },
]

const auditLogs = [
  { id: 1, action: 'University provisioned', actor: 'system@educore.io', target: 'Stanford University', time: '2 min ago', severity: 'info' },
  { id: 2, action: 'Feature flag toggled', actor: 'admin@educore.io', target: 'ai_grading → ON (MIT)', time: '14 min ago', severity: 'warning' },
  { id: 3, action: 'OTP rate limit triggered', actor: 'system', target: '42 attempts / EU-West-1', time: '28 min ago', severity: 'danger' },
  { id: 4, action: 'Platform version updated', actor: 'system', target: 'UTK → v2.4.1', time: '1h ago', severity: 'success' },
  { id: 5, action: 'Admin role granted', actor: 'admin@educore.io', target: 'dr.chen@oxford.ac.uk', time: '2h ago', severity: 'warning' },
  { id: 6, action: 'Domain verified', actor: 'system', target: 'nus.edu.sg', time: '3h ago', severity: 'success' },
]

const platformHealth = [
  { name: 'API Gateway', value: 99.97, color: '#10B981' },
  { name: 'Auth Service', value: 99.94, color: '#6B7280' },
  { name: 'Video CDN', value: 99.81, color: '#9CA3AF' },
  { name: 'Email (SES)', value: 99.99, color: '#F59E0B' },
]

const statusColors = {
  active: 'var(--success)',
  provisioning: 'var(--warning)',
  suspended: 'var(--danger)',
}

const planColors = {
  'Self-Hosted': '#475569',
  'Managed': '#64748B',
  'Community': '#6B7280',
}

function Card({ children, style }) {
  return (
    <div style={{
      background: 'var(--surface)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      boxShadow: 'var(--shadow-1)',
      ...style,
    }}>
      {children}
    </div>
  )
}

function KpiCard({ label, value, sub, icon: Icon, color, trend, trendValue }) {
  return (
    <Card style={{ padding: '20px 22px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: `${color}18`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: `1px solid ${color}28`,
        }}>
          <Icon size={17} color={color} />
        </div>
        {trend && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 3,
            fontSize: 11, fontWeight: 600,
            color: trend === 'up' ? 'var(--success)' : 'var(--danger)',
            background: trend === 'up' ? 'var(--success-muted)' : 'var(--danger-muted)',
            padding: '2px 7px', borderRadius: 100,
          }}>
            {trend === 'up' ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
            {trendValue}
          </div>
        )}
      </div>
      <div style={{ fontSize: 26, fontWeight: 750, letterSpacing: '-0.03em', color: 'var(--text-1)', lineHeight: 1.1, marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 12, color: 'var(--text-3)', fontWeight: 500 }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: 'var(--text-4)', marginTop: 3 }}>{sub}</div>}
    </Card>
  )
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: 'var(--surface-2)', border: '1px solid var(--border)',
      borderRadius: 10, padding: '10px 14px', boxShadow: 'var(--shadow-3)',
    }}>
      <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 6 }}>{label}</div>
      {payload.map((p) => (
        <div key={p.name} style={{ fontSize: 12, fontWeight: 600, color: p.color, display: 'flex', gap: 8 }}>
          <span>{p.name}:</span>
          <span>{typeof p.value === 'number' ? p.value.toFixed(1) : p.value}M reqs</span>
        </div>
      ))}
    </div>
  )
}

export default function SuperAdminDashboard() {
  const [tableFilter, setTableFilter] = useState('all')

  const filteredUnis = tableFilter === 'all'
    ? universities
    : universities.filter(u => u.status === tableFilter)

  return (
    <div style={{ padding: '28px 28px 48px' }}>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Platform Overview</div>
          <h1 style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: 0, letterSpacing: '-0.02em' }}>Super Admin Dashboard</h1>
          <p style={{ fontSize: 13, color: 'var(--text-3)', margin: '4px 0 0' }}>Real-time platform metrics across all tenants · July 18, 2026</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '8px 14px', borderRadius: 9,
            background: 'var(--surface-2)', border: '1px solid var(--border)',
            cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 500,
            color: 'var(--text-2)',
          }}>
            <Filter size={13} /> Filters
          </button>
          <button style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '8px 14px', borderRadius: 9,
            background: 'var(--primary)', border: 'none',
            cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 600,
            color: 'var(--primary-fg)',
          }}>
            <Building2 size={13} /> Provision University
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 20 }}>
        <KpiCard label="Total Universities" value="142" sub="Across 38 countries" icon={Building2} color="#475569" trend="up" trendValue="+8 this month" />
        <KpiCard label="Active Users" value="284,620" sub="↑ 2,841 this week" icon={Users} color="#10B981" trend="up" trendValue="+3.2%" />
        <KpiCard label="Active Sessions" value="9,284" sub="Peak 12,400 at 12 PM" icon={Activity} color="#3B82F6" trend="up" trendValue="+12%" />
        <KpiCard label="Platform Health" value="99.94%" sub="All systems operational" icon={Server} color="#10B981" trend="up" trendValue="SLA met" />
        <KpiCard label="Storage Used" value="8.4 TB" sub="of 12 TB allocated" icon={HardDrive} color="#F59E0B" trend="up" trendValue="70% used" />
        <KpiCard label="Celery Tasks" value="48,241" sub="Queue rate 120/sec" icon={Activity} color="#10B981" trend="up" trendValue="Normal" />
      </div>

      {/* Charts Row 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14, marginBottom: 14 }}>
        {/* Request volume Chart */}
        <Card style={{ padding: '20px 20px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Monthly Requests Volume</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Traffic vs Average · FY 2026</div>
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              {[{ color: '#475569', label: 'Requests' }, { color: '#10B981', label: 'Average' }].map(l => (
                <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: l.color }} />
                  <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{l.label}</span>
                </div>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={210}>
            <AreaChart data={trafficData} margin={{ top: 4, right: 4, bottom: 0, left: -10 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#475569" stopOpacity={0.28} />
                  <stop offset="100%" stopColor="#475569" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="tgtGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}M`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="requests" name="Requests" stroke="#475569" strokeWidth={2.5} fill="url(#revGrad)" dot={false} />
              <Area type="monotone" dataKey="target" name="Average" stroke="#10B981" strokeWidth={1.5} strokeDasharray="4 4" fill="url(#tgtGrad)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Storage Pie */}
        <Card style={{ padding: '20px' }}>
          <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Storage Breakdown</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 14 }}>8.4 TB / 12 TB used</div>
          <div style={{ position: 'relative' }}>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie data={storageData} cx="50%" cy="50%" innerRadius={52} outerRadius={72} paddingAngle={3} dataKey="value" strokeWidth={0}>
                  {storageData.map((entry, idx) => <Cell key={idx} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', pointerEvents: 'none' }}>
              <div style={{ fontSize: 18, fontWeight: 750, color: 'var(--text-1)' }}>70%</div>
              <div style={{ fontSize: 10, color: 'var(--text-4)' }}>used</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
            {storageData.map(d => (
              <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: d.color, flexShrink: 0 }} />
                <span style={{ fontSize: 11, color: 'var(--text-2)', flex: 1 }}>{d.name}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-1)', fontFamily: "'JetBrains Mono', monospace" }}>{d.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        {/* Active Sessions */}
        <Card style={{ padding: '20px 20px 12px' }}>
          <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Active Sessions Today</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 14 }}>Concurrent users · 24h view</div>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={sessionData} margin={{ top: 4, right: 4, bottom: 0, left: -15 }}>
              <defs>
                <linearGradient id="sessGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="time" tick={{ fontSize: 10, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} tickFormatter={v => `${(v / 1000).toFixed(0)}k`} />
              <Tooltip contentStyle={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Area type="monotone" dataKey="sessions" stroke="#3B82F6" strokeWidth={2} fill="url(#sessGrad)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Platform Health */}
        <Card style={{ padding: '20px' }}>
          <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Platform Health</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 18 }}>Service uptime · last 30 days</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {platformHealth.map(s => (
              <div key={s.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-2)' }}>{s.name}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: s.value > 99.9 ? 'var(--success)' : s.value > 99 ? 'var(--warning)' : 'var(--danger)', fontFamily: "'JetBrains Mono', monospace" }}>{s.value}%</span>
                </div>
                <div style={{ height: 5, borderRadius: 100, background: 'var(--bg-2)', overflow: 'hidden' }}>
                  <div style={{ width: `${s.value}%`, height: '100%', borderRadius: 100, background: s.color, transition: 'width 0.6s ease' }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, padding: '10px 12px', background: 'var(--success-muted)', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
            <CheckCircle2 size={14} color="var(--success)" />
            <span style={{ fontSize: 12, color: 'var(--success)', fontWeight: 500 }}>All systems operational</span>
          </div>
        </Card>
      </div>

      {/* SES Email Stats */}
      <Card style={{ padding: '20px', marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>SES Email Statistics</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Last 7 days · 96,730 total sends</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--success)', background: 'var(--success-muted)', padding: '4px 10px', borderRadius: 100 }}>
            <Mail size={11} />
            <span>97.8% delivery rate</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {emailStats.map(stat => {
            const StatIcon = stat.icon
            return (
              <div key={stat.label} style={{
                padding: '14px 16px',
                background: 'var(--bg-2)',
                borderRadius: 12,
                border: '1px solid var(--border)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <StatIcon size={14} color={stat.color} />
                  <span style={{ fontSize: 11, color: stat.color, fontWeight: 600 }}>{stat.rate}%</span>
                </div>
                <div style={{ fontSize: 20, fontWeight: 750, color: 'var(--text-1)', letterSpacing: '-0.02em', fontFamily: "'JetBrains Mono', monospace" }}>
                  {stat.value.toLocaleString()}
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>{stat.label}</div>
              </div>
            )
          })}
        </div>
      </Card>

      {/* Universities Table */}
      <Card style={{ marginBottom: 14 }}>
        <div style={{ padding: '18px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>University Tenants</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)' }}>142 universities across 38 countries</div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['all', 'active', 'provisioning', 'suspended'].map(f => (
              <button key={f} onClick={() => setTableFilter(f)} style={{
                padding: '5px 10px', borderRadius: 7,
                background: tableFilter === f ? 'var(--primary-muted)' : 'transparent',
                border: '1px solid var(--border)',
                cursor: 'pointer', fontFamily: 'inherit',
                fontSize: 11, fontWeight: 500,
                color: tableFilter === f ? 'var(--primary)' : 'var(--text-3)',
                transition: 'all 0.15s', textTransform: 'capitalize',
              }}>{f}</button>
            ))}
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg-2)' }}>
                {['University', 'Region', 'Users', 'Edition', 'Health', 'Storage', 'Status', ''].map(h => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'var(--text-4)', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredUnis.map((uni, i) => (
                <tr key={uni.id} style={{ borderTop: '1px solid var(--border)', transition: 'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: 8,
                        background: `hsl(${(i * 47) % 360}, 30%, 50%)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0,
                      }}>{uni.code.slice(0, 2)}</div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>{uni.name}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-4)' }}>{uni.code}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ fontSize: 12, color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Globe size={11} /> {uni.region}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px', fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 500, color: 'var(--text-2)' }}>
                    {uni.users.toLocaleString()}
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600,
                      color: planColors[uni.plan],
                      background: `${planColors[uni.plan]}18`,
                      padding: '3px 8px', borderRadius: 6,
                    }}>{uni.plan}</span>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 48, height: 4, borderRadius: 100, background: 'var(--bg-2)', overflow: 'hidden' }}>
                        <div style={{ width: `${uni.health}%`, height: '100%', background: uni.health > 99 ? 'var(--success)' : uni.health > 90 ? 'var(--warning)' : 'var(--danger)', borderRadius: 100 }} />
                      </div>
                      <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-3)' }}>{uni.health}%</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 48, height: 4, borderRadius: 100, background: 'var(--bg-2)', overflow: 'hidden' }}>
                        <div style={{ width: `${uni.storage}%`, height: '100%', background: uni.storage > 80 ? 'var(--warning)' : 'var(--info)', borderRadius: 100 }} />
                      </div>
                      <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-3)' }}>{uni.storage}%</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: statusColors[uni.status], boxShadow: `0 0 5px ${statusColors[uni.status]}` }} />
                      <span style={{ fontSize: 11, fontWeight: 500, color: statusColors[uni.status], textTransform: 'capitalize' }}>{uni.status}</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-4)', display: 'flex' }}>
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ padding: '12px 20px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--text-3)' }}>Showing {filteredUnis.length} of 142 universities</span>
          <button style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            View all universities <ArrowUpRight size={12} />
          </button>
        </div>
      </Card>

      {/* Audit Logs */}
      <Card>
        <div style={{ padding: '18px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Global Audit Log</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Platform-wide event trail</div>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            <Eye size={13} /> View full log
          </button>
        </div>
        {auditLogs.map((log, i) => {
          const severityColor = { info: 'var(--info)', warning: 'var(--warning)', danger: 'var(--danger)', success: 'var(--success)' }[log.severity]
          return (
            <div key={log.id} style={{
              padding: '12px 20px',
              borderBottom: i < auditLogs.length - 1 ? '1px solid var(--border)' : 'none',
              display: 'flex', alignItems: 'flex-start', gap: 12,
              transition: 'background 0.15s', cursor: 'pointer',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: severityColor, marginTop: 6, flexShrink: 0, boxShadow: `0 0 6px ${severityColor}` }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>{log.action}</span>
                  <span style={{ fontSize: 11, color: 'var(--text-4)' }}>by</span>
                  <span style={{ fontSize: 11, color: 'var(--primary)', fontFamily: "'JetBrains Mono', monospace" }}>{log.actor}</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>{log.target}</div>
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-4)', whiteSpace: 'nowrap', flexShrink: 0 }}>{log.time}</div>
            </div>
          )
        })}
      </Card>
    </div>
  )
}

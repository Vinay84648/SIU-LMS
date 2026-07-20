import { useState } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import {
  Globe, Building2, Building, Users, Mail, ToggleLeft, ToggleRight, FileText, Settings, Activity, Plus, Search, Trash2, Bell, Send
} from 'lucide-react'
import { Card, SectionHeader } from '../../../../components/ui/UI'

export function SuperAnalytics() {
  const data = [
    { name: 'Mon', requests: 12000, latency: 45 },
    { name: 'Tue', requests: 19000, latency: 42 },
    { name: 'Wed', requests: 15000, latency: 48 },
    { name: 'Thu', requests: 22000, latency: 40 },
    { name: 'Fri', requests: 26000, latency: 38 },
    { name: 'Sat', requests: 11000, latency: 35 },
    { name: 'Sun', requests: 9000, latency: 36 },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        <Card>
          <div style={{ fontSize: 12, color: 'var(--text-3)' }}>API Request Rate</div>
          <div style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: '8px 0' }}>26.4k/min</div>
          <div style={{ fontSize: 11, color: 'var(--success)' }}>↑ 12% peak increase</div>
        </Card>
        <Card>
          <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Avg Response Time</div>
          <div style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: '8px 0' }}>38 ms</div>
          <div style={{ fontSize: 11, color: 'var(--success)' }}>99.9% within SLA</div>
        </Card>
        <Card>
          <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Celery Queue Size</div>
          <div style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: '8px 0' }}>4 active tasks</div>
          <div style={{ fontSize: 11, color: 'var(--text-4)' }}>Worker pools healthy</div>
        </Card>
      </div>
      <Card>
        <SectionHeader title="API Traffic & Latency Graph" subtitle="Last 7 days system metrics" />
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: 'var(--text-3)', fontSize: 11 }} />
            <YAxis yAxisId="left" tick={{ fill: 'var(--text-3)', fontSize: 11 }} />
            <YAxis yAxisId="right" orientation="right" tick={{ fill: 'var(--text-3)', fontSize: 11 }} />
            <Tooltip />
            <Area yAxisId="left" type="monotone" dataKey="requests" stroke="var(--primary)" fill="var(--primary-muted)" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}

export function SuperMap() {
  const locations = [
    { name: 'SIU (India, IN)', status: 'Active', ping: '12ms', ip: '18.9.0.12' }
  ]
  return (
    <Card>
      <SectionHeader title="Active Tenant Distribution" subtitle="Global mapping & route ping statuses" />
      <div style={{ height: 200, background: 'var(--bg-2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, border: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'center' }}>
          <Globe size={32} color="var(--primary)" style={{ margin: '0 auto 8px' }} />
          <div style={{ fontSize: 13, fontWeight: 600 }}>Interactive Server Nodes Map</div>
          <div style={{ fontSize: 11, color: 'var(--text-4)' }}>Simulated CDN routes active in EU, US, APAC</div>
        </div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Location</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>IPv4</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Latency</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((l, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{l.name}</td>
              <td style={{ padding: 10, fontSize: 12, color: 'var(--text-3)' }}>{l.ip}</td>
              <td style={{ padding: 10, fontSize: 12, color: 'var(--text-3)' }}>{l.ping}</td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 11, fontWeight: 600, color: l.status === 'Active' ? 'var(--success)' : 'var(--warning)' }}>{l.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

export function SuperUniversities() {
  const unis = [
    { name: 'Sricity International University(SIU)', domain: 'siu.org', plan: 'Managed Cloud', mrr: 'Cloud' }
  ]
  return (
    <Card>
      <SectionHeader title="University Onboarding Directory" subtitle="Manage university tenants and active subscriptions" />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Tenant</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Domain</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Deployment Type</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Hosting Host</th>
          </tr>
        </thead>
        <tbody>
          {unis.map((u, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{u.name}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{u.domain}</td>
              <td style={{ padding: 10, fontSize: 12 }}>
                <span style={{ background: 'var(--bg-2)', padding: '2px 8px', borderRadius: 4, fontSize: 11 }}>{u.plan}</span>
              </td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12, fontWeight: 700 }}>{u.mrr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

export function SuperUsers() {
  const users = [
    { email: 'dean@siu.org', role: 'University Admin', lastActive: '2 mins ago', sessions: 2 },
    { email: 'prof.arun@siu.org', role: 'Faculty', lastActive: '15 mins ago', sessions: 1 },
    { email: 'student492@siu.org', role: 'Student', lastActive: '1 hour ago', sessions: 1 },
    { email: 'admin.finance@siu.org', role: 'University Admin', lastActive: 'Just Now', sessions: 3 }
  ]
  return (
    <Card>
      <SectionHeader title="Active Sessions Manager" subtitle="Global active accounts across all subdomains" />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>User Email</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Tenant Role</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Last Active</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Sessions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{u.email}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{u.role}</td>
              <td style={{ padding: 10, fontSize: 12, color: 'var(--text-3)' }}>{u.lastActive}</td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12 }}>{u.sessions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

export function SuperEmail() {
  const stats = [
    { label: 'SES Sending Limit (24h)', value: '50,000' },
    { label: 'Sent (last 24h)', value: '2,401' },
    { label: 'Bounced Rate', value: '0.04%' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {stats.map((s, i) => (
          <Card key={i}>
            <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{s.label}</div>
            <div style={{ fontSize: 22, fontWeight: 700, margin: '8px 0' }}>{s.value}</div>
          </Card>
        ))}
      </div>
      <Card>
        <SectionHeader title="OTP Dispatch Config" subtitle="Passwordless Authentication settings via Amazon SES" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>OTP Expiry Duration</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Time window in seconds for code validity</div>
            </div>
            <input type="text" defaultValue="300" style={{ width: 80, padding: 6, border: '1px solid var(--border)', borderRadius: 6, textAlign: 'center' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Rate Limit Rule</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Max OTP requests per user within 15 minutes</div>
            </div>
            <input type="text" defaultValue="3" style={{ width: 80, padding: 6, border: '1px solid var(--border)', borderRadius: 6, textAlign: 'center' }} />
          </div>
        </div>
      </Card>
    </div>
  )
}

export function SuperSecurity() {
  return (
    <Card>
      <SectionHeader title="Security Controls" subtitle="DDoS Rules, rate limiting, and passwordless authentication" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: 12 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>WAF Rate Limiting</div>
            <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Enable AWS CloudFront Web Application Firewall block lists</div>
          </div>
          <ToggleRight size={32} color="var(--primary)" style={{ cursor: 'pointer' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: 12 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Strict OTP Lockout</div>
            <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Suspend tenant accounts with &gt; 10 sequential authentication errors</div>
          </div>
          <ToggleRight size={32} color="var(--primary)" style={{ cursor: 'pointer' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Cross-Domain Session Check</div>
            <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Disallow session sharing between subdomains</div>
          </div>
          <ToggleLeft size={32} color="var(--text-4)" style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </Card>
  )
}

export function SuperFlags() {
  const flags = [
    { name: 'ai_grading', desc: 'Automatic grade recommendations for essays', status: true },
    { name: 'otp_only', desc: 'Passwordless security flow enabled natively', status: true },
    { name: 'multi_tenant_celery', desc: 'Tenant-specific asynchronous routing tasks', status: false }
  ]
  return (
    <Card>
      <SectionHeader title="Feature Flags Board" subtitle="Manage rollout states for features" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {flags.map((f, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i < flags.length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: i < flags.length - 1 ? 12 : 0 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, fontFamily: 'monospace' }}>{f.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{f.desc}</div>
            </div>
            {f.status ? (
              <ToggleRight size={32} color="var(--primary)" style={{ cursor: 'pointer' }} />
            ) : (
              <ToggleLeft size={32} color="var(--text-4)" style={{ cursor: 'pointer' }} />
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}

export function SuperAudit() {
  const logs = [
    { event: 'Tenant SIU Upgraded', user: 'system@siu.org', time: '1 hour ago' },
    { event: 'WAF Rule Toggled ON', user: 'security@siu.org', time: '3 hours ago' },
    { event: 'Tenant SIU provisioning completed', user: 'celery-worker-1', time: '1 day ago' }
  ]
  return (
    <Card>
      <SectionHeader title="Global Audit Trail" subtitle="Tracking infrastructure modification events" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {logs.map((l, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', borderBottom: i < logs.length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: i < logs.length - 1 ? 10 : 0 }}>
            <FileText size={16} color="var(--text-3)" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{l.event}</div>
              <div style={{ fontSize: 10, color: 'var(--text-4)' }}>Performed by {l.user}</div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{l.time}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export function SuperBranding() {
  return (
    <Card>
      <SectionHeader title="Platform Global Branding" subtitle="Logo and branding attributes overrides" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Platform Name</label>
          <input type="text" defaultValue="EduCore" style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8 }} />
        </div>
        <div>
          <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Global Primary Accent Hex</label>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 36, height: 36, background: '#8c1515', borderRadius: 8, border: '1px solid var(--border)' }} />
            <input type="text" defaultValue="#8c1515" style={{ flex: 1, padding: 8, border: '1px solid var(--border)', borderRadius: 8 }} />
          </div>
        </div>
      </div>
    </Card>
  )
}

export function SuperSettings() {
  return (
    <Card>
      <SectionHeader title="System Preferences" subtitle="Platform SMTP configuration and master settings" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>AWS SES Region</label>
          <input type="text" defaultValue="us-east-1" style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8 }} />
        </div>
        <div>
          <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Platform Timeout Threshold (ms)</label>
          <input type="text" defaultValue="15000" style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8 }} />
        </div>
      </div>
    </Card>
  )
}

export function SuperColleges() {
  const [colleges, setColleges] = useState([
    { id: 1, name: 'School of Technology & AI', university: 'Sricity International University(SIU)', uniCode: 'SIU', dean: 'Dr. APJ Abdul Kalam', departments: 3, students: 3200, faculty: 150, status: 'Active' },
    { id: 2, name: 'School of Advanced Manufacturing', university: 'Sricity International University(SIU)', uniCode: 'SIU', dean: 'Dr. Vikram Sarabhai', departments: 2, students: 1500, faculty: 80, status: 'Active' },
    { id: 3, name: 'School of Business', university: 'Sricity International University(SIU)', uniCode: 'SIU', dean: 'Dr. Homi Bhabha', departments: 4, students: 4100, faculty: 210, status: 'Active' },
    { id: 4, name: 'School of Nove Media', university: 'Sricity International University(SIU)', uniCode: 'SIU', dean: 'Prof. C.V. Raman', departments: 3, students: 2200, faculty: 120, status: 'Active' }
  ])

  const [search, setSearch] = useState('')
  const [uniFilter, setUniFilter] = useState('All')
  const [showAddForm, setShowAddForm] = useState(false)

  // Form states
  const [name, setName] = useState('')
  const [university, setUniversity] = useState('Sricity International University(SIU)')
  const [dean, setDean] = useState('')
  const [depts, setDepts] = useState(3)
  const [students, setStudents] = useState(150)
  const [faculty, setFaculty] = useState(12)

  const uniCodes = {
    'Sricity International University(SIU)': 'SIU'
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if (!name || !dean) return
    const code = uniCodes[university] || 'UNI'
    const newCol = {
      id: Date.now(),
      name,
      university,
      uniCode: code,
      dean,
      departments: Number(depts),
      students: Number(students),
      faculty: Number(faculty),
      status: 'Active'
    }
    setColleges([newCol, ...colleges])
    setName('')
    setDean('')
    setShowAddForm(false)
  }

  const handleDelete = (id) => {
    setColleges(colleges.filter(c => c.id !== id))
  }

  const toggleStatus = (id) => {
    setColleges(colleges.map(c => {
      if (c.id === id) {
        const nextStatus = c.status === 'Active' ? 'Suspended' : 'Active'
        return { ...c, status: nextStatus }
      }
      return c
    }))
  }

  const filtered = colleges.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                          c.dean.toLowerCase().includes(search.toLowerCase())
    const matchesUni = uniFilter === 'All' || c.uniCode === uniFilter
    return matchesSearch && matchesUni
  })

  const getUniColor = (code) => {
    const hash = code.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return `hsl(${hash % 360}, 65%, 45%)`
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 750, color: 'var(--text-1)', margin: 0 }}>Colleges & University Affiliations</h2>
          <p style={{ fontSize: 12, color: 'var(--text-3)', margin: '4px 0 0' }}>Overview of all global collegiate branches and their university parent structures</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '8px 14px', borderRadius: 9,
            background: 'var(--primary)', border: 'none',
            cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 600,
            color: 'var(--primary-fg)', transition: 'background 0.15s'
          }}
        >
          <Plus size={14} /> {showAddForm ? 'Close Form' : 'Affiliate New College'}
        </button>
      </div>

      {showAddForm && (
        <Card>
          <SectionHeader title="Establish Collegiate Affiliation" subtitle="Register a new college and map it to an existing university tenant" />
          <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>College Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. College of Architecture" 
                  required
                  style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }}
                />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Dean / Director</label>
                <input 
                  type="text" 
                  value={dean} 
                  onChange={e => setDean(e.target.value)}
                  placeholder="Dean's Full Name" 
                  required
                  style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 14 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Affiliated University Tenant</label>
                <select 
                  value={university} 
                  onChange={e => setUniversity(e.target.value)}
                  style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }}
                >
                  {Object.keys(uniCodes).map(uni => (
                    <option key={uni} value={uni}>{uni}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Departments</label>
                <input 
                  type="number" 
                  value={depts} 
                  onChange={e => setDepts(e.target.value)}
                  min="1"
                  style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }}
                />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Students</label>
                <input 
                  type="number" 
                  value={students} 
                  onChange={e => setStudents(e.target.value)}
                  min="0"
                  style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }}
                />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Faculty</label>
                <input 
                  type="number" 
                  value={faculty} 
                  onChange={e => setFaculty(e.target.value)}
                  min="0"
                  style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }}
                />
              </div>
            </div>

            <button type="submit" style={{ alignSelf: 'flex-end', padding: '8px 18px', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
              Confirm Affiliation
            </button>
          </form>
        </Card>
      )}

      <Card>
        {/* Search & Filter Row */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
            <Search size={14} color="var(--text-3)" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search colleges or deans..." 
              value={search} 
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', padding: '8px 10px 8px 32px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)', fontSize: 12 }}
            />
          </div>
          <div style={{ width: 220 }}>
            <select 
              value={uniFilter} 
              onChange={e => setUniFilter(e.target.value)}
              style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)', fontSize: 12 }}
            >
              <option value="All">All Universities</option>
              <option value="Sricity International University(SIU)">Sricity International University(SIU)</option>
            </select>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-2)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontSize: 11, color: 'var(--text-3)', fontWeight: 600 }}>College Details</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontSize: 11, color: 'var(--text-3)', fontWeight: 600 }}>University Affiliation</th>
                <th style={{ padding: '10px 14px', textAlign: 'center', fontSize: 11, color: 'var(--text-3)', fontWeight: 600 }}>Depts</th>
                <th style={{ padding: '10px 14px', textAlign: 'center', fontSize: 11, color: 'var(--text-3)', fontWeight: 600 }}>Students</th>
                <th style={{ padding: '10px 14px', textAlign: 'center', fontSize: 11, color: 'var(--text-3)', fontWeight: 600 }}>Faculty</th>
                <th style={{ padding: '10px 14px', textAlign: 'center', fontSize: 11, color: 'var(--text-3)', fontWeight: 600 }}>Status</th>
                <th style={{ padding: '10px 14px', textAlign: 'right', fontSize: 11, color: 'var(--text-3)', fontWeight: 600 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ padding: 24, textAlign: 'center', fontSize: 13, color: 'var(--text-4)' }}>No affiliated colleges found matching filters.</td>
                </tr>
              ) : (
                filtered.map((c, i) => {
                  const uniColor = getUniColor(c.uniCode)
                  return (
                    <tr key={c.id} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <td style={{ padding: '12px 14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{
                            width: 32, height: 32, borderRadius: 8,
                            background: `hsl(${(c.id * 83) % 360}, 50%, 40%)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0,
                          }}><Building size={14} /></div>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>{c.name}</div>
                            <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Dean: {c.dean}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '12px 14px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <span style={{
                            fontSize: 10, fontWeight: 700,
                            color: uniColor, background: `${uniColor}15`,
                            padding: '2px 6px', borderRadius: 4, width: 'fit-content'
                          }}>{c.uniCode}</span>
                          <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{c.university}</span>
                        </div>
                      </td>
                      <td style={{ padding: '12px 14px', textAlign: 'center', fontSize: 12, fontWeight: 500, fontFamily: 'monospace' }}>{c.departments}</td>
                      <td style={{ padding: '12px 14px', textAlign: 'center', fontSize: 12, fontWeight: 500, fontFamily: 'monospace' }}>{c.students.toLocaleString()}</td>
                      <td style={{ padding: '12px 14px', textAlign: 'center', fontSize: 12, fontWeight: 500, fontFamily: 'monospace' }}>{c.faculty.toLocaleString()}</td>
                      <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                        <span style={{
                          fontSize: 10, fontWeight: 700,
                          color: c.status === 'Active' ? 'var(--success)' : c.status === 'Provisioning' ? 'var(--warning)' : 'var(--danger)',
                          background: c.status === 'Active' ? 'var(--success-muted)' : c.status === 'Provisioning' ? 'var(--warning-muted)' : 'var(--danger-muted)',
                          padding: '3px 8px', borderRadius: 100
                        }}>{c.status}</span>
                      </td>
                      <td style={{ padding: '12px 14px', textAlign: 'right' }}>
                        <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                          <button 
                            onClick={() => toggleStatus(c.id)}
                            style={{
                              background: 'var(--bg-2)', border: '1px solid var(--border)',
                              borderRadius: 6, padding: '4px 8px', fontSize: 11, fontWeight: 500,
                              color: 'var(--text-2)', cursor: 'pointer'
                            }}
                          >
                            {c.status === 'Active' ? 'Suspend' : 'Activate'}
                          </button>
                          <button 
                            onClick={() => handleDelete(c.id)}
                            style={{
                              background: 'transparent', border: 'none',
                              padding: '4px 6px', fontSize: 11, fontWeight: 500,
                              color: 'var(--danger)', cursor: 'pointer'
                            }}
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export function SuperNotifications() {
  const [headline, setHeadline] = useState('')
  const [body, setBody] = useState('')
  const [targetType, setTargetType] = useState('platform') // platform, university, college, department, year-sem
  const [selectedUnis, setSelectedUnis] = useState([])
  const [selectedColleges, setSelectedColleges] = useState([])
  const [selectedDepts, setSelectedDepts] = useState([])
  const [selectedYears, setSelectedYears] = useState([])
  const [selectedSems, setSelectedSems] = useState([])
  const [selectedRoles, setSelectedRoles] = useState(['super', 'university', 'college', 'department', 'faculty', 'student'])

  const [history, setHistory] = useState([
    { id: 1, title: 'Emergency Core Platform Update Schedule', target: 'Platform-wide (All Roles)', date: 'July 19, 2026', recipients: 11500, status: 'Completed', rate: '99.9%' },
    { id: 2, title: 'Fall Quarter Enrollment Guidelines', target: 'Selected Universities (Students, Faculty)', date: 'July 15, 2026', recipients: 4800, status: 'Completed', rate: '98.7%' },
    { id: 3, title: 'AI Grading Integration Preview Notice', target: 'SIU (Faculty Only)', date: 'July 10, 2026', recipients: 240, status: 'Completed', rate: '100%' },
  ])

  const universitiesList = [
    { code: 'SIU', name: 'Sricity International University(SIU)' }
  ]

  const collegesList = [
    { code: 'SIU-TECH', name: 'School of Technology & AI' },
    { code: 'SIU-MFG', name: 'School of Advanced Manufacturing' },
    { code: 'SIU-BIZ', name: 'School of Business' },
    { code: 'SIU-MEDIA', name: 'School of Nove Media' }
  ]

  const deptsList = ['Computer Science', 'Artificial Intelligence', 'Mechanical Engineering', 'Business Admin', 'Digital Media']
  const yearsList = ['Year 1', 'Year 2', 'Year 3', 'Year 4']
  const semsList = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8']

  const rolesList = [
    { id: 'university', label: 'University Admins' },
    { id: 'college', label: 'College Admins' },
    { id: 'department', label: 'Dept Admins' },
    { id: 'faculty', label: 'Faculty / Teachers' },
    { id: 'student', label: 'Students' }
  ]

  const handleToggleUni = (code) => {
    setSelectedUnis(prev => 
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
    )
  }

  const handleToggleCollege = (code) => {
    setSelectedColleges(prev => 
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
    )
  }

  const handleToggleDept = (dept) => {
    setSelectedDepts(prev => prev.includes(dept) ? prev.filter(d => d !== dept) : [...prev, dept])
  }

  const handleToggleYear = (year) => {
    setSelectedYears(prev => prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year])
  }

  const handleToggleSem = (sem) => {
    setSelectedSems(prev => prev.includes(sem) ? prev.filter(s => s !== sem) : [...prev, sem])
  }

  const handleToggleRole = (id) => {
    setSelectedRoles(prev => 
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    )
  }

  const estimateRecipients = () => {
    let base = 0
    if (targetType === 'platform') base = 284620
    else if (targetType === 'university') {
      base = selectedUnis.length * 15000
    } else {
      base = selectedColleges.length * 2000
    }

    // Role adjustment factor
    const ratio = selectedRoles.length / 5
    return Math.round(base * ratio)
  }

  const handleBroadcast = (e) => {
    e.preventDefault()
    if (!headline || !body) return

    let targetSummary = ''
    if (targetType === 'platform') {
      targetSummary = 'Platform-wide'
    } else if (targetType === 'university') {
      targetSummary = `Unis: ${selectedUnis.length > 0 ? selectedUnis.join(', ') : 'None'}`
    } else if (targetType === 'college') {
      targetSummary = `Colleges: ${selectedColleges.length > 0 ? selectedColleges.join(', ') : 'None'}`
    } else if (targetType === 'department') {
      targetSummary = `Depts: ${selectedDepts.length > 0 ? selectedDepts.join(', ') : 'None'}`
    } else if (targetType === 'year-sem') {
      targetSummary = `Targeted: ${selectedYears.join(', ')} | ${selectedSems.join(', ')}`
    }

    targetSummary += ` (${selectedRoles.map(r => r.charAt(0).toUpperCase() + r.slice(1)).join(', ')})`

    const newBroadcast = {
      id: Date.now(),
      title: headline,
      target: targetSummary,
      date: 'Today, Just Now',
      recipients: estimateRecipients(),
      status: 'Completed',
      rate: '100%'
    }

    setHistory([newBroadcast, ...history])
    setHeadline('')
    setBody('')
    setSelectedUnis([])
    setSelectedColleges([])
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Card>
        <SectionHeader title="Global Notifications Broadcast Dispatch" subtitle="Send platform-wide or targeted notification alerts to users dashboards" />
        <form onSubmit={handleBroadcast} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
            {/* Left side: Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Headline Subject</label>
                <input 
                  type="text" 
                  value={headline} 
                  onChange={e => setHeadline(e.target.value)}
                  placeholder="Announce system maintenance, general guidelines, or policies..." 
                  required
                  style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }}
                />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Detailed Message Body</label>
                <textarea 
                  value={body} 
                  onChange={e => setBody(e.target.value)}
                  placeholder="Provide complete descriptions or instructions..." 
                  required
                  style={{ width: '100%', height: 120, padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)', fontFamily: 'inherit', resize: 'none' }}
                />
              </div>
            </div>

            {/* Right side: Targeting options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, borderLeft: '1px solid var(--border)', paddingLeft: 16 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Targeting Scope Category</label>
                <select 
                  value={targetType} 
                  onChange={e => setTargetType(e.target.value)}
                  style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }}
                >
                  <option value="platform">Platform-wide (All Tenants)</option>
                  <option value="university">Specific Universities</option>
                  <option value="college">Specific Colleges</option>
                  <option value="department">Specific Departments</option>
                  <option value="year-sem">Year-wise / Semester-wise</option>
                </select>
              </div>

              {/* Conditionally render Universities List */}
              {targetType === 'university' && (
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Select Target Universities</label>
                  <div style={{ maxHeight: 100, overflowY: 'auto', border: '1px solid var(--border)', borderRadius: 8, padding: 8, display: 'flex', flexDirection: 'column', gap: 6, background: 'var(--surface-2)' }}>
                    {universitiesList.map(uni => (
                      <label key={uni.code} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, cursor: 'pointer' }}>
                        <input 
                          type="checkbox" 
                          checked={selectedUnis.includes(uni.code)}
                          onChange={() => handleToggleUni(uni.code)}
                          style={{ accentColor: 'var(--primary)' }}
                        />
                        <span>{uni.name} ({uni.code})</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Conditionally render Colleges List */}
              {targetType === 'college' && (
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Select Target Colleges</label>
                  <div style={{ maxHeight: 100, overflowY: 'auto', border: '1px solid var(--border)', borderRadius: 8, padding: 8, display: 'flex', flexDirection: 'column', gap: 6, background: 'var(--surface-2)' }}>
                    {collegesList.map(col => (
                      <label key={col.code} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, cursor: 'pointer' }}>
                        <input 
                          type="checkbox" 
                          checked={selectedColleges.includes(col.code)}
                          onChange={() => handleToggleCollege(col.code)}
                          style={{ accentColor: 'var(--primary)' }}
                        />
                        <span>{col.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {targetType === 'department' && (
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Select Target Departments</label>
                  <div style={{ maxHeight: 100, overflowY: 'auto', border: '1px solid var(--border)', borderRadius: 8, padding: 8, display: 'flex', flexDirection: 'column', gap: 6, background: 'var(--surface-2)' }}>
                    {deptsList.map(d => (
                      <label key={d} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, cursor: 'pointer' }}>
                        <input 
                          type="checkbox" 
                          checked={selectedDepts.includes(d)}
                          onChange={() => handleToggleDept(d)}
                          style={{ accentColor: 'var(--primary)' }}
                        />
                        <span>{d}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {targetType === 'year-sem' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Target Academic Years</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                      {yearsList.map(y => (
                        <label key={y} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, cursor: 'pointer' }}>
                          <input type="checkbox" checked={selectedYears.includes(y)} onChange={() => handleToggleYear(y)} style={{ accentColor: 'var(--primary)' }} />
                          <span>{y}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Target Semesters</label>
                    <div style={{ maxHeight: 70, overflowY: 'auto', border: '1px solid var(--border)', borderRadius: 8, padding: 6, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, background: 'var(--surface-2)' }}>
                      {semsList.map(s => (
                        <label key={s} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, cursor: 'pointer' }}>
                          <input type="checkbox" checked={selectedSems.includes(s)} onChange={() => handleToggleSem(s)} style={{ accentColor: 'var(--primary)' }} />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Target Recipient Roles</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 12px' }}>
                  {rolesList.map(role => (
                    <label key={role.id} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, cursor: 'pointer' }}>
                      <input 
                        type="checkbox" 
                        checked={selectedRoles.includes(role.id)}
                        onChange={() => handleToggleRole(role.id)}
                        style={{ accentColor: 'var(--primary)' }}
                      />
                      <span>{role.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', justifyItems: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-3)', fontWeight: 550 }}>
              <Users size={14} color="var(--primary)" />
              <span>Estimated Recipients: <strong style={{ color: 'var(--text-1)', fontFamily: 'monospace' }}>{estimateRecipients().toLocaleString()}</strong> accounts</span>
            </div>
            <button type="submit" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
              <Send size={12} /> Dispatch Broadcast
            </button>
          </div>
        </form>
      </Card>

      {/* Broadcast Logs History */}
      <Card>
        <SectionHeader title="Dispatch History Log" subtitle="Platform announcements sent to sub-tenants and clients" />
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-2)' }}>
                <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Subject Announcement</th>
                <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Target Audience Scope</th>
                <th style={{ padding: 10, textAlign: 'center', fontSize: 11, color: 'var(--text-3)' }}>Recipients</th>
                <th style={{ padding: 10, textAlign: 'center', fontSize: 11, color: 'var(--text-3)' }}>Date Sent</th>
                <th style={{ padding: 10, textAlign: 'center', fontSize: 11, color: 'var(--text-3)' }}>Delivery</th>
                <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map(item => (
                <tr key={item.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: 12, fontSize: 12, fontWeight: 600 }}>{item.title}</td>
                  <td style={{ padding: 12, fontSize: 12, color: 'var(--text-3)' }}>{item.target}</td>
                  <td style={{ padding: 12, textAlign: 'center', fontSize: 12, fontFamily: 'monospace' }}>{item.recipients.toLocaleString()}</td>
                  <td style={{ padding: 12, textAlign: 'center', fontSize: 12, color: 'var(--text-3)' }}>{item.date}</td>
                  <td style={{ padding: 12, textAlign: 'center', fontSize: 12, color: 'var(--success)', fontWeight: 600 }}>{item.rate}</td>
                  <td style={{ padding: 12, textAlign: 'right' }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--success)', background: 'var(--success-muted)', padding: '2px 6px', borderRadius: 4 }}>{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}


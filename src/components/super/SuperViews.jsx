import { useState } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import {
  Globe, Building2, Users, Mail, ToggleLeft, ToggleRight, FileText, Settings, Activity
} from 'lucide-react'
import { Card, SectionHeader } from '../common/UI'

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
    { name: 'MIT (Boston, US)', status: 'Active', ping: '12ms', ip: '18.9.0.12' },
    { name: 'Stanford University (Palo Alto, US)', status: 'Active', ping: '24ms', ip: '171.64.1.4' },
    { name: 'Oxford University (Oxford, UK)', status: 'Active', ping: '84ms', ip: '129.67.1.8' },
    { name: 'NUS (Singapore, SG)', status: 'Provisioning', ping: '142ms', ip: '137.132.2.5' }
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
    { name: 'Massachusetts Institute of Technology', domain: 'mit.edu', plan: 'Self-Hosted', mrr: 'Local' },
    { name: 'Stanford University', domain: 'stanford.edu', plan: 'Managed Cloud', mrr: 'Cloud' },
    { name: 'University of Oxford', domain: 'ox.ac.uk', plan: 'Managed Cloud', mrr: 'Cloud' },
    { name: 'ETH Zurich', domain: 'ethz.ch', plan: 'Self-Hosted', mrr: 'Local' },
    { name: 'National University of Singapore', domain: 'nus.edu.sg', plan: 'Managed Cloud', mrr: 'Cloud' }
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
    { email: 'dean@mit.edu', role: 'University Admin', lastActive: '2 mins ago', sessions: 2 },
    { email: 'prof.chen@ox.ac.uk', role: 'Faculty', lastActive: '15 mins ago', sessions: 1 },
    { email: 'student492@stanford.edu', role: 'Student', lastActive: '1 hour ago', sessions: 1 },
    { email: 'admin.finance@nus.edu.sg', role: 'University Admin', lastActive: 'Just Now', sessions: 3 }
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
    { label: 'SES Sending Limit (24h)', value: '1,000,000' },
    { label: 'Sent (last 24h)', value: '128,401' },
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
    { event: 'Tenant MIT Upgraded', user: 'system@educore.io', time: '1 hour ago' },
    { event: 'WAF Rule Toggled ON', user: 'security@educore.io', time: '3 hours ago' },
    { event: 'Tenant NUS provisioning failed', user: 'celery-worker-1', time: '1 day ago' }
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

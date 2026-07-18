import { useState, useEffect, Fragment } from 'react'
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts'
import {
  Building2, Users, FileText, CheckCircle2, XCircle, AlertTriangle, Shield,
  ArrowUpRight, Mail, Settings, ToggleLeft, ToggleRight, LayoutGrid, Globe,
  Upload, Calendar, Plus, Download, Send, Search, Lock, Edit3, Trash2, Check,
  BookOpen, Star, Sparkles, Sliders, Play, FileDown, Layers, MapPin, Key, ChevronDown, ChevronRight
} from 'lucide-react'

// --- REUSABLE UI ELEMENTS ---
function Card({ children, style }) {
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

function SectionHeader({ title, subtitle, badge }) {
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

// ==========================================
// SUPER ADMIN VIEWS
// ==========================================

function SuperAnalytics() {
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

function SuperMap() {
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

function SuperUniversities() {
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

function SuperUsers() {
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

function SuperEmail() {
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

function SuperSecurity() {
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

function SuperFlags() {
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

function SuperAudit() {
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

function SuperBranding() {
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

function SuperSettings() {
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


// ==========================================
// UNIVERSITY ADMIN VIEWS
// ==========================================

function UniAnalytics() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        <Card>
          <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Overall Attendance</div>
          <div style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: '8px 0' }}>94.2%</div>
          <div style={{ fontSize: 11, color: 'var(--success)' }}>↑ 1.1% from last month</div>
        </Card>
        <Card>
          <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Content Approval Speed</div>
          <div style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: '8px 0' }}>4.2 hrs</div>
          <div style={{ fontSize: 11, color: 'var(--success)' }}>Fast SLA turnaround</div>
        </Card>
        <Card>
          <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Active Class Enrollments</div>
          <div style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: '8px 0' }}>2,840</div>
          <div style={{ fontSize: 11, color: 'var(--text-4)' }}>Standard fall baseline</div>
        </Card>
      </div>
    </div>
  )
}

function UniStudents() {
  const students = [
    { name: 'Alice Smith', email: 'alice@mit.edu', dept: 'CS', year: 'Year 2' },
    { name: 'Bob Johnson', email: 'bob@mit.edu', dept: 'EE', year: 'Year 3' },
    { name: 'Charlie Brown', email: 'charlie@mit.edu', dept: 'CS', year: 'Year 1' }
  ]
  return (
    <Card>
      <SectionHeader title="Student Directory" subtitle="Roster of enrolled students" />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Name</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Email</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Department</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Standing</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{s.name}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{s.email}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{s.dept}</td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12 }}>{s.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

function UniFaculty() {
  const facultyList = [
    { name: 'Dr. Aisha Patel', email: 'aisha@mit.edu', dept: 'CS', courses: 2 },
    { name: 'Prof. Marcus Williams', email: 'marcus@mit.edu', dept: 'CS', courses: 3 },
    { name: 'Dr. Chen Wei', email: 'chen@mit.edu', dept: 'Math', courses: 2 }
  ]
  return (
    <Card>
      <SectionHeader title="Faculty Roster" subtitle="Academic instructors active in this tenant" />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Name</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Email</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Department</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Courses</th>
          </tr>
        </thead>
        <tbody>
          {facultyList.map((f, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{f.name}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{f.email}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{f.dept}</td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12 }}>{f.courses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

function UniDepartments() {
  const depts = [
    { name: 'Computer Science (CS)', head: 'Dr. Aisha Patel', programs: 8, students: 1240 },
    { name: 'Electrical Engineering (EE)', head: 'Prof. Marcus Williams', programs: 6, students: 980 },
    { name: 'Mathematics (Math)', head: 'Dr. Chen Wei', programs: 4, students: 480 }
  ]
  return (
    <Card>
      <SectionHeader title="Academic Departments" subtitle="Budget, programs and directory" />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Department</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Head</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Programs</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Students</th>
          </tr>
        </thead>
        <tbody>
          {depts.map((d, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{d.name}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{d.head}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{d.programs}</td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12 }}>{d.students}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

function UniContent() {
  return (
    <Card>
      <SectionHeader title="Academic Queue Details" subtitle="Full breakdown of materials awaiting university approval" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>No additional files waiting in university-wide queue right now. You can check the dashboard panel for immediate actions.</p>
    </Card>
  )
}

function UniCalendar() {
  return (
    <Card>
      <SectionHeader title="Academic Calendar Schedules" subtitle="View campus timetable timeline" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>All academic sessions, holiday marks, and quarter schedules are configured correctly. Check your dashboard side panel calendar widget for visual day indicators.</p>
    </Card>
  )
}

function UniImport() {
  return (
    <Card>
      <SectionHeader title="Bulk Import Data Control" subtitle="Upload CSV spreadsheets to sync rosters, enrollments and faculty groups" />
      <div style={{ border: '2px dashed var(--border)', borderRadius: 12, padding: '40px 20px', textAlign: 'center' }}>
        <Upload size={32} color="var(--primary)" style={{ margin: '0 auto 12px' }} />
        <div style={{ fontSize: 13, fontWeight: 600 }}>Drag and drop rosters spreadsheet</div>
        <div style={{ fontSize: 11, color: 'var(--text-4)', marginTop: 4 }}>CSV, XLSX sizes up to 10MB</div>
      </div>
    </Card>
  )
}

function UniReports() {
  return (
    <Card>
      <SectionHeader title="Official Reports Download Panel" subtitle="Generate campus-wide statistics PDFs" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: 10 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>Campus Attendance Overview - Q2 2026</div>
            <div style={{ fontSize: 10, color: 'var(--text-4)' }}>PDF · 2.4 MB</div>
          </div>
          <button style={{ padding: '6px 12px', background: 'var(--bg-2)', border: 'none', borderRadius: 6, fontSize: 11, cursor: 'pointer' }}>Download</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>Fall Enrollment Registration Numbers</div>
            <div style={{ fontSize: 10, color: 'var(--text-4)' }}>PDF · 1.8 MB</div>
          </div>
          <button style={{ padding: '6px 12px', background: 'var(--bg-2)', border: 'none', borderRadius: 6, fontSize: 11, cursor: 'pointer' }}>Download</button>
        </div>
      </div>
    </Card>
  )
}

function UniNotifications() {
  return (
    <Card>
      <SectionHeader title="Send Announcements Board" subtitle="Send campus broadcasts to active dashboards" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Notification Headline</label>
          <input type="text" placeholder="Campus wide announcement title" style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8 }} />
        </div>
        <div>
          <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Body Details</label>
          <textarea placeholder="Announcement content..." style={{ width: '100%', height: 100, padding: 8, border: '1px solid var(--border)', borderRadius: 8, fontFamily: 'inherit', resize: 'none' }} />
        </div>
        <button style={{ alignSelf: 'flex-end', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', padding: '8px 16px', borderRadius: 8, fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>Broadcast Message</button>
      </div>
    </Card>
  )
}

function UniSettings() {
  return (
    <Card>
      <SectionHeader title="University Tenant Custom Configs" subtitle="Update domain routes and basic labels" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Subdomain Mapping Route</label>
          <input type="text" defaultValue="mit.educore.io" style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8 }} />
        </div>
        <div>
          <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Preferred Accent Theme (Subdomain Hex Override)</label>
          <input type="text" defaultValue="#8c1515" style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8 }} />
        </div>
      </div>
    </Card>
  )
}

// ==========================================
// DEPARTMENT ADMIN VIEWS
// ==========================================

function DeptPrograms() {
  const programs = [
    { title: 'Bachelor of Technology in CS', code: 'BTECH-CS', semesters: 8, credits: 156 },
    { title: 'Master of Technology in CS', code: 'MTECH-CS', semesters: 4, credits: 72 },
    { title: 'Doctor of Philosophy in CS', code: 'PHD-CS', semesters: 6, credits: 36 }
  ]
  return (
    <Card>
      <SectionHeader title="Department Academic Programs" subtitle="Listed curricula structures for CS department" />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Program</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Code</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Semesters</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Credits</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((p, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{p.title}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{p.code}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{p.semesters}</td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12 }}>{p.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

function DeptCurriculum() {
  return (
    <Card>
      <SectionHeader title="Curriculum Overview Map" subtitle="Full structure and core course trees" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Please expand semesters on the main HOD dashboard panel view to interact directly with the curriculum timeline builder.</p>
    </Card>
  )
}

function DeptPlanner() {
  return (
    <Card>
      <SectionHeader title="Quarter Planner" subtitle="Active academic quarters roadmap configuration" />
      <div style={{ border: '1px solid var(--border)', borderRadius: 10, padding: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 600 }}>Active Academic Quarter (Fall 2026)</div>
        <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 4 }}>Date validity: Sep 01 - Dec 18, 2026</div>
      </div>
    </Card>
  )
}

function DeptBatches() {
  return (
    <Card>
      <SectionHeader title="Department Batches Management" subtitle="Roster listings for current student classes" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Batches list table can be managed directly under the dashboard main page grid.</p>
    </Card>
  )
}

function DeptCourses() {
  const courseCatalog = [
    { code: 'CS101', title: 'Intro to Computer Science', credits: 4, type: 'Core' },
    { code: 'CS201', title: 'Algorithms & Complexity', credits: 4, type: 'Core' },
    { code: 'CS301', title: 'Machine Learning', credits: 4, type: 'Elective' }
  ]
  return (
    <Card>
      <SectionHeader title="Course Catalog" subtitle="Add or modify courses within the computer science programs" />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Code</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Course Title</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Type</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Credits</th>
          </tr>
        </thead>
        <tbody>
          {courseCatalog.map((c, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{c.code}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{c.title}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{c.type}</td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12 }}>{c.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

function DeptFaculty() {
  return (
    <Card>
      <SectionHeader title="Faculty Assignment Panel" subtitle="Assign courses to instructors" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Review the main HOD dashboard panel list to add rating cards or edit core profiles.</p>
    </Card>
  )
}

function DeptStudents() {
  return (
    <Card>
      <SectionHeader title="Student Progress Tracker" subtitle="Progress overview" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Progress graphs by student cohorts are visible directly on your HOD dashboard panel.</p>
    </Card>
  )
}

function DeptInternships() {
  const positions = [
    { title: 'Software Engineering Intern', company: 'Google Inc.', duration: '3 months', location: 'Remote' },
    { title: 'Data Scientist Intern', company: 'Apple', duration: '6 months', location: 'Palo Alto, CA' },
    { title: 'Backend Intern', company: 'Stripe', duration: '3 months', location: 'San Francisco, CA' }
  ]
  return (
    <Card>
      <SectionHeader title="Student Internship Tracker" subtitle="Roster listings for current industry mappings" />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Position</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Company</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Duration</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Location</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((p, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{p.title}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{p.company}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{p.duration}</td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12, fontWeight: 600 }}>{p.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

function DeptReports() {
  return (
    <Card>
      <SectionHeader title="Department Performance Reports" subtitle="Generate GPA analysis files" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>All core performance metrics graphs are plotted correctly on your main dashboard layout.</p>
    </Card>
  )
}

// ==========================================
// FACULTY VIEWS
// ==========================================

function FacultyCourses() {
  return (
    <Card>
      <SectionHeader title="Instructor Teaching Courses" subtitle="Manage specific classroom modules" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Course list and section completion graphs are displayed inside the main Faculty Dashboard page panels.</p>
    </Card>
  )
}

function FacultyAssignments() {
  return (
    <Card>
      <SectionHeader title="Academic Grade workbook" subtitle="Full student assignment worksheets listing" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Use the Faculty Dashboard home page sidebar cards to access direct grading and student workbook items.</p>
    </Card>
  )
}

function FacultySchedule() {
  return (
    <Card>
      <SectionHeader title="Class Planner Calendar" subtitle="Timetables for lectures, labs & exams" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Please click on the main dashboard header calendar buttons to view your active class mappings.</p>
    </Card>
  )
}

function FacultyReports() {
  return (
    <Card>
      <SectionHeader title="Student Activity Analytics" subtitle="Engagement levels report" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Detailed student engagement trends are available on the Faculty Dashboard charts page.</p>
    </Card>
  )
}

function FacultySettings() {
  return (
    <Card>
      <SectionHeader title="Faculty Office Hour settings" subtitle="Update consultation availability slots" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Default Office Hour Slot</label>
          <input type="text" defaultValue="Mon/Wed 15:00 - 17:00" style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8 }} />
        </div>
        <button style={{ alignSelf: 'flex-start', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', padding: '8px 16px', borderRadius: 8, fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>Save Hours</button>
      </div>
    </Card>
  )
}

// ==========================================
// STUDENT VIEWS
// ==========================================

function StudentCourses() {
  const materials = [
    { title: 'Neural Networks Architecture Slides', type: 'PDF', date: 'Jul 14, 2026' },
    { title: 'Lecture 12: Gradient Descent video walkthrough', type: 'Video', date: 'Jul 12, 2026' },
    { title: 'Calculus refresher checklist', type: 'Doc', date: 'Jul 10, 2026' }
  ]
  return (
    <Card>
      <SectionHeader title="Course Materials Manager" subtitle="Download files, study slides and lab manuals" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {materials.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i < materials.length - 1 ? '1px solid var(--border)' : 'none', paddingBottom: i < materials.length - 1 ? 10 : 0 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{m.title}</div>
              <div style={{ fontSize: 10, color: 'var(--text-4)' }}>{m.type} · Posted {m.date}</div>
            </div>
            <button style={{ padding: '6px 12px', background: 'var(--bg-2)', border: 'none', borderRadius: 6, fontSize: 11, cursor: 'pointer' }}>Download</button>
          </div>
        ))}
      </div>
    </Card>
  )
}

function StudentAssignments() {
  return (
    <Card>
      <SectionHeader title="Submit Homework Workbook" subtitle="Upload file packages to assignments" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>All pending student homework submissions can be accessed directly on the Student Dashboard panels.</p>
    </Card>
  )
}

function StudentSchedule() {
  return (
    <Card>
      <SectionHeader title="Your Timetable schedule" subtitle="Daily lecture and lab timetable mapping" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Check the Student Dashboard header buttons to map out your classroom layouts.</p>
    </Card>
  )
}

function StudentTranscript() {
  const gradesHistory = [
    { term: 'Fall 2024', courses: 4, gpa: 3.68 },
    { term: 'Spring 2025', courses: 5, gpa: 3.72 },
    { term: 'Fall 2025', courses: 4, gpa: 3.80 }
  ]
  return (
    <Card>
      <SectionHeader title="Official Student Transcript" subtitle="Grade history records by semester" />
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 20 }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Academic Quarter/Term</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Enrolled Courses</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Quarter GPA</th>
          </tr>
        </thead>
        <tbody>
          {gradesHistory.map((g, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{g.term}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{g.courses} courses</td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12, fontWeight: 700 }}>{g.gpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', borderRadius: 8, fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>
        <FileDown size={14} /> Download Unofficial PDF Transcript
      </button>
    </Card>
  )
}

function StudentSettings() {
  return (
    <Card>
      <SectionHeader title="Student Notification Alerts" subtitle="Update SMS/email communication flags" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Grade Alerts</div>
            <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Send email when grade is published</div>
          </div>
          <ToggleRight size={32} color="var(--primary)" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Timetable Schedule Changes</div>
            <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Send SMS push alerts when class location is updated</div>
          </div>
          <ToggleRight size={32} color="var(--primary)" />
        </div>
      </div>
    </Card>
  )
}

function UniColleges() {
  const [colleges, setColleges] = useState([
    { id: 1, name: 'College of Engineering', dean: 'Dr. Anantha Chandrakasan', departments: 'CS, EE, ME, CE, AeroAstro', students: 2840, faculty: 184 },
    { id: 2, name: 'College of Science', dean: 'Dr. Nergis Mavalvala', departments: 'Math, Physics, Chemistry, Biology', students: 1120, faculty: 92 },
    { id: 3, name: 'College of Computing', dean: 'Dr. Daniel Huttenlocher', departments: 'AI & Decision Making, Compute Science', students: 861, faculty: 72 },
  ])
  const [name, setName] = useState('')
  const [dean, setDean] = useState('')
  const [depts, setDepts] = useState('')
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !dean) return
    setColleges([
      ...colleges,
      {
        id: Date.now(),
        name,
        dean,
        departments: depts || 'General Science',
        students: 0,
        faculty: 0
      }
    ])
    setName('')
    setDean('')
    setDepts('')
    setShowForm(false)
  }

  const handleDelete = (id) => {
    setColleges(colleges.filter(c => c.id !== id))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button 
          onClick={() => setShowForm(!showForm)} 
          style={{ padding: '8px 16px', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
        >
          <Plus size={14} /> {showForm ? 'Cancel' : 'Create College'}
        </button>
      </div>

      {showForm && (
        <Card>
          <SectionHeader title="Establish New College" subtitle="Incorporate a new collegiate branch within the university" />
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>College Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. College of Humanities" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  required 
                  style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }} 
                />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Dean / Director</label>
                <input 
                  type="text" 
                  placeholder="Dean Name" 
                  value={dean} 
                  onChange={e => setDean(e.target.value)} 
                  required 
                  style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }} 
                />
              </div>
            </div>
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Affiliated Departments (comma separated)</label>
              <input 
                type="text" 
                placeholder="e.g. Philosophy, English, Linguistics" 
                value={depts} 
                onChange={e => setDepts(e.target.value)} 
                style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }} 
              />
            </div>
            <button type="submit" style={{ alignSelf: 'flex-end', padding: '8px 16px', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
              Establish College
            </button>
          </form>
        </Card>
      )}

      <Card>
        <SectionHeader title="Academic Colleges" subtitle="Active administrative subdivisions inside this tenant" />
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>College Name</th>
                <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Dean</th>
                <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Affiliated Departments</th>
                <th style={{ padding: 10, textAlign: 'center', fontSize: 11, color: 'var(--text-3)' }}>Students</th>
                <th style={{ padding: 10, textAlign: 'center', fontSize: 11, color: 'var(--text-3)' }}>Faculty</th>
                <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((c, i) => (
                <tr key={c.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: 12, fontSize: 12, fontWeight: 600 }}>{c.name}</td>
                  <td style={{ padding: 12, fontSize: 12 }}>{c.dean}</td>
                  <td style={{ padding: 12, fontSize: 11, color: 'var(--text-3)' }}>{c.departments}</td>
                  <td style={{ padding: 12, textAlign: 'center', fontSize: 12, fontFamily: 'monospace' }}>{c.students.toLocaleString()}</td>
                  <td style={{ padding: 12, textAlign: 'center', fontSize: 12, fontFamily: 'monospace' }}>{c.faculty.toLocaleString()}</td>
                  <td style={{ padding: 12, textAlign: 'right' }}>
                    <button 
                      onClick={() => handleDelete(c.id)}
                      style={{ background: 'none', border: 'none', color: 'var(--danger)', fontSize: 11, fontWeight: 600, cursor: 'pointer', padding: '4px 8px' }}
                    >
                      Delete
                    </button>
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

// ==========================================
// DYNAMIC VIEW ROUTER
// ==========================================

export default function StaticViews({ role, tab }) {
  // Mapping roles + tabs directly to visual React subcomponents
  const viewMap = {
    super: {
      analytics: <SuperAnalytics />,
      map: <SuperMap />,
      universities: <SuperUniversities />,
      users: <SuperUsers />,
      email: <SuperEmail />,
      security: <SuperSecurity />,
      flags: <SuperFlags />,
      audit: <SuperAudit />,
      branding: <SuperBranding />,
      settings: <SuperSettings />,
      roleAccess: <RoleAccessControl currentRole={role} />,
    },
    university: {
      analytics: <UniAnalytics />,
      students: <UniStudents />,
      faculty: <UniFaculty />,
      roleAccess: <RoleAccessControl currentRole={role} />,
      colleges: <UniColleges />,
      departments: <UniDepartments />,
      content: <UniContent />,
      calendar: <UniCalendar />,
      import: <UniImport />,
      reports: <UniReports />,
      notifications: <UniNotifications />,
      settings: <UniSettings />,
    },
    department: {
      programs: <DeptPrograms />,
      curriculum: <DeptCurriculum />,
      planner: <DeptPlanner />,
      batches: <DeptBatches />,
      courses: <DeptCourses />,
      faculty: <DeptFaculty />,
      students: <DeptStudents />,
      roleAccess: <RoleAccessControl currentRole={role} />,
      internships: <DeptInternships />,
      reports: <DeptReports />,
    },
    faculty: {
      courses: <FacultyCourses />,
      assignments: <FacultyAssignments />,
      schedule: <FacultySchedule />,
      reports: <FacultyReports />,
      settings: <FacultySettings />,
    },
    student: {
      courses: <StudentCourses />,
      assignments: <StudentAssignments />,
      schedule: <StudentSchedule />,
      transcript: <StudentTranscript />,
      settings: <StudentSettings />,
    }
  }

const rolePrivileges = {
  university: [
    { id: 'manage_settings', label: 'Manage General Settings', desc: 'Allows modifying subdomain mappings and general configs' },
    { id: 'edit_branding', label: 'Tenant Branding Override', desc: 'Customizes subdomains, themes, and logos' },
    { id: 'manage_departments', label: 'Modify Departments', desc: 'Add, remove, or rename academic offices' },
    { id: 'invite_staff', label: 'Invite Admins & Faculty', desc: 'Send registration emails to prospective staff' },
    { id: 'import_csv', label: 'Bulk Roster CSV Uploads', desc: 'Direct upload of student and staff lists' },
    { id: 'approve_content', label: 'Global Content Approval Queue', desc: 'Accept or reject video and document submissions' },
  ],
  department: [
    { id: 'edit_curriculum', label: 'Curriculum Tree Builder', desc: 'Define course streams, semesters, and credits' },
    { id: 'manage_courses', label: 'Create & Edit Courses', desc: 'Manage catalogue listings and class sections' },
    { id: 'assign_faculty', label: 'Assign Course Instructors', desc: 'Map professors to specific sections' },
    { id: 'manage_batches', label: 'Batch and Cohort Planner', desc: 'Schedule active batches and set semesters' },
    { id: 'approve_dept_content', label: 'Dept Content Review Queue', desc: 'Review slides and lectures submitted by faculty' },
    { id: 'view_dept_analytics', label: 'Access Grade Analytics', desc: 'View cohorts GPAs and risk metrics' },
  ],
  faculty: [
    { id: 'create_assignments', label: 'Create Assignments & Quizzes', desc: 'Set up curriculum evaluation points' },
    { id: 'grade_submissions', label: 'Review & Grade Student Work', desc: 'Evaluate homework and give final scores' },
    { id: 'edit_office_hours', label: 'Office Hours Settings', desc: 'Configure student consultation slots' },
    { id: 'post_content', label: 'Upload Lectures & Videos', desc: 'Post files and videos to student streams' },
    { id: 'export_course_grades', label: 'Export Course Gradebooks', desc: 'Download student grades workbook' },
  ]
}

function RoleAccessControl({ currentRole }) {
  const [email, setEmail] = useState('')
  const [selectedRole, setSelectedRole] = useState('')
  const [expandedEmail, setExpandedEmail] = useState(null)
  const [permissions, setPermissions] = useState([
    { email: 'dean.mit@mit.edu', role: 'university', label: 'University Admin', scope: 'MIT', features: ['invite_staff', 'approve_content'] },
    { email: 'provost@stanford.edu', role: 'university', label: 'University Admin', scope: 'Stanford University', features: ['manage_settings', 'edit_branding'] },
    { email: 'hod.cs@mit.edu', role: 'department', label: 'Department Admin', scope: 'CS Dept, MIT', features: ['edit_curriculum', 'manage_courses'] },
    { email: 'aisha.patel@mit.edu', role: 'faculty', label: 'Faculty', scope: 'CS Dept, MIT', features: ['create_assignments', 'grade_submissions'] },
    { email: 'marcus.williams@mit.edu', role: 'faculty', label: 'Faculty', scope: 'CS Dept, MIT', features: ['create_assignments', 'post_content'] },
    { email: 'yuna.park@mit.edu', role: 'faculty', label: 'Faculty', scope: 'CS Dept, MIT', features: ['grade_submissions', 'post_content'] },
  ])

  const roleHierarchy = {
    super: [
      { value: 'university', label: 'University Admin' },
      { value: 'department', label: 'Department Admin' },
      { value: 'faculty', label: 'Faculty' }
    ],
    university: [
      { value: 'department', label: 'Department Admin' },
      { value: 'faculty', label: 'Faculty' }
    ],
    department: [
      { value: 'faculty', label: 'Faculty' }
    ],
    faculty: [],
    student: []
  }

  const assignableRoles = roleHierarchy[currentRole] || []

  useEffect(() => {
    if (assignableRoles.length > 0) {
      setSelectedRole(assignableRoles[0].value)
    } else {
      setSelectedRole('')
    }
  }, [currentRole])

  const handleGrant = (e) => {
    e.preventDefault()
    if (!email || !selectedRole) return
    const roleLabel = assignableRoles.find(r => r.value === selectedRole)?.label || selectedRole
    const defaultPrivileges = rolePrivileges[selectedRole]?.map(p => p.id) || []
    setPermissions([
      ...permissions,
      { 
        email, 
        role: selectedRole, 
        label: roleLabel, 
        scope: 'Local Tenant Scope', 
        features: defaultPrivileges 
      }
    ])
    setEmail('')
  }

  const handleRevoke = (emailToRevoke) => {
    setPermissions(permissions.filter(p => p.email !== emailToRevoke))
    if (expandedEmail === emailToRevoke) setExpandedEmail(null)
  }

  const toggleFeature = (userEmail, featureId) => {
    setPermissions(permissions.map(u => {
      if (u.email === userEmail) {
        const hasIt = u.features.includes(featureId)
        const newFeatures = hasIt
          ? u.features.filter(fid => fid !== featureId)
          : [...u.features, featureId]
        return { ...u, features: newFeatures }
      }
      return u
    }))
  }

  const visiblePermissions = permissions.filter(p => {
    if (currentRole === 'super') return p.role !== 'super' && p.role !== 'student'
    if (currentRole === 'university') return p.role === 'department' || p.role === 'faculty'
    if (currentRole === 'department') return p.role === 'faculty'
    return false
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Card>
        <SectionHeader title="Role Access Provisioning" subtitle="Grant admin and teaching system roles below your privilege level (students excluded)" />
        {assignableRoles.length === 0 ? (
          <div style={{ fontSize: 13, color: 'var(--text-3)' }}>You do not have administrative privileges to delegate roles.</div>
        ) : (
          <form onSubmit={handleGrant} style={{ display: 'flex', gap: 12, alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>User Email Address</label>
              <input 
                type="email" 
                placeholder="user@university.edu"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }}
              />
            </div>
            <div style={{ width: 200 }}>
              <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Delegated Access Role</label>
              <select
                value={selectedRole}
                onChange={e => setSelectedRole(e.target.value)}
                style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }}
              >
                {assignableRoles.map(r => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </div>
            <button type="submit" style={{ padding: '9px 16px', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
              Grant Access
            </button>
          </form>
        )}
      </Card>

      <Card>
        <SectionHeader title="Delegated Active Accounts" subtitle="Click any row to configure user privileges. Active features can be dynamically toggled." />
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Authorized Email</th>
                <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Assigned Role</th>
                <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Purview Scope</th>
                <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visiblePermissions.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ padding: 20, textAlign: 'center', fontSize: 12, color: 'var(--text-3)' }}>No active sub-privilege delegations found.</td>
                </tr>
              ) : (
                visiblePermissions.map((p, i) => {
                  const isExpanded = expandedEmail === p.email
                  const featuresList = rolePrivileges[p.role] || []
                  return (
                    <Fragment key={p.email}>
                      <tr 
                        onClick={() => setExpandedEmail(isExpanded ? null : p.email)}
                        style={{ borderBottom: '1px solid var(--border)', cursor: 'pointer', background: isExpanded ? 'var(--surface-hover)' : 'transparent', transition: 'background 0.15s' }}
                      >
                        <td style={{ padding: 12, fontSize: 12, fontWeight: 600 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            {isExpanded ? <ChevronDown size={14} color="var(--primary)" /> : <ChevronRight size={14} color="var(--text-4)" />}
                            {p.email}
                          </div>
                        </td>
                        <td style={{ padding: 12, fontSize: 12 }}>
                          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--primary)', background: 'var(--primary-muted)', padding: '2px 8px', borderRadius: 6 }}>{p.label}</span>
                        </td>
                        <td style={{ padding: 12, fontSize: 12, color: 'var(--text-3)' }}>{p.scope}</td>
                        <td style={{ padding: 12, textAlign: 'right' }} onClick={e => e.stopPropagation()}>
                          <button 
                            onClick={() => handleRevoke(p.email)}
                            style={{ background: 'none', border: 'none', color: 'var(--danger)', fontSize: 11, fontWeight: 600, cursor: 'pointer', padding: '4px 8px' }}
                          >
                            Revoke
                          </button>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr style={{ background: 'var(--bg-2)' }}>
                          <td colSpan="4" style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Configure Authorized Privileges for {p.email}:</div>
                            {featuresList.length === 0 ? (
                              <div style={{ fontSize: 12, color: 'var(--text-4)' }}>No dynamic privileges configure options defined for this role.</div>
                            ) : (
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 20px' }}>
                                {featuresList.map(feature => {
                                  const isChecked = p.features.includes(feature.id)
                                  return (
                                    <label key={feature.id} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }} onClick={e => e.stopPropagation()}>
                                      <input 
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => toggleFeature(p.email, feature.id)}
                                        style={{ marginTop: 3, cursor: 'pointer', accentColor: 'var(--primary)' }}
                                      />
                                      <div>
                                        <div style={{ fontSize: 12, fontWeight: 600, color: isChecked ? 'var(--text-1)' : 'var(--text-3)' }}>{feature.label}</div>
                                        <div style={{ fontSize: 10, color: 'var(--text-4)' }}>{feature.desc}</div>
                                      </div>
                                    </label>
                                  )
                                })}
                              </div>
                            )}
                          </td>
                        </tr>
                      )}
                    </Fragment>
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

  const selectedView = viewMap[role]?.[tab]

  return (
    <div style={{ padding: '28px 28px 48px' }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 11, color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{role} module</div>
        <h1 style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: 0, letterSpacing: '-0.02em', textTransform: 'capitalize' }}>
          {tab.replace(/([A-Z])/g, ' $1')}
        </h1>
      </div>
      {selectedView ? selectedView : (
        <Card>
          <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-3)' }}>
            <Settings size={32} color="var(--text-4)" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontSize: 14, fontWeight: 600 }}>Component Render In Progress</div>
            <div style={{ fontSize: 12, color: 'var(--text-4)', marginTop: 4 }}>The panel &ldquo;{tab}&rdquo; for role &ldquo;{role}&rdquo; is configured statically.</div>
          </div>
        </Card>
      )}
    </div>
  )
}

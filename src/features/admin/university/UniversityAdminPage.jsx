import { useState } from 'react'
import { CalendarWidget } from '../../../components/ui/CalendarWidget'
import {
  BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell,
} from 'recharts'
import {
  GraduationCap, Users, Building, Building2, BookOpen, TrendingUp, TrendingDown,
  CheckCircle2, AlertCircle, Upload, ArrowUpRight,
  Plus, Download, ChevronLeft, ChevronRight,
  FileText, Video, Image, RefreshCw, Mail,
} from 'lucide-react'

const attendanceData = [
  { day: 'Mon', present: 3840, absent: 420, late: 180 },
  { day: 'Tue', present: 4020, absent: 310, late: 140 },
  { day: 'Wed', present: 3760, absent: 480, late: 220 },
  { day: 'Thu', present: 4180, absent: 280, late: 110 },
  { day: 'Fri', present: 3620, absent: 620, late: 240 },
  { day: 'Sat', present: 1840, absent: 980, late: 130 },
]

const deptData = [
  { dept: 'CS', students: 1240, faculty: 84, courses: 68 },
  { dept: 'EE', students: 980, faculty: 72, courses: 54 },
  { dept: 'ME', students: 840, faculty: 61, courses: 46 },
  { dept: 'CE', students: 620, faculty: 48, courses: 38 },
  { dept: 'Math', students: 480, faculty: 36, courses: 30 },
  { dept: 'Phys', students: 360, faculty: 28, courses: 24 },
  { dept: 'Chem', students: 310, faculty: 24, courses: 20 },
]

const enrollmentTrend = [
  { sem: 'S1 2024', enrolled: 4120 },
  { sem: 'S2 2024', enrolled: 4340 },
  { sem: 'S1 2025', enrolled: 4580 },
  { sem: 'S2 2025', enrolled: 4720 },
  { sem: 'S1 2026', enrolled: 4821 },
]

const contentQueue = [
  { id: 1, title: 'Advanced ML Lecture Series — Week 8', type: 'video', dept: 'CS', submittedBy: 'Dr. Priya Sharma', status: 'pending', submitted: '2h ago' },
  { id: 2, title: 'Thermodynamics Lab Manual 2026', type: 'document', dept: 'ME', submittedBy: 'Prof. Ramesh Kumar', status: 'pending', submitted: '4h ago' },
  { id: 3, title: 'Circuit Analysis Problem Set', type: 'document', dept: 'EE', submittedBy: 'Dr. Ananya Singh', status: 'review', submitted: '6h ago' },
  { id: 4, title: 'Organic Chemistry Slide Deck', type: 'image', dept: 'Chem', submittedBy: 'Prof. Manoj Desai', status: 'approved', submitted: '1d ago' },
  { id: 5, title: 'Data Structures — Binary Trees', type: 'video', dept: 'CS', submittedBy: 'Dr. Kavita Sharma', status: 'rejected', submitted: '2d ago' },
]

const recentImports = [
  { id: 1, filename: 'students_fall2026_batch1.csv', records: 1240, status: 'completed', errors: 0, time: '10 min ago' },
  { id: 2, filename: 'faculty_roster_2026.csv', records: 340, status: 'completed', errors: 2, time: '2h ago' },
  { id: 3, filename: 'dept_course_mapping.xlsx', records: 820, status: 'processing', errors: 0, time: '30 min ago' },
  { id: 4, filename: 'attendance_june2026.csv', records: 18400, status: 'failed', errors: 142, time: '1d ago' },
]

const staffInvites = [
  { name: 'Dr. Sneha Reddy', email: 's.reddy@siu.org', role: 'Dept Admin', dept: 'Physics', status: 'pending', sent: '1h ago' },
  { name: 'Prof. Anoop Desai', email: 'a.desai@siu.org', role: 'Faculty', dept: 'CS', status: 'accepted', sent: '1d ago' },
  { name: 'Dr. Yash Thakur', email: 'y.thakur@siu.org', role: 'Faculty', dept: 'Math', status: 'pending', sent: '2d ago' },
]

const typeIcon = (t) => t === 'video' ? <Video size={12} /> : t === 'document' ? <FileText size={12} /> : <Image size={12} />
const typeColor = (t) => t === 'video' ? '#475569' : t === 'document' ? '#10B981' : '#F59E0B'

const statusConfig = {
  pending: { color: 'var(--warning)', bg: 'var(--warning-muted)', label: 'Pending' },
  review: { color: 'var(--info)', bg: 'var(--info-muted)', label: 'Under Review' },
  approved: { color: 'var(--success)', bg: 'var(--success-muted)', label: 'Approved' },
  rejected: { color: 'var(--danger)', bg: 'var(--danger-muted)', label: 'Rejected' },
  completed: { color: 'var(--success)', bg: 'var(--success-muted)', label: 'Completed' },
  processing: { color: 'var(--info)', bg: 'var(--info-muted)', label: 'Processing' },
  failed: { color: 'var(--danger)', bg: 'var(--danger-muted)', label: 'Failed' },
  accepted: { color: 'var(--success)', bg: 'var(--success-muted)', label: 'Accepted' },
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
    }}>{children}</div>
  )
}

function KpiCard({ label, value, sub, icon: Icon, color, trend, trendValue }) {
  return (
    <Card style={{ padding: '20px 22px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${color}28` }}>
          <Icon size={17} color={color} />
        </div>
        {trend && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 11, fontWeight: 600, color: trend === 'up' ? 'var(--success)' : 'var(--danger)', background: trend === 'up' ? 'var(--success-muted)' : 'var(--danger-muted)', padding: '2px 7px', borderRadius: 100 }}>
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

function StatusBadge({ status }) {
  const cfg = statusConfig[status] || { color: 'var(--text-3)', bg: 'var(--bg-2)', label: status }
  return (
    <span style={{ fontSize: 11, fontWeight: 600, color: cfg.color, background: cfg.bg, padding: '3px 8px', borderRadius: 6 }}>{cfg.label}</span>
  )
}

export default function UniversityAdminDashboard() {
  const [queueFilter, setQueueFilter] = useState('all')

  const filteredQueue = queueFilter === 'all' ? contentQueue : contentQueue.filter(c => c.status === queueFilter)

  return (
    <div style={{ padding: '28px 28px 48px' }}>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--success)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>SRICITY INERNATIONAL UNIVERSITY</div>
          <h1 style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: 0, letterSpacing: '-0.02em' }}>University Admin Dashboard</h1>
          <p style={{ fontSize: 13, color: 'var(--text-3)', margin: '4px 0 0' }}>Academic Year 2026 · Fall Semester · Week 14 of 18</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 9, background: 'var(--surface-2)', border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 500, color: 'var(--text-2)' }}>
            <Download size={13} /> Export Report
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 9, background: '#10B981', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 600, color: '#fff' }}>
            <Plus size={13} /> Invite Staff
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, marginBottom: 20 }}>
        <KpiCard label="Total Students" value="4,821" sub="↑ 101 from last semester" icon={GraduationCap} color="#475569" trend="up" trendValue="+2.1%" />
        <KpiCard label="Colleges" value="3" sub="Academic branches" icon={Building2} color="#8c1515" />
        <KpiCard label="Faculty Members" value="348" sub="8 pending invites" icon={Users} color="#10B981" trend="up" trendValue="+4" />
        <KpiCard label="Departments" value="12" sub="84 active programs" icon={Building} color="#3B82F6" trend="up" trendValue="2 new" />
        <KpiCard label="Active Courses" value="312" sub="2,840 enrollments today" icon={BookOpen} color="#F59E0B" trend="up" trendValue="+18" />
      </div>

      {/* Charts Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <Card style={{ padding: '20px 20px 12px' }}>
          <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Weekly Attendance</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 14 }}>Present · Absent · Late · This week</div>
          <ResponsiveContainer width="100%" height={190}>
            <BarChart data={attendanceData} margin={{ top: 4, right: 4, bottom: 0, left: -10 }} barCategoryGap="28%">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} tickFormatter={v => `${(v / 1000).toFixed(1)}k`} />
              <Tooltip contentStyle={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="present" name="Present" fill="#10B981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="absent" name="Absent" fill="#EF4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="late" name="Late" fill="#F59E0B" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', gap: 14, marginTop: 8 }}>
            {[['#10B981', 'Present'], ['#EF4444', 'Absent'], ['#F59E0B', 'Late']].map(([c, l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
                <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{l}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card style={{ padding: '20px 20px 12px' }}>
          <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Department Overview</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 14 }}>Students by department</div>
          <ResponsiveContainer width="100%" height={190}>
            <BarChart data={deptData} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 24 }}>
              <XAxis type="number" tick={{ fontSize: 10, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="dept" tick={{ fontSize: 11, fill: 'var(--text-2)' }} axisLine={false} tickLine={false} width={36} />
              <Tooltip contentStyle={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="students" name="Students" radius={[0, 4, 4, 0]}>
                {deptData.map((_, i) => (
                  <Cell key={i} fill={`hsl(${210 + i * 15}, 30%, ${50 - i * 3}%)`} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 750, color: 'var(--text-1)' }}>4,821</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Total</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 750, color: 'var(--primary)' }}>CS</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Largest</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 750, color: 'var(--success)' }}>84</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Programs</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Enrollment Trend */}
      <Card style={{ padding: '20px 20px 12px', marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Enrollment Trend</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Total enrolled students across semesters</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--primary)', background: 'var(--primary-muted)', padding: '4px 10px', borderRadius: 100 }}>
            <TrendingUp size={11} />
            <span>+701 over 2 years</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={120}>
          <AreaChart data={enrollmentTrend} margin={{ top: 4, right: 4, bottom: 0, left: -10 }}>
            <defs>
              <linearGradient id="enrollGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="sem" tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} domain={[3800, 5000]} tickFormatter={v => `${v.toLocaleString()}`} />
            <Tooltip contentStyle={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
            <Area type="monotone" dataKey="enrolled" stroke="#10B981" strokeWidth={2.5} fill="url(#enrollGrad)" dot={{ fill: '#10B981', r: 4, strokeWidth: 2, stroke: 'var(--surface)' }} />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Content Queue + Calendar */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14, marginBottom: 14 }}>
        <Card>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Content Approval Queue</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>7 items awaiting review</div>
            </div>
            <div style={{ display: 'flex', gap: 5 }}>
              {['all', 'pending', 'review'].map(f => (
                <button key={f} onClick={() => setQueueFilter(f)} style={{ padding: '4px 9px', borderRadius: 6, background: queueFilter === f ? 'var(--primary-muted)' : 'transparent', border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 500, color: queueFilter === f ? 'var(--primary)' : 'var(--text-3)', transition: 'all 0.15s', textTransform: 'capitalize' }}>{f}</button>
              ))}
            </div>
          </div>
          {filteredQueue.map((item, i) => (
            <div key={item.id} style={{ padding: '12px 18px', borderBottom: i < filteredQueue.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 12, transition: 'background 0.15s', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `${typeColor(item.type)}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${typeColor(item.type)}28` }}>
                <span style={{ color: typeColor(item.type) }}>{typeIcon(item.type)}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</div>
                <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>{item.dept} · {item.submittedBy} · {item.submitted}</div>
              </div>
              <StatusBadge status={item.status} />
              {item.status === 'pending' && (
                <div style={{ display: 'flex', gap: 5 }}>
                  <button style={{ padding: '4px 10px', borderRadius: 6, background: 'var(--success-muted)', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: 'var(--success)' }}>Approve</button>
                  <button style={{ padding: '4px 10px', borderRadius: 6, background: 'var(--danger-muted)', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: 'var(--danger)' }}>Reject</button>
                </div>
              )}
            </div>
          ))}
        </Card>

        <CalendarWidget />
      </div>

      {/* CSV Imports + Staff Invites */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <Card>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Recent CSV Imports</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Bulk data operations</div>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 8, background: 'var(--primary-muted)', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: 'var(--primary)' }}>
              <Upload size={11} /> New Import
            </button>
          </div>
          {recentImports.map((imp, i) => (
            <div key={imp.id} style={{ padding: '11px 18px', borderBottom: i < recentImports.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: imp.status === 'completed' ? 'var(--success-muted)' : imp.status === 'processing' ? 'var(--info-muted)' : 'var(--danger-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {imp.status === 'completed' ? <CheckCircle2 size={13} color="var(--success)" /> : imp.status === 'processing' ? <RefreshCw size={13} color="var(--info)" /> : <AlertCircle size={13} color="var(--danger)" />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{imp.filename}</div>
                <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 1 }}>{imp.records.toLocaleString()} records · {imp.time}{imp.errors > 0 && ` · ${imp.errors} errors`}</div>
              </div>
              <StatusBadge status={imp.status} />
            </div>
          ))}
        </Card>

        <Card>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Staff Invitations</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Pending & recent invites</div>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 8, background: '#10B981', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: '#fff' }}>
              <Mail size={11} /> Send Invite
            </button>
          </div>
          {staffInvites.map((inv, i) => (
            <div key={inv.email} style={{ padding: '12px 18px', borderBottom: i < staffInvites.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: `hsl(${i * 80 + 200}, 30%, 50%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                {inv.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)' }}>{inv.name}</div>
                <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{inv.role} · {inv.dept} · {inv.sent}</div>
              </div>
              <StatusBadge status={inv.status} />
            </div>
          ))}
          <div style={{ padding: '12px 18px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end' }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              View all invites <ArrowUpRight size={12} />
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}

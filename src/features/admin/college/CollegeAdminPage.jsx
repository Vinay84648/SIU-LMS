import { useState } from 'react'
import { CalendarWidget } from '../../../components/ui/CalendarWidget'
import {
  BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell,
} from 'recharts'
import {
  GraduationCap, Users, Building, BookOpen, TrendingUp, TrendingDown,
  CheckCircle2, AlertCircle, ArrowUpRight, Plus, Download,
  FileText, Video, Image, RefreshCw, CalendarDays,
} from 'lucide-react'

const attendanceData = [
  { day: 'Mon', present: 2640, absent: 140, late: 60 },
  { day: 'Tue', present: 2710, absent: 90, late: 40 },
  { day: 'Wed', present: 2590, absent: 180, late: 70 },
  { day: 'Thu', present: 2750, absent: 60, late: 30 },
  { day: 'Fri', present: 2480, absent: 240, late: 120 },
  { day: 'Sat', present: 1210, absent: 580, late: 50 },
]

const deptData = [
  { dept: 'CS', students: 1240, faculty: 84, courses: 68 },
  { dept: 'EE', students: 980, faculty: 72, courses: 54 },
  { dept: 'ME', students: 840, faculty: 61, courses: 46 },
  { dept: 'CE', students: 620, faculty: 48, courses: 38 },
  { dept: 'Aero', students: 160, faculty: 21, courses: 14 },
]

const contentQueue = [
  { id: 1, title: 'Advanced ML Lecture Series — Week 8', type: 'video', dept: 'CS', submittedBy: 'Dr. Priya Sharma', status: 'pending', submitted: '2h ago' },
  { id: 2, title: 'Thermodynamics Lab Manual 2026', type: 'document', dept: 'ME', submittedBy: 'Prof. Ramesh Kumar', status: 'pending', submitted: '4h ago' },
  { id: 3, title: 'Circuit Analysis Problem Set', type: 'document', dept: 'EE', submittedBy: 'Dr. Ananya Singh', status: 'review', submitted: '6h ago' },
  { id: 4, title: 'Data Structures — Binary Trees', type: 'video', dept: 'CS', submittedBy: 'Dr. Kavita Sharma', status: 'rejected', submitted: '2d ago' },
]

const staffInvites = [
  { name: 'Dr. Sneha Reddy', email: 's.reddy@siu.org', role: 'Dept Admin', dept: 'Digital Media', status: 'pending', sent: '1h ago' },
  { name: 'Prof. Anoop Desai', email: 'a.desai@siu.org', role: 'Faculty', dept: 'CS', status: 'accepted', sent: '1d ago' },
]

const statusConfig = {
  pending: { color: 'var(--warning)', bg: 'var(--warning-muted)', label: 'Pending' },
  review: { color: 'var(--info)', bg: 'var(--info-muted)', label: 'Under Review' },
  approved: { color: 'var(--success)', bg: 'var(--success-muted)', label: 'Approved' },
  rejected: { color: 'var(--danger)', bg: 'var(--danger-muted)', label: 'Rejected' },
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

export default function CollegeAdminDashboard() {
  const [queueFilter, setQueueFilter] = useState('all')

  const filteredQueue = queueFilter === 'all' ? contentQueue : contentQueue.filter(c => c.status === queueFilter)

  return (
    <div style={{ padding: '28px 28px 48px' }}>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, color: '#8B5CF6', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>MIT · College of Engineering</div>
          <h1 style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: 0, letterSpacing: '-0.02em' }}>College Admin Dashboard</h1>
          <p style={{ fontSize: 13, color: 'var(--text-3)', margin: '4px 0 0' }}>Academic Operations · Fall 2026 · Week 14 of 18</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 9, background: 'var(--surface-2)', border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 500, color: 'var(--text-2)' }}>
            <Download size={13} /> Export Report
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 9, background: '#8B5CF6', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 600, color: '#fff' }}>
            <Plus size={13} /> Invite Faculty
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, marginBottom: 20 }}>
        <KpiCard label="College Students" value="2,840" sub="↑ 48 from last semester" icon={GraduationCap} color="#8B5CF6" trend="up" trendValue="+1.7%" />
        <KpiCard label="Active Faculty" value="184" sub="3 pending invites" icon={Users} color="#10B981" trend="up" trendValue="+2" />
        <KpiCard label="Departments" value="5" sub="24 active programs" icon={Building} color="#3B82F6" />
        <KpiCard label="Offered Courses" value="114" sub="1,240 active sections" icon={BookOpen} color="#F59E0B" trend="up" trendValue="+6" />
        <KpiCard label="Pending Reviews" value="3" sub="Lectures & materials" icon={FileText} color="#EF4444" />
      </div>

      {/* Charts Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <Card style={{ padding: '20px 20px 12px' }}>
          <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Daily Attendance Overview</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 14 }}>Attendance breakdown across the college this week</div>
          <ResponsiveContainer width="100%" height={190}>
            <BarChart data={attendanceData} margin={{ top: 4, right: 4, bottom: 0, left: -10 }} barCategoryGap="28%">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="present" name="Present" fill="#10B981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="absent" name="Absent" fill="#EF4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="late" name="Late" fill="#F59E0B" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', gap: 14, marginTop: 8 }}>
            {[['#10B981', 'Present'], ['#EF4444', 'Absent'], ['#F59E0B', 'Late']].map(([c, l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
                <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{l}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card style={{ padding: '20px 20px 12px' }}>
          <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Departmental Roster Distribution</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 14 }}>Rosters size by major academic department stream</div>
          <ResponsiveContainer width="100%" height={190}>
            <AreaChart data={deptData} margin={{ top: 4, right: 4, bottom: 0, left: -10 }}>
              <defs>
                <linearGradient id="studentGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="dept" tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Area type="monotone" dataKey="students" name="Students" stroke="#8B5CF6" strokeWidth={2} fill="url(#studentGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Roster & Approvals Split */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
        {/* Approval Queue */}
        <Card>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Collegiate Material Approvals</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Review and approve content submitted by faculty</div>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              {['all', 'pending', 'review'].map(f => (
                <button key={f} onClick={() => setQueueFilter(f)} style={{
                  padding: '4px 8px', borderRadius: 6,
                  background: queueFilter === f ? 'var(--primary-muted)' : 'transparent',
                  border: '1px solid var(--border)', cursor: 'pointer',
                  fontFamily: 'inherit', fontSize: 10, fontWeight: 600,
                  color: queueFilter === f ? 'var(--primary)' : 'var(--text-3)',
                  textTransform: 'capitalize',
                }}>{f}</button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filteredQueue.map((item, idx) => (
              <div key={item.id} style={{
                padding: '12px 20px',
                borderBottom: idx < filteredQueue.length - 1 ? '1px solid var(--border)' : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                transition: 'background 0.15s', cursor: 'pointer'
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', minWidth: 0, flex: 1 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 6,
                    background: item.type === 'video' ? '#8B5CF620' : '#10B98120',
                    color: item.type === 'video' ? '#8B5CF6' : '#10B981',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    {item.type === 'video' ? <Video size={13} /> : <FileText size={13} />}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.title}</div>
                    <div style={{ fontSize: 10, color: 'var(--text-3)', marginTop: 2 }}>
                      <span style={{ fontWeight: 600 }}>{item.dept}</span> · Submitted by {item.submittedBy} · {item.submitted}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700,
                    color: statusConfig[item.status]?.color,
                    background: statusConfig[item.status]?.bg,
                    padding: '2px 6px', borderRadius: 4,
                  }}>{statusConfig[item.status]?.label}</span>
                  {item.status === 'pending' && (
                    <div style={{ display: 'flex', gap: 4 }}>
                      <button style={{ padding: '3px 8px', background: 'var(--success-muted)', border: 'none', borderRadius: 4, color: 'var(--success)', fontSize: 10, fontWeight: 600, cursor: 'pointer' }}>Approve</button>
                      <button style={{ padding: '3px 8px', background: 'var(--danger-muted)', border: 'none', borderRadius: 4, color: 'var(--danger)', fontSize: 10, fontWeight: 600, cursor: 'pointer' }}>Reject</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Side Panel: Calendar & Invites */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <CalendarWidget />

          {/* Staff / Invites */}
          <Card style={{ padding: '16px 18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Faculty Invitations</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)' }}>Pending access delegations</div>
            </div>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8B5CF6' }}><RefreshCw size={13} /></button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {staffInvites.map(invite => (
              <div key={invite.email} style={{ padding: 10, background: 'var(--bg-2)', borderRadius: 10, border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)' }}>{invite.name}</div>
                  <span style={{
                    fontSize: 9, fontWeight: 700,
                    color: statusConfig[invite.status]?.color,
                    background: statusConfig[invite.status]?.bg,
                    padding: '1px 5px', borderRadius: 4,
                  }}>{statusConfig[invite.status]?.label}</span>
                </div>
                <div style={{ fontSize: 10, color: 'var(--text-3)' }}>{invite.email}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: 'var(--text-4)', marginTop: 6 }}>
                  <span>Role: {invite.role} ({invite.dept})</span>
                  <span>Sent {invite.sent}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        </div>
      </div>
    </div>
  )
}

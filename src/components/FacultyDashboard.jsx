import { useState } from 'react'
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from 'recharts'
import {
  BookOpen, Users, CheckCircle2, Clock, TrendingUp,
  FileText, Video, Star, MoreHorizontal, ArrowUpRight,
  Calendar, Edit3, MessageSquare, Award,
} from 'lucide-react'

const courseOfferings = [
  { code: 'CS301', title: 'Machine Learning Fundamentals', students: 62, section: 'A', semester: 3, schedule: 'Mon/Wed 10:00–11:30', room: 'Hall 204', completion: 72 },
  { code: 'CS304', title: 'AI Systems & Applications', students: 58, section: 'B', semester: 3, schedule: 'Tue/Thu 14:00–15:30', room: 'Lab 101', completion: 65 },
  { code: 'CS401', title: 'Research Methods in CS', students: 28, section: 'A', semester: 4, schedule: 'Fri 09:00–12:00', room: 'Seminar Room 3', completion: 80 },
]

const recentSubmissions = [
  { student: 'Arjun Mehta', course: 'CS301', assignment: 'Neural Network Implementation', submitted: '10 min ago', grade: null, status: 'pending' },
  { student: 'Sarah Lee', course: 'CS304', assignment: 'Reinforcement Learning Lab', submitted: '1h ago', grade: null, status: 'pending' },
  { student: 'Carlos Vega', course: 'CS401', assignment: 'Research Proposal Draft', submitted: '3h ago', grade: 'A-', status: 'graded' },
  { student: 'Priya Nair', course: 'CS301', assignment: 'Neural Network Implementation', submitted: '5h ago', grade: 'B+', status: 'graded' },
]

const upcomingClasses = [
  { time: '10:00 AM', course: 'CS301', title: 'Backpropagation Deep Dive', room: 'Hall 204', students: 62, today: true },
  { time: '02:00 PM', course: 'CS304', title: 'Q-Learning Workshop', room: 'Lab 101', students: 58, today: true },
  { time: 'Tomorrow 09:00', course: 'CS401', title: 'Research Writing Workshop', room: 'Seminar 3', students: 28, today: false },
]

const weeklyEngagement = [
  { day: 'Mon', views: 240, submissions: 18 },
  { day: 'Tue', views: 310, submissions: 24 },
  { day: 'Wed', views: 280, submissions: 20 },
  { day: 'Thu', views: 390, submissions: 32 },
  { day: 'Fri', views: 420, submissions: 38 },
  { day: 'Sat', views: 180, submissions: 12 },
  { day: 'Sun', views: 120, submissions: 8 },
]

const assignments = [
  { title: 'Neural Network Implementation', course: 'CS301', dueDate: 'Jul 20', submitted: 45, total: 62, status: 'active' },
  { title: 'Reinforcement Learning Lab', course: 'CS304', dueDate: 'Jul 22', submitted: 30, total: 58, status: 'active' },
  { title: 'Research Proposal Draft', course: 'CS401', dueDate: 'Jul 18', submitted: 28, total: 28, status: 'closed' },
  { title: 'Mid-term Exam', course: 'CS301', dueDate: 'Jul 25', submitted: 0, total: 62, status: 'upcoming' },
]

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
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 11, fontWeight: 600, color: 'var(--success)', background: 'var(--success-muted)', padding: '2px 7px', borderRadius: 100 }}>
            <TrendingUp size={10} />
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

export default function FacultyDashboard() {
  const [activeTab, setActiveTab] = useState('courses')

  return (
    <div style={{ padding: '28px 28px 48px' }}>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--info)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Faculty · CS Department · MIT</div>
          <h1 style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: 0, letterSpacing: '-0.02em' }}>Dr. Aisha Patel</h1>
          <p style={{ fontSize: 13, color: 'var(--text-3)', margin: '4px 0 0' }}>Professor · Quarter 3 — 2026 · 3 active courses</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 9, background: 'var(--surface-2)', border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 500, color: 'var(--text-2)' }}>
            <Calendar size={13} /> Schedule
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 9, background: 'var(--primary)', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 600, color: 'var(--primary-fg)' }}>
            <Edit3 size={13} /> New Assignment
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
        <KpiCard label="My Students" value="148" sub="Across 3 course sections" icon={Users} color="#3B82F6" trend trendValue="+12" />
        <KpiCard label="Pending Grades" value="17" sub="2 assignments overdue" icon={Clock} color="#F59E0B" />
        <KpiCard label="Avg Class Rating" value="4.8" sub="From 142 reviews" icon={Star} color="#10B981" trend trendValue="+0.1" />
        <KpiCard label="Content Pieces" value="84" sub="32 videos · 52 docs" icon={FileText} color="#475569" trend trendValue="+6" />
      </div>

      {/* Today's Schedule */}
      <Card style={{ padding: '18px 20px', marginBottom: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 12 }}>Today's Classes</div>
        <div style={{ display: 'flex', gap: 12 }}>
          {upcomingClasses.map((cls, i) => (
            <div key={i} style={{
              flex: 1, padding: '14px 16px', borderRadius: 12,
              background: cls.today ? 'var(--primary-muted)' : 'var(--bg-2)',
              border: `1px solid ${cls.today ? 'var(--primary)' : 'var(--border)'}`,
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: cls.today ? 'var(--primary)' : 'var(--text-4)', marginBottom: 4 }}>{cls.time}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-1)', marginBottom: 2 }}>{cls.course} — {cls.title}</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{cls.room} · {cls.students} students</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Charts Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 14, marginBottom: 14 }}>
        <Card style={{ padding: '20px 20px 12px' }}>
          <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Weekly Student Engagement</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 14 }}>Content views & assignment submissions</div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={weeklyEngagement} margin={{ top: 4, right: 4, bottom: 0, left: -10 }} barCategoryGap="30%">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="views" name="Views" fill="#9CA3AF" radius={[4, 4, 0, 0]} opacity={0.8} />
              <Bar dataKey="submissions" name="Submissions" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Course Overview */}
        <Card style={{ padding: '18px' }}>
          <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 14 }}>Course Progress</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {courseOfferings.map(c => (
              <div key={c.code}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--primary)' }}>{c.code}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-3)', marginLeft: 6 }}>{c.title}</span>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-2)', fontFamily: "'JetBrains Mono', monospace" }}>{c.completion}%</span>
                </div>
                <div style={{ height: 5, borderRadius: 100, background: 'var(--bg-2)' }}>
                  <div style={{ width: `${c.completion}%`, height: '100%', background: 'var(--primary)', borderRadius: 100, transition: 'width 0.5s ease' }} />
                </div>
                <div style={{ fontSize: 10, color: 'var(--text-4)', marginTop: 3 }}>{c.students} students · {c.schedule}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Assignments + Recent Submissions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {/* Assignments */}
        <Card>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Assignments</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Active & upcoming</div>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 8, background: 'var(--primary-muted)', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: 'var(--primary)' }}>
              <Edit3 size={11} /> Create
            </button>
          </div>
          {assignments.map((a, i) => {
            const statusColor = { active: 'var(--info)', upcoming: 'var(--warning)', closed: 'var(--success)' }[a.status]
            const pct = a.total > 0 ? Math.round((a.submitted / a.total) * 100) : 0
            return (
              <div key={i} style={{ padding: '12px 18px', borderBottom: i < assignments.length - 1 ? '1px solid var(--border)' : 'none', cursor: 'pointer', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)' }}>{a.title}</div>
                  <span style={{ fontSize: 10, fontWeight: 600, color: statusColor, background: `${statusColor}18`, padding: '2px 7px', borderRadius: 100, textTransform: 'capitalize' }}>{a.status}</span>
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 6 }}>{a.course} · Due {a.dueDate}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ flex: 1, height: 3, borderRadius: 100, background: 'var(--bg-2)' }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: 'var(--primary)', borderRadius: 100 }} />
                  </div>
                  <span style={{ fontSize: 10, color: 'var(--text-4)', fontFamily: "'JetBrains Mono', monospace" }}>{a.submitted}/{a.total}</span>
                </div>
              </div>
            )
          })}
        </Card>

        {/* Recent Submissions */}
        <Card>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Recent Submissions</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>17 awaiting grade</div>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              Grade all <ArrowUpRight size={12} />
            </button>
          </div>
          {recentSubmissions.map((s, i) => (
            <div key={i} style={{ padding: '12px 18px', borderBottom: i < recentSubmissions.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `hsl(${i * 60 + 180}, 30%, 50%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                {s.student.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)', marginBottom: 1 }}>{s.student}</div>
                <div style={{ fontSize: 11, color: 'var(--text-3)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.assignment} · {s.course}</div>
                <div style={{ fontSize: 10, color: 'var(--text-4)', marginTop: 1 }}>{s.submitted}</div>
              </div>
              {s.grade ? (
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--success)', background: 'var(--success-muted)', padding: '3px 8px', borderRadius: 6 }}>{s.grade}</span>
              ) : (
                <button style={{ padding: '4px 10px', borderRadius: 7, background: 'var(--primary)', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: 'var(--primary-fg)' }}>Grade</button>
              )}
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}

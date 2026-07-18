import { useState } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from 'recharts'
import {
  BookOpen, Clock, TrendingUp, Award, Calendar,
  CheckCircle2, Circle, AlertCircle, ChevronRight,
  FileText, Video, Star, BarChart3, ArrowUpRight,
} from 'lucide-react'

const enrolledCourses = [
  { code: 'CS301', title: 'Machine Learning Fundamentals', faculty: 'Dr. Aisha Patel', schedule: 'Mon/Wed 10:00–11:30', room: 'Hall 204', progress: 72, grade: 'A', credits: 4 },
  { code: 'CS304', title: 'AI Systems & Applications', faculty: 'Prof. Marcus Williams', schedule: 'Tue/Thu 14:00–15:30', room: 'Lab 101', progress: 65, grade: 'A-', credits: 4 },
  { code: 'MA201', title: 'Discrete Mathematics', faculty: 'Dr. Chen Wei', schedule: 'Mon/Fri 12:00–13:00', room: 'Math Block 102', progress: 80, grade: 'B+', credits: 3 },
  { code: 'CS401', title: 'Research Methods in CS', faculty: 'Dr. Aisha Patel', schedule: 'Fri 09:00–12:00', room: 'Seminar Room 3', progress: 58, grade: 'A', credits: 3 },
]

const pendingAssignments = [
  { title: 'Neural Network Implementation', course: 'CS301', due: 'Jul 20, 11:59 PM', daysLeft: 2, status: 'in-progress' },
  { title: 'Reinforcement Learning Lab Report', course: 'CS304', due: 'Jul 22, 11:59 PM', daysLeft: 4, status: 'not-started' },
  { title: 'Discrete Math Problem Set 6', course: 'MA201', due: 'Jul 24, 09:00 AM', daysLeft: 6, status: 'in-progress' },
]

const recentGrades = [
  { title: 'Research Proposal Draft', course: 'CS401', grade: 'A-', score: 88, maxScore: 100, date: 'Jul 15' },
  { title: 'Mid-Quarter Quiz', course: 'CS301', grade: 'A', score: 94, maxScore: 100, date: 'Jul 12' },
  { title: 'Discrete Math PS 5', course: 'MA201', grade: 'B+', score: 82, maxScore: 100, date: 'Jul 10' },
  { title: 'AI Ethics Essay', course: 'CS304', grade: 'A', score: 91, maxScore: 100, date: 'Jul 8' },
]

const gpaProgress = [
  { sem: 'S1 2024', gpa: 3.68 },
  { sem: 'S2 2024', gpa: 3.72 },
  { sem: 'S1 2025', gpa: 3.75 },
  { sem: 'S2 2025', gpa: 3.80 },
  { sem: 'S1 2026', gpa: 3.84 },
]

const todaySchedule = [
  { time: '10:00 AM', course: 'CS301', room: 'Hall 204', type: 'Lecture' },
  { time: '02:00 PM', course: 'CS304', room: 'Lab 101', type: 'Lab' },
  { time: '04:30 PM', course: 'CS401', room: 'Seminar 3', type: 'Seminar' },
]

const recentContent = [
  { title: 'Week 8: Backpropagation Explained', course: 'CS301', type: 'video', watched: false, duration: '48 min' },
  { title: 'Q-Learning Algorithm Notes', course: 'CS304', type: 'document', watched: true, duration: '12 pages' },
  { title: 'Research Ethics Module', course: 'CS401', type: 'document', watched: false, duration: '8 pages' },
  { title: 'ML Assignment Walkthrough', course: 'CS301', type: 'video', watched: true, duration: '22 min' },
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

function KpiCard({ label, value, sub, icon: Icon, color }) {
  return (
    <Card style={{ padding: '20px 22px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${color}28` }}>
          <Icon size={17} color={color} />
        </div>
      </div>
      <div style={{ fontSize: 26, fontWeight: 750, letterSpacing: '-0.03em', color: 'var(--text-1)', lineHeight: 1.1, marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 12, color: 'var(--text-3)', fontWeight: 500 }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: 'var(--text-4)', marginTop: 3 }}>{sub}</div>}
    </Card>
  )
}

const gradeColor = (g) => {
  if (g.startsWith('A')) return 'var(--success)'
  if (g.startsWith('B')) return 'var(--info)'
  return 'var(--warning)'
}

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('assignments')

  const totalCredits = enrolledCourses.reduce((s, c) => s + c.credits, 0)
  const currentGPA = 3.84

  return (
    <div style={{ padding: '28px 28px 48px' }}>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--success)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Student · CS Year 3 · MIT</div>
          <h1 style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: 0, letterSpacing: '-0.02em' }}>Arjun Mehta</h1>
          <p style={{ fontSize: 13, color: 'var(--text-3)', margin: '4px 0 0' }}>Roll No: 2023CS0482 · Quarter 3 — 2026 · {totalCredits} credits this semester</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 9, background: 'var(--surface-2)', border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 500, color: 'var(--text-2)' }}>
            <BarChart3 size={13} /> Transcript
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 9, background: 'var(--primary)', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 600, color: 'var(--primary-fg)' }}>
            <Calendar size={13} /> View Schedule
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
        <KpiCard label="Current GPA" value="3.84" sub="Dean's List eligible" icon={Award} color="#10B981" />
        <KpiCard label="Enrolled Courses" value="4" sub={`${totalCredits} credits total`} icon={BookOpen} color="#475569" />
        <KpiCard label="Due This Week" value="3" sub="Assignments pending" icon={Clock} color="#F59E0B" />
        <KpiCard label="Attendance" value="92%" sub="Above 75% threshold" icon={CheckCircle2} color="#3B82F6" />
      </div>

      {/* Today's Schedule */}
      <Card style={{ padding: '18px 20px', marginBottom: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 12 }}>Today's Schedule — July 18</div>
        <div style={{ display: 'flex', gap: 12 }}>
          {todaySchedule.map((cls, i) => (
            <div key={i} style={{
              flex: 1, padding: '12px 14px', borderRadius: 10,
              background: i === 0 ? 'var(--primary-muted)' : 'var(--bg-2)',
              border: `1px solid ${i === 0 ? 'var(--primary)' : 'var(--border)'}`,
            }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: i === 0 ? 'var(--primary)' : 'var(--text-4)', marginBottom: 3 }}>{cls.time}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-1)', marginBottom: 2 }}>{cls.course}</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{cls.type} · {cls.room}</div>
            </div>
          ))}
          <div style={{ flex: 1, padding: '12px 14px', borderRadius: 10, background: 'var(--bg-2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 11, color: 'var(--text-4)' }}>No more classes today</span>
          </div>
        </div>
      </Card>

      {/* Charts + GPA */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 14, marginBottom: 14 }}>
        <Card style={{ padding: '20px 20px 12px' }}>
          <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>GPA Progress</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 14 }}>Cumulative GPA across semesters</div>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={gpaProgress} margin={{ top: 4, right: 4, bottom: 0, left: -15 }}>
              <defs>
                <linearGradient id="gpaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="sem" tick={{ fontSize: 10, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} domain={[3.5, 4.0]} />
              <Tooltip contentStyle={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Area type="monotone" dataKey="gpa" name="GPA" stroke="#10B981" strokeWidth={2.5} fill="url(#gpaGrad)" dot={{ fill: '#10B981', r: 4, strokeWidth: 2, stroke: 'var(--surface)' }} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Course Progress */}
        <Card style={{ padding: '18px' }}>
          <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 14 }}>Course Completion</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {enrolledCourses.map(c => (
              <div key={c.code}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--primary)' }}>{c.code}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: gradeColor(c.grade), background: `${gradeColor(c.grade)}18`, padding: '1px 6px', borderRadius: 5 }}>{c.grade}</span>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-2)', fontFamily: "'JetBrains Mono', monospace" }}>{c.progress}%</span>
                </div>
                <div style={{ height: 5, borderRadius: 100, background: 'var(--bg-2)' }}>
                  <div style={{ width: `${c.progress}%`, height: '100%', background: gradeColor(c.grade), borderRadius: 100, transition: 'width 0.5s ease' }} />
                </div>
                <div style={{ fontSize: 10, color: 'var(--text-4)', marginTop: 2 }}>{c.faculty} · {c.credits} cr</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Assignments + Grades + Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
        {/* Pending Assignments */}
        <Card>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Pending Assignments</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Due this week</div>
          </div>
          {pendingAssignments.map((a, i) => {
            const urgentColor = a.daysLeft <= 2 ? 'var(--danger)' : a.daysLeft <= 4 ? 'var(--warning)' : 'var(--info)'
            return (
              <div key={i} style={{ padding: '12px 18px', borderBottom: i < pendingAssignments.length - 1 ? '1px solid var(--border)' : 'none', cursor: 'pointer', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  {a.status === 'in-progress' ? <Circle size={14} color="var(--info)" style={{ marginTop: 1, flexShrink: 0 }} /> : <AlertCircle size={14} color="var(--warning)" style={{ marginTop: 1, flexShrink: 0 }} />}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)', marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.title}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 4 }}>{a.course}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Clock size={10} color={urgentColor} />
                      <span style={{ fontSize: 10, color: urgentColor, fontWeight: 600 }}>{a.daysLeft} days left</span>
                      <span style={{ fontSize: 10, color: 'var(--text-4)' }}>· {a.due}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div style={{ padding: '10px 18px', borderTop: '1px solid var(--border)', textAlign: 'right' }}>
            <button style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              All assignments <ArrowUpRight size={12} />
            </button>
          </div>
        </Card>

        {/* Recent Grades */}
        <Card>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Recent Grades</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Latest results</div>
          </div>
          {recentGrades.map((g, i) => (
            <div key={i} style={{ padding: '12px 18px', borderBottom: i < recentGrades.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{g.title}</div>
                <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 1 }}>{g.course} · {g.date}</div>
                <div style={{ marginTop: 4, height: 3, borderRadius: 100, background: 'var(--bg-2)' }}>
                  <div style={{ width: `${g.score}%`, height: '100%', background: gradeColor(g.grade), borderRadius: 100 }} />
                </div>
              </div>
              <div style={{ flexShrink: 0, textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 750, color: gradeColor(g.grade) }}>{g.grade}</div>
                <div style={{ fontSize: 10, color: 'var(--text-4)', fontFamily: "'JetBrains Mono', monospace" }}>{g.score}/{g.maxScore}</div>
              </div>
            </div>
          ))}
        </Card>

        {/* Recent Content */}
        <Card>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Course Content</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Recently added</div>
          </div>
          {recentContent.map((c, i) => (
            <div key={i} style={{ padding: '12px 18px', borderBottom: i < recentContent.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ width: 32, height: 32, borderRadius: 8, background: c.type === 'video' ? 'var(--primary-muted)' : 'var(--info-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${c.type === 'video' ? 'var(--primary)' : 'var(--info)'}28` }}>
                {c.type === 'video' ? <Video size={13} color="var(--primary)" /> : <FileText size={13} color="var(--info)" />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.title}</div>
                <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 1 }}>{c.course} · {c.duration}</div>
              </div>
              {c.watched ? (
                <CheckCircle2 size={14} color="var(--success)" />
              ) : (
                <ChevronRight size={14} color="var(--text-4)" />
              )}
            </div>
          ))}
          <div style={{ padding: '10px 18px', borderTop: '1px solid var(--border)', textAlign: 'right' }}>
            <button style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              All content <ArrowUpRight size={12} />
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}

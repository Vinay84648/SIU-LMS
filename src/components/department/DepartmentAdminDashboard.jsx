import { useState } from 'react'
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  RadialBarChart, RadialBar, LineChart, Line,
} from 'recharts'
import {
  BookMarked, Users, BookOpen, Award, TrendingUp, TrendingDown,
  Plus, MoreHorizontal, ArrowUpRight, GraduationCap,
  ChevronDown, ChevronRight, CheckCircle2, Clock, AlertCircle,
  Layers, UserSquare2, Briefcase, Star, Target, Zap,
  ArrowRight, Filter,
} from 'lucide-react'

const creditData = [
  { name: 'Core Courses', value: 72, color: '#475569' },
  { name: 'Electives', value: 36, color: '#6B7280' },
  { name: 'Lab Work', value: 24, color: '#10B981' },
  { name: 'Projects', value: 18, color: '#F59E0B' },
  { name: 'Seminar', value: 6, color: '#EF4444' },
]

const studentProgress = [
  { cohort: 'Batch 2023', onTrack: 280, atRisk: 34, completed: 12 },
  { cohort: 'Batch 2024', onTrack: 320, atRisk: 28, completed: 0 },
  { cohort: 'Batch 2025', onTrack: 290, atRisk: 42, completed: 0 },
  { cohort: 'Batch 2026', onTrack: 180, atRisk: 18, completed: 0 },
]

const performanceTrend = [
  { month: 'Jan', gpa: 3.42, attendance: 88 },
  { month: 'Feb', gpa: 3.38, attendance: 86 },
  { month: 'Mar', gpa: 3.51, attendance: 91 },
  { month: 'Apr', gpa: 3.48, attendance: 89 },
  { month: 'May', gpa: 3.62, attendance: 93 },
  { month: 'Jun', gpa: 3.58, attendance: 90 },
  { month: 'Jul', gpa: 3.65, attendance: 92 },
]

const batches = [
  { id: 'CS-2023-A', program: 'B.Tech CS', students: 92, faculty: 8, semester: 6, status: 'active', progress: 78 },
  { id: 'CS-2023-B', program: 'B.Tech CS', students: 88, faculty: 8, semester: 6, status: 'active', progress: 78 },
  { id: 'CS-2024-A', program: 'B.Tech CS', students: 96, faculty: 9, semester: 4, status: 'active', progress: 52 },
  { id: 'CS-2024-B', program: 'B.Tech CS', students: 84, faculty: 8, semester: 4, status: 'active', progress: 52 },
  { id: 'CS-2025-A', program: 'M.Tech CS', students: 48, faculty: 6, semester: 2, status: 'active', progress: 26 },
  { id: 'CS-2026-A', program: 'B.Tech CS', students: 98, faculty: 9, semester: 1, status: 'enrolling', progress: 8 },
]

const curriculumNodes = [
  { id: 'y1s1', year: 1, sem: 1, label: 'Year 1 · Sem 1', courses: ['CS101 Intro to CS', 'MA101 Calculus I', 'PH101 Physics I', 'EN101 English', 'CS Lab I'], credits: 20 },
  { id: 'y1s2', year: 1, sem: 2, label: 'Year 1 · Sem 2', courses: ['CS102 Data Structures', 'MA102 Calculus II', 'PH102 Physics II', 'CS103 Digital Logic', 'CS Lab II'], credits: 22 },
  { id: 'y2s1', year: 2, sem: 1, label: 'Year 2 · Sem 1', courses: ['CS201 Algorithms', 'CS202 OS Fundamentals', 'MA201 Discrete Math', 'CS203 DBMS', 'CS Lab III'], credits: 22 },
  { id: 'y2s2', year: 2, sem: 2, label: 'Year 2 · Sem 2', courses: ['CS204 Networks', 'CS205 Software Eng', 'CS206 Compiler Design', 'Elective I', 'CS Lab IV'], credits: 22 },
  { id: 'y3s1', year: 3, sem: 1, label: 'Year 3 · Sem 1', courses: ['CS301 ML Fundamentals', 'CS302 Cloud Computing', 'CS303 Security', 'Elective II', 'CS Lab V'], credits: 22 },
  { id: 'y3s2', year: 3, sem: 2, label: 'Year 3 · Sem 2', courses: ['CS304 AI Systems', 'CS305 Distributed Systems', 'Elective III', 'Elective IV', 'Internship'], credits: 24 },
  { id: 'y4s1', year: 4, sem: 1, label: 'Year 4 · Sem 1', courses: ['CS401 Research Methods', 'Elective V', 'Elective VI', 'Project I', 'Seminar I'], credits: 22 },
  { id: 'y4s2', year: 4, sem: 2, label: 'Year 4 · Sem 2', courses: ['Project II (Capstone)', 'Elective VII', 'Industry Project', 'Seminar II', '—'], credits: 22 },
]

const faculty = [
  { name: 'Dr. Aisha Patel', title: 'Professor', courses: ['CS201', 'CS401'], students: 186, rating: 4.8, status: 'active' },
  { name: 'Prof. Marcus Williams', title: 'Assoc. Prof.', courses: ['CS301', 'CS304'], students: 142, rating: 4.6, status: 'active' },
  { name: 'Dr. Yuna Park', title: 'Asst. Prof.', courses: ['CS101', 'CS102'], students: 188, rating: 4.7, status: 'active' },
  { name: 'Dr. Rajesh Mehta', title: 'Professor', courses: ['CS202', 'CS302'], students: 134, rating: 4.5, status: 'leave' },
]

const contentReview = [
  { title: 'Neural Networks — Week 9 Slides', submittedBy: 'Dr. Aisha Patel', course: 'CS301', status: 'pending', time: '1h ago' },
  { title: 'Algorithm Complexity Problem Set', submittedBy: 'Prof. Marcus Williams', course: 'CS201', status: 'pending', time: '3h ago' },
  { title: 'OS Lab Manual — Module 4', submittedBy: 'Dr. Yuna Park', course: 'CS202', status: 'review', time: '6h ago' },
]

function Card({ children, style }) {
  return (
    <div style={{
      background: 'var(--surface)', backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--border)',
      borderRadius: 16, boxShadow: 'var(--shadow-1)', ...style,
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

function StatusDot({ status }) {
  const colors = { active: 'var(--success)', enrolling: 'var(--info)', leave: 'var(--warning)', pending: 'var(--warning)', review: 'var(--info)', approved: 'var(--success)' }
  const color = colors[status] || 'var(--text-4)'
  return <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, boxShadow: `0 0 5px ${color}` }} />
}

export default function DepartmentAdminDashboard() {
  const [expandedNode, setExpandedNode] = useState('y1s1')
  const [activeBatchTab, setActiveBatchTab] = useState('active')

  const filteredBatches = batches.filter(b => activeBatchTab === 'all' || b.status === activeBatchTab)

  return (
    <div style={{ padding: '28px 28px 48px' }}>
      {/* Header */}
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, color: '#F59E0B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>CS Department · MIT</div>
          <h1 style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: 0, letterSpacing: '-0.02em' }}>Department Admin Dashboard</h1>
          <p style={{ fontSize: 13, color: 'var(--text-3)', margin: '4px 0 0' }}>Head of Department · B.Tech & M.Tech Programs · 2026</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 9, background: 'var(--surface-2)', border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 500, color: 'var(--text-2)' }}>
            <Filter size={13} /> Filter
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 9, background: '#F59E0B', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 12, fontWeight: 600, color: '#fff' }}>
            <Plus size={13} /> New Batch
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
        <KpiCard label="Total Students" value="1,070" sub="Across 4 active batches" icon={GraduationCap} color="#475569" trend="up" trendValue="+98" />
        <KpiCard label="Active Faculty" value="24" sub="4 TAs assigned" icon={UserSquare2} color="#10B981" trend="up" trendValue="+2" />
        <KpiCard label="Programs" value="8" sub="2 new this year" icon={BookMarked} color="#F59E0B" trend="up" trendValue="+2" />
        <KpiCard label="Avg GPA" value="3.65" sub="↑ 0.07 from last sem" icon={Award} color="#475569" trend="up" trendValue="+0.07" />
      </div>

      {/* Charts Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        {/* Credit Distribution */}
        <Card style={{ padding: '20px' }}>
          <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Credit Distribution</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 12 }}>B.Tech CS · 156 total credits</div>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie data={creditData} cx="50%" cy="50%" innerRadius={50} outerRadius={72} paddingAngle={3} dataKey="value" strokeWidth={0}>
                    {creditData.map((_, i) => <Cell key={i} fill={creditData[i].color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 750, color: 'var(--text-1)' }}>156</div>
                <div style={{ fontSize: 10, color: 'var(--text-4)' }}>credits</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
              {creditData.map(d => (
                <div key={d.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 2, background: d.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 11, color: 'var(--text-2)' }}>{d.name}</span>
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-1)', fontFamily: "'JetBrains Mono', monospace" }}>{d.value} cr</span>
                  </div>
                  <div style={{ height: 3, borderRadius: 100, background: 'var(--bg-2)' }}>
                    <div style={{ width: `${(d.value / 156) * 100}%`, height: '100%', background: d.color, borderRadius: 100 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Performance Trend */}
        <Card style={{ padding: '20px 20px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Department Performance</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Avg GPA & Attendance · 2026</div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {[['#475569', 'GPA'], ['#10B981', 'Attendance%']].map(([c, l]) => (
                <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{ width: 8, height: 3, borderRadius: 100, background: c }} />
                  <span style={{ fontSize: 10, color: 'var(--text-4)' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={performanceTrend} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="gpa" tick={{ fontSize: 10, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} domain={[3.2, 3.8]} />
              <YAxis yAxisId="att" orientation="right" tick={{ fontSize: 10, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} domain={[80, 100]} />
              <Tooltip contentStyle={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Line yAxisId="gpa" type="monotone" dataKey="gpa" name="GPA" stroke="#475569" strokeWidth={2.5} dot={{ fill: '#475569', r: 3 }} />
              <Line yAxisId="att" type="monotone" dataKey="attendance" name="Attendance" stroke="#10B981" strokeWidth={2} strokeDasharray="4 4" dot={{ fill: '#10B981', r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Student Progress by Cohort */}
      <Card style={{ padding: '20px 20px 12px', marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Student Progress by Cohort</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)' }}>On track · At risk · Completed</div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {[['#10B981', 'On Track'], ['#F59E0B', 'At Risk'], ['#475569', 'Completed']].map(([c, l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
                <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={140}>
          <BarChart data={studentProgress} margin={{ top: 4, right: 4, bottom: 0, left: -10 }} barCategoryGap="35%">
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis dataKey="cohort" tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--text-4)' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
            <Bar dataKey="onTrack" name="On Track" fill="#10B981" radius={[3, 3, 0, 0]} stackId="a" />
            <Bar dataKey="atRisk" name="At Risk" fill="#F59E0B" radius={[0, 0, 0, 0]} stackId="a" />
            <Bar dataKey="completed" name="Completed" fill="#475569" radius={[3, 3, 0, 0]} stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Curriculum Timeline */}
      <Card style={{ marginBottom: 14 }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Curriculum Builder</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)' }}>B.Tech CS · 4 Years · 8 Semesters · 156 credits</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 8, background: 'var(--surface-2)', border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 500, color: 'var(--text-2)' }}>
              <Layers size={11} /> View Full
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 8, background: '#F59E0B', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: '#fff' }}>
              <Plus size={11} /> Add Course
            </button>
          </div>
        </div>
        <div style={{ padding: '16px 20px', overflowX: 'auto' }}>
          {/* Year Row Labels */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 8, minWidth: 900 }}>
            {curriculumNodes.map(node => (
              <div key={node.id} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{
                  background: node.year % 2 === 0 ? 'var(--primary-muted)' : 'var(--bg-2)',
                  border: `1px solid ${node.year % 2 === 0 ? 'rgba(99,102,241,0.2)' : 'var(--border)'}`,
                  borderRadius: 10, padding: '10px 10px',
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
                  onClick={() => setExpandedNode(expandedNode === node.id ? null : node.id)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: node.year % 2 === 0 ? 'var(--primary)' : 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{node.label}</div>
                    <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-4)', fontFamily: "'JetBrains Mono', monospace" }}>{node.credits}cr</span>
                  </div>
                  {expandedNode === node.id ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {node.courses.map((course, i) => (
                        <div key={i} style={{
                          fontSize: 10, color: 'var(--text-2)',
                          background: 'var(--surface)', borderRadius: 5,
                          padding: '3px 6px', border: '1px solid var(--border)',
                          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                        }}>{course}</div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <BookOpen size={11} color="var(--text-4)" />
                      <span style={{ fontSize: 11, color: 'var(--text-4)' }}>{node.courses.length} courses</span>
                    </div>
                  )}
                </div>
                {/* Connector */}
                {node.sem < 8 && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 16 }}>
                    <ArrowRight size={12} color="var(--text-4)" />
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Progress bar */}
          <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 11, color: 'var(--text-3)', whiteSpace: 'nowrap' }}>Curriculum completion</span>
            <div style={{ flex: 1, height: 5, borderRadius: 100, background: 'var(--bg-2)', overflow: 'hidden' }}>
              <div style={{ width: '87%', height: '100%', background: 'var(--primary)', borderRadius: 100 }} />
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--primary)', whiteSpace: 'nowrap', fontFamily: "'JetBrains Mono', monospace" }}>87% mapped</span>
          </div>
        </div>
      </Card>

      {/* Batch Table + Faculty */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 14, marginBottom: 14 }}>
        {/* Batch Management */}
        <Card>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Batch Management</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>All active batches</div>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              {['all', 'active', 'enrolling'].map(f => (
                <button key={f} onClick={() => setActiveBatchTab(f)} style={{ padding: '4px 9px', borderRadius: 6, background: activeBatchTab === f ? 'var(--primary-muted)' : 'transparent', border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 500, color: activeBatchTab === f ? 'var(--primary)' : 'var(--text-3)', transition: 'all 0.15s', textTransform: 'capitalize' }}>{f}</button>
              ))}
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--bg-2)' }}>
                  {['Batch', 'Students', 'Sem', 'Progress', 'Status', ''].map(h => (
                    <th key={h} style={{ padding: '9px 14px', textAlign: 'left', fontSize: 10, fontWeight: 600, color: 'var(--text-4)', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredBatches.map(b => (
                  <tr key={b.id} style={{ borderTop: '1px solid var(--border)', transition: 'background 0.15s', cursor: 'pointer' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{ padding: '11px 14px' }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)' }}>{b.id}</div>
                      <div style={{ fontSize: 10, color: 'var(--text-4)' }}>{b.program}</div>
                    </td>
                    <td style={{ padding: '11px 14px', fontSize: 12, color: 'var(--text-2)', fontFamily: "'JetBrains Mono', monospace" }}>{b.students}</td>
                    <td style={{ padding: '11px 14px' }}>
                      <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--primary)', background: 'var(--primary-muted)', padding: '2px 7px', borderRadius: 5 }}>S{b.semester}</span>
                    </td>
                    <td style={{ padding: '11px 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 52, height: 4, borderRadius: 100, background: 'var(--bg-2)', overflow: 'hidden' }}>
                          <div style={{ width: `${b.progress}%`, height: '100%', background: b.progress > 60 ? 'var(--success)' : b.progress > 30 ? 'var(--primary)' : 'var(--warning)', borderRadius: 100 }} />
                        </div>
                        <span style={{ fontSize: 10, color: 'var(--text-3)', fontFamily: "'JetBrains Mono', monospace" }}>{b.progress}%</span>
                      </div>
                    </td>
                    <td style={{ padding: '11px 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <StatusDot status={b.status} />
                        <span style={{ fontSize: 11, color: b.status === 'active' ? 'var(--success)' : 'var(--info)', fontWeight: 500, textTransform: 'capitalize' }}>{b.status}</span>
                      </div>
                    </td>
                    <td style={{ padding: '11px 14px' }}>
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-4)', display: 'flex' }}>
                        <MoreHorizontal size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Faculty */}
        <Card>
          <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Faculty</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>24 faculty members</div>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 10px', borderRadius: 8, background: 'var(--primary-muted)', border: '1px solid rgba(99,102,241,0.2)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: 'var(--primary)' }}>
              <Plus size={11} /> Assign
            </button>
          </div>
          {faculty.map((f, i) => (
            <div key={f.name} style={{ padding: '12px 18px', borderBottom: i < faculty.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 10, transition: 'background 0.15s', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ width: 34, height: 34, borderRadius: 10, background: `hsl(${i * 60 + 220}, 60%, 55%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                {f.name.split(' ').map(n => n[0]).filter(c => c === c.toUpperCase() && c !== '.').join('').slice(0, 2)}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 1 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</span>
                  <StatusDot status={f.status} />
                </div>
                <div style={{ fontSize: 10, color: 'var(--text-3)' }}>{f.title} · {f.courses.join(', ')} · {f.students} students</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
                <Star size={11} color="#F59E0B" fill="#F59E0B" />
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-1)' }}>{f.rating}</span>
              </div>
            </div>
          ))}
          <div style={{ padding: '10px 18px', borderTop: '1px solid var(--border)', textAlign: 'right' }}>
            <button style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              View all faculty <ArrowUpRight size={12} />
            </button>
          </div>
        </Card>
      </div>

      {/* Content Review Queue */}
      <Card>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 2 }}>Department Content Review</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)' }}>3 items awaiting your approval</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--warning)', background: 'var(--warning-muted)', padding: '4px 10px', borderRadius: 100 }}>
            <Clock size={11} />
            <span>Avg review time: 4h</span>
          </div>
        </div>
        {contentReview.map((item, i) => (
          <div key={item.title} style={{ padding: '14px 20px', borderBottom: i < contentReview.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 12, transition: 'background 0.15s', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.status === 'pending' ? 'var(--warning)' : 'var(--info)', flexShrink: 0, boxShadow: `0 0 6px ${item.status === 'pending' ? 'var(--warning)' : 'var(--info)'}` }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)', marginBottom: 2 }}>{item.title}</div>
              <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{item.course} · {item.submittedBy} · {item.time}</div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button style={{ padding: '5px 12px', borderRadius: 7, background: 'var(--success-muted)', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: 'var(--success)' }}>Approve</button>
              <button style={{ padding: '5px 12px', borderRadius: 7, background: 'var(--danger-muted)', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 600, color: 'var(--danger)' }}>Reject</button>
              <button style={{ padding: '5px 12px', borderRadius: 7, background: 'var(--surface-2)', border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 11, fontWeight: 500, color: 'var(--text-2)' }}>Review</button>
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}

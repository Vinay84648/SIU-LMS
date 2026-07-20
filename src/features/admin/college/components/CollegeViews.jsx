import { useState } from 'react'
import {
  Building, Users, GraduationCap, Upload, Settings, Plus, BarChart3, Bell, FileText, Send
} from 'lucide-react'
import { Card, SectionHeader } from '../../../../components/ui/UI'

export function CollegeAnalytics() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        <Card>
          <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Overall College Attendance</div>
          <div style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: '8px 0' }}>95.4%</div>
          <div style={{ fontSize: 11, color: 'var(--success)' }}>↑ 0.8% from last month</div>
        </Card>
        <Card>
          <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Content Quality Score</div>
          <div style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: '8px 0' }}>4.8 / 5.0</div>
          <div style={{ fontSize: 11, color: 'var(--success)' }}>Top 5% across platform</div>
        </Card>
        <Card>
          <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Weekly Active Enrollments</div>
          <div style={{ fontSize: 24, fontWeight: 750, color: 'var(--text-1)', margin: '8px 0' }}>1,140</div>
          <div style={{ fontSize: 11, color: 'var(--text-4)' }}>Stable engagement</div>
        </Card>
      </div>
    </div>
  )
}

export function CollegeDepartments() {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'Computer Science', head: 'Dr. Priya Sharma', programs: 8, students: 1240, courses: 68 },
    { id: 2, name: 'Artificial Intelligence', head: 'Dr. Ananya Singh', programs: 6, students: 980, courses: 54 },
    { id: 3, name: 'Mechanical Engineering', head: 'Prof. Ramesh Kumar', programs: 5, students: 840, courses: 46 },
    { id: 4, name: 'Digital Media', head: 'Dr. Devrath Menon', programs: 4, students: 620, courses: 38 },
  ])

  const [name, setName] = useState('')
  const [head, setHead] = useState('')
  const [programs, setPrograms] = useState(4)
  const [students, setStudents] = useState(120)
  const [courses, setCourses] = useState(15)
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !head) return
    setDepartments([
      ...departments,
      {
        id: Date.now(),
        name,
        head,
        programs: Number(programs),
        students: Number(students),
        courses: Number(courses),
      }
    ])
    setName('')
    setHead('')
    setShowForm(false)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button 
          onClick={() => setShowForm(!showForm)} 
          style={{ padding: '8px 16px', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
        >
          <Plus size={14} /> {showForm ? 'Cancel' : 'Create Department'}
        </button>
      </div>

      {showForm && (
        <Card>
          <SectionHeader title="Create New Department" subtitle="Establish a new department within the college structure" />
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Department Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  placeholder="e.g. Aerospace Engineering" 
                  required 
                  style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }} 
                />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Department Head (HOD)</label>
                <input 
                  type="text" 
                  value={head} 
                  onChange={e => setHead(e.target.value)} 
                  placeholder="HOD Full Name" 
                  required 
                  style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }} 
                />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Offered Programs</label>
                <input 
                  type="number" 
                  value={programs} 
                  onChange={e => setPrograms(e.target.value)} 
                  required 
                  style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }} 
                />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Initial Student Count</label>
                <input 
                  type="number" 
                  value={students} 
                  onChange={e => setStudents(e.target.value)} 
                  required 
                  style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }} 
                />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Initial Courses Catalog</label>
                <input 
                  type="number" 
                  value={courses} 
                  onChange={e => setCourses(e.target.value)} 
                  required 
                  style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }} 
                />
              </div>
            </div>
            <button type="submit" style={{ alignSelf: 'flex-end', padding: '8px 16px', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
              Add Department
            </button>
          </form>
        </Card>
      )}

      <Card>
        <SectionHeader title="Active Departments" subtitle="Registered departments within this collegiate branch" />
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Department</th>
              <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>HOD / Dean</th>
              <th style={{ padding: 10, textAlign: 'center', fontSize: 11, color: 'var(--text-3)' }}>Programs</th>
              <th style={{ padding: 10, textAlign: 'center', fontSize: 11, color: 'var(--text-3)' }}>Courses</th>
              <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Students</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((d, i) => (
              <tr key={d.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: 12, fontSize: 12, fontWeight: 600 }}>{d.name}</td>
                <td style={{ padding: 12, fontSize: 12 }}>{d.head}</td>
                <td style={{ padding: 12, textAlign: 'center', fontSize: 12 }}>{d.programs}</td>
                <td style={{ padding: 12, textAlign: 'center', fontSize: 12 }}>{d.courses}</td>
                <td style={{ padding: 12, textAlign: 'right', fontSize: 12, fontFamily: 'monospace' }}>{d.students.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export function CollegeFaculty() {
  const facultyList = [
    { name: 'Dr. Priya Sharma', email: 'priya.sharma@siu.org', dept: 'CS', courses: 4 },
    { name: 'Dr. Kavita Sharma', email: 'kavita.sharma@siu.org', dept: 'CS', courses: 2 },
    { name: 'Dr. Ananya Singh', email: 'ananya.singh@siu.org', dept: 'Artificial Intelligence', courses: 3 },
    { name: 'Prof. Ramesh Kumar', email: 'ramesh.kumar@siu.org', dept: 'Mechanical Engineering', courses: 2 },
  ]
  return (
    <Card>
      <SectionHeader title="Faculty Roster" subtitle="Academic instructors active in this college" />
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

export function CollegeStudents() {
  const students = [
    { name: 'Arjun Kapoor', email: 'arjun@siu.org', dept: 'CS', standing: 'Sophomore' },
    { name: 'Bhavya Trivedi', email: 'bhavya@siu.org', dept: 'AI', standing: 'Junior' },
    { name: 'Devansh Mehta', email: 'devansh@siu.org', dept: 'ME', standing: 'Senior' }
  ]
  return (
    <Card>
      <SectionHeader title="Student Directory" subtitle="Roster of students enrolled in this college branch" />
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
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12 }}>{s.standing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

export function CollegeReports() {
  return (
    <Card>
      <SectionHeader title="Official Reports Download Panel" subtitle="Generate college-wide statistics PDFs" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: 10 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>College Attendance Overview - Q2 2026</div>
            <div style={{ fontSize: 10, color: 'var(--text-4)' }}>PDF · 1.4 MB</div>
          </div>
          <button style={{ padding: '6px 12px', background: 'var(--bg-2)', border: 'none', borderRadius: 6, fontSize: 11, cursor: 'pointer' }}>Download</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>Collegiate Enrollment Registration Numbers</div>
            <div style={{ fontSize: 10, color: 'var(--text-4)' }}>PDF · 1.2 MB</div>
          </div>
          <button style={{ padding: '6px 12px', background: 'var(--bg-2)', border: 'none', borderRadius: 6, fontSize: 11, cursor: 'pointer' }}>Download</button>
        </div>
      </div>
    </Card>
  )
}

export function CollegeNotifications() {
  const [headline, setHeadline] = useState('')
  const [body, setBody] = useState('')
  const [targetType, setTargetType] = useState('all-depts') // all-depts, selected-depts, year-sem
  
  const [selectedDepts, setSelectedDepts] = useState([])
  const [selectedYears, setSelectedYears] = useState([])
  const [selectedSems, setSelectedSems] = useState([])
  const [audience, setAudience] = useState('all') // all, student, faculty

  const [history, setHistory] = useState([
    { id: 1, title: 'Final Exam Scheduling Fall 2026', target: 'All Departments (All Users)', date: '3 days ago', recipients: 2840, status: 'Sent' },
    { id: 2, title: 'Engineering Tech Fest Volunteers Call', target: 'CS, EE Departments (Students Only)', date: '1 week ago', recipients: 1040, status: 'Sent' },
    { id: 3, title: 'Semester Syllabus Verification Request', target: 'All Departments (Faculty Only)', date: '2 weeks ago', recipients: 184, status: 'Sent' },
  ])

  const deptsList = ['CS & Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering']
  const yearsList = ['Year 1', 'Year 2', 'Year 3', 'Year 4']
  const semsList = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8']

  const handleToggleDept = (dept) => {
    setSelectedDepts(prev => prev.includes(dept) ? prev.filter(d => d !== dept) : [...prev, dept])
  }

  const handleToggleYear = (year) => {
    setSelectedYears(prev => prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year])
  }

  const handleToggleSem = (sem) => {
    setSelectedSems(prev => prev.includes(sem) ? prev.filter(s => s !== sem) : [...prev, sem])
  }

  const estimateRecipients = () => {
    let base = 2840 // total engineering college size
    if (targetType === 'selected-depts') {
      base = selectedDepts.length * 700
    } else if (targetType === 'year-sem') {
      const yearFactor = selectedYears.length > 0 ? selectedYears.length / 4 : 1
      const semFactor = selectedSems.length > 0 ? selectedSems.length / 8 : 1
      base = Math.round(base * yearFactor * semFactor)
    }

    if (audience === 'faculty') return Math.round(base * 0.06)
    if (audience === 'student') return Math.round(base * 0.94)
    return base
  }

  const handleSend = (e) => {
    e.preventDefault()
    if (!headline || !body) return

    let targetDesc = ''
    if (targetType === 'all-depts') targetDesc = 'All Departments'
    else if (targetType === 'selected-depts') targetDesc = `Depts: ${selectedDepts.join(', ')}`
    else {
      targetDesc = `Targeted: ${selectedYears.join(', ')} | ${selectedSems.join(', ')}`
    }

    targetDesc += ` (${audience === 'all' ? 'All Users' : audience === 'student' ? 'Students Only' : 'Faculty Only'})`

    const newLog = {
      id: Date.now(),
      title: headline,
      target: targetDesc,
      date: 'Today, Just Now',
      recipients: estimateRecipients(),
      status: 'Sent'
    }

    setHistory([newLog, ...history])
    setHeadline('')
    setBody('')
    setSelectedDepts([])
    setSelectedYears([])
    setSelectedSems([])
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Card>
        <SectionHeader title="Send Announcements Board" subtitle="Draft and target broadcasts to departments or cohorts within the college" />
        <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Notification Headline</label>
                <input 
                  type="text" 
                  value={headline} 
                  onChange={e => setHeadline(e.target.value)}
                  placeholder="e.g. Schedule Update, Exam Announcement..." 
                  required
                  style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)', fontSize: 12 }} 
                />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Announcement Body Details</label>
                <textarea 
                  value={body} 
                  onChange={e => setBody(e.target.value)}
                  placeholder="Draft announcement details..." 
                  required
                  style={{ width: '100%', height: 120, padding: 8, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)', fontFamily: 'inherit', resize: 'none', fontSize: 12 }} 
                />
              </div>
            </div>

            {/* Right Column: Targeting */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, borderLeft: '1px solid var(--border)', paddingLeft: 16 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Target Group Category</label>
                <select 
                  value={targetType} 
                  onChange={e => setTargetType(e.target.value)}
                  style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)', fontSize: 12 }}
                >
                  <option value="all-depts">All College Departments</option>
                  <option value="selected-depts">Selected Departments Only</option>
                  <option value="year-sem">Year-wise / Semester-wise</option>
                </select>
              </div>

              {/* Dynamic selectors */}
              {targetType === 'selected-depts' && (
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Select Departments</label>
                  <div style={{ maxHeight: 100, overflowY: 'auto', border: '1px solid var(--border)', borderRadius: 8, padding: 8, display: 'flex', flexDirection: 'column', gap: 6, background: 'var(--surface-2)' }}>
                    {deptsList.map(d => (
                      <label key={d} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, cursor: 'pointer' }}>
                        <input 
                          type="checkbox" 
                          checked={selectedDepts.includes(d)}
                          onChange={() => handleToggleDept(d)}
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
                          <input 
                            type="checkbox" 
                            checked={selectedYears.includes(y)}
                            onChange={() => handleToggleYear(y)}
                          />
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
                          <input 
                            type="checkbox" 
                            checked={selectedSems.includes(s)}
                            onChange={() => handleToggleSem(s)}
                          />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Target Audience User Role</label>
                <select 
                  value={audience} 
                  onChange={e => setAudience(e.target.value)}
                  style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)', fontSize: 12 }}
                >
                  <option value="all">All (Students & Faculty)</option>
                  <option value="student">Students Only</option>
                  <option value="faculty">Faculty Members Only</option>
                </select>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: 'var(--text-3)' }}>Estimated recipients count: <strong style={{ color: 'var(--text-1)' }}>{estimateRecipients().toLocaleString()}</strong> users</span>
            <button type="submit" style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
              <Send size={12} /> Broadcast Message
            </button>
          </div>
        </form>
      </Card>

      {/* Dispatch History Log */}
      <Card>
        <SectionHeader title="College Dispatch Log" subtitle="History of sent announcements from this college dashboard" />
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-2)' }}>
                <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Announced Message</th>
                <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Target Filter</th>
                <th style={{ padding: 10, textAlign: 'center', fontSize: 11, color: 'var(--text-3)' }}>Estimated Recips</th>
                <th style={{ padding: 10, textAlign: 'center', fontSize: 11, color: 'var(--text-3)' }}>Date Sent</th>
                <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map(h => (
                <tr key={h.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: 12, fontSize: 12, fontWeight: 600 }}>{h.title}</td>
                  <td style={{ padding: 12, fontSize: 12, color: 'var(--text-3)' }}>{h.target}</td>
                  <td style={{ padding: 12, textAlign: 'center', fontSize: 12, fontFamily: 'monospace' }}>{h.recipients.toLocaleString()}</td>
                  <td style={{ padding: 12, textAlign: 'center', fontSize: 12, color: 'var(--text-3)' }}>{h.date}</td>
                  <td style={{ padding: 12, textAlign: 'right' }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--success)', background: 'var(--success-muted)', padding: '2px 6px', borderRadius: 4 }}>{h.status}</span>
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

export function CollegeSettings() {
  return (
    <Card>
      <SectionHeader title="Collegiate Branch Custom Configs" subtitle="Update basic labels and details" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Dean / Director Name</label>
          <input type="text" defaultValue="Dr. Anantha Chandrakasan" style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8 }} />
        </div>
        <div>
          <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Preferred Accent Theme (Collegiate Hex Override)</label>
          <input type="text" defaultValue="#8B5CF6" style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8 }} />
        </div>
      </div>
    </Card>
  )
}

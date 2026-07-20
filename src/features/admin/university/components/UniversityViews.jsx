import { useState } from 'react'
import {
  Building2, Users, GraduationCap, Building, FileCheck, CalendarDays, Upload, Settings, Plus, Send, Bell
} from 'lucide-react'
import { Card, SectionHeader } from '../../../../components/ui/UI'

export function UniAnalytics() {
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

export function UniStudents() {
  const students = [
    { name: 'Anjali Sharma', email: 'anjali@siu.org', dept: 'CS', year: 'Year 2' },
    { name: 'Bharat Jain', email: 'bharat@siu.org', dept: 'Digital Media', year: 'Year 3' },
    { name: 'Chetan Bhagat', email: 'chetan@siu.org', dept: 'Business', year: 'Year 1' }
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

export function UniFaculty() {
  const facultyList = [
    { name: 'Dr. Aisha Patel', email: 'aisha@siu.org', dept: 'CS', courses: 2 },
    { name: 'Prof. Suresh Gopi', email: 'suresh@siu.org', dept: 'CS', courses: 3 },
    { name: 'Dr. Arun Kumar', email: 'arun@siu.org', dept: 'Data Science', courses: 2 }
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

export function UniDepartments() {
  const depts = [
    { name: 'Computer Science', head: 'Dr. Aisha Patel', programs: 8, students: 1240 },
    { name: 'Mechanical Engineering', head: 'Prof. Suresh Gopi', programs: 6, students: 980 },
    { name: 'Digital Media', head: 'Dr. Arun Kumar', programs: 4, students: 480 }
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

export function UniContent() {
  return (
    <Card>
      <SectionHeader title="Academic Queue Details" subtitle="Full breakdown of materials awaiting university approval" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>No additional files waiting in university-wide queue right now. You can check the dashboard panel for immediate actions.</p>
    </Card>
  )
}

export function UniCalendar() {
  return (
    <Card>
      <SectionHeader title="Academic Calendar Schedules" subtitle="View campus timetable timeline" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>All academic sessions, holiday marks, and quarter schedules are configured correctly. Check your dashboard side panel calendar widget for visual day indicators.</p>
    </Card>
  )
}

export function UniImport() {
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

export function UniReports() {
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

export function UniNotifications() {
  const [headline, setHeadline] = useState('')
  const [body, setBody] = useState('')
  const [targetType, setTargetType] = useState('all-colleges') // all-colleges, selected-colleges, departments, year-sem
  
  const [selectedColleges, setSelectedColleges] = useState([])
  const [selectedDepts, setSelectedDepts] = useState([])
  const [selectedYears, setSelectedYears] = useState([])
  const [selectedSems, setSelectedSems] = useState([])
  const [audience, setAudience] = useState('all') // all, student, faculty

  const [history, setHistory] = useState([
    { id: 1, title: 'Fall 2026 Course Registration Notice', target: 'All Colleges (All Users)', date: '2 days ago', recipients: 11000, status: 'Sent' },
    { id: 2, title: 'Placement Drive pre-registration CS & EE', target: 'CS, EE Depts (Students Only)', date: '5 days ago', recipients: 1840, status: 'Sent' },
    { id: 3, title: 'Annual Research Grant Applications', target: 'All Colleges (Faculty Only)', date: '1 week ago', recipients: 548, status: 'Sent' },
  ])

  const collegesList = [
    { code: 'TECH', name: 'School of Technology & AI' },
    { code: 'MFG', name: 'School of Advanced Manufacturing' },
    { code: 'BIZ', name: 'School of Business' },
    { code: 'MEDIA', name: 'School of Nove Media' }
  ]

  const deptsList = ['CS', 'AI', 'ME', 'Robotics', 'Business Admin', 'Digital Media']
  const yearsList = ['Year 1', 'Year 2', 'Year 3', 'Year 4']
  const semsList = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8']

  const handleToggleCollege = (code) => {
    setSelectedColleges(prev => prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code])
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

  const estimateRecipients = () => {
    let base = 11000 // total university size
    if (targetType === 'selected-colleges') {
      base = selectedColleges.length * 2750
    } else if (targetType === 'departments') {
      base = selectedDepts.length * 916
    } else if (targetType === 'year-sem') {
      const yearFactor = selectedYears.length > 0 ? selectedYears.length / 4 : 1
      const semFactor = selectedSems.length > 0 ? selectedSems.length / 8 : 1
      base = Math.round(base * yearFactor * semFactor)
    }

    if (audience === 'faculty') return Math.round(base * 0.08)
    if (audience === 'student') return Math.round(base * 0.92)
    return base
  }

  const handleSend = (e) => {
    e.preventDefault()
    if (!headline || !body) return

    let targetDesc = ''
    if (targetType === 'all-colleges') targetDesc = 'All Colleges'
    else if (targetType === 'selected-colleges') targetDesc = `Colleges: ${selectedColleges.join(', ')}`
    else if (targetType === 'departments') targetDesc = `Depts: ${selectedDepts.join(', ')}`
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
    setSelectedColleges([])
    setSelectedDepts([])
    setSelectedYears([])
    setSelectedSems([])
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Card>
        <SectionHeader title="Send Announcements Board" subtitle="Target broadcasts to specific divisions, cohorts, or semesters across the campus" />
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
                  placeholder="e.g. Schedule Update, Campus Announcement..." 
                  required
                  style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)', fontSize: 12 }} 
                />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Announcement Body</label>
                <textarea 
                  value={body} 
                  onChange={e => setBody(e.target.value)}
                  placeholder="Draft announcement description..." 
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
                  <option value="all-colleges">All Colleges</option>
                  <option value="selected-colleges">Selected Colleges Only</option>
                  <option value="departments">Specific Departments</option>
                  <option value="year-sem">Year-wise / Semester-wise</option>
                </select>
              </div>

              {/* Dynamic selectors */}
              {targetType === 'selected-colleges' && (
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Select Colleges</label>
                  <div style={{ maxHeight: 100, overflowY: 'auto', border: '1px solid var(--border)', borderRadius: 8, padding: 8, display: 'flex', flexDirection: 'column', gap: 6, background: 'var(--surface-2)' }}>
                    {collegesList.map(c => (
                      <label key={c.code} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, cursor: 'pointer' }}>
                        <input 
                          type="checkbox" 
                          checked={selectedColleges.includes(c.code)}
                          onChange={() => handleToggleCollege(c.code)}
                        />
                        <span>{c.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {targetType === 'departments' && (
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
                        <span>{d} Department</span>
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

      {/* Roster logs */}
      <Card>
        <SectionHeader title="Campus Dispatch Log" subtitle="History of sent announcements from this tenant dashboard" />
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

export function UniSettings() {
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

export function UniColleges() {
  const [colleges, setColleges] = useState([
    { id: 1, name: 'School of Technology & AI', dean: 'Dr. APJ Abdul Kalam', departments: 'CS, AI', students: 3200, faculty: 150 },
    { id: 2, name: 'School of Advanced Manufacturing', dean: 'Dr. Vikram Sarabhai', departments: 'ME, Robotics', students: 1500, faculty: 80 },
    { id: 3, name: 'School of Business', dean: 'Dr. Homi Bhabha', departments: 'Business Admin', students: 4100, faculty: 210 },
    { id: 4, name: 'School of Nove Media', dean: 'Prof. C.V. Raman', departments: 'Digital Media', students: 2200, faculty: 120 }
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

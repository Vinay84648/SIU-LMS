import { useState } from 'react'
import { Card, SectionHeader } from '../../../../components/ui/UI'

export function DeptPrograms() {
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

export function DeptCurriculum() {
  return (
    <Card>
      <SectionHeader title="Curriculum Overview Map" subtitle="Full structure and core course trees" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Please expand semesters on the main HOD dashboard panel view to interact directly with the curriculum timeline builder.</p>
    </Card>
  )
}

export function DeptPlanner() {
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

export function DeptBatches() {
  return (
    <Card>
      <SectionHeader title="Department Batches Management" subtitle="Roster listings for current student classes" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Batches list table can be managed directly under the dashboard main page grid.</p>
    </Card>
  )
}

export function DeptCourses() {
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

export function DeptFaculty() {
  return (
    <Card>
      <SectionHeader title="Faculty Assignment Panel" subtitle="Assign courses to instructors" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Review the main HOD dashboard panel list to add rating cards or edit core profiles.</p>
    </Card>
  )
}

export function DeptStudents() {
  return (
    <Card>
      <SectionHeader title="Student Progress Tracker" subtitle="Progress overview" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Progress graphs by student cohorts are visible directly on your HOD dashboard panel.</p>
    </Card>
  )
}

export function DeptInternships() {
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

export function DeptReports() {
  return (
    <Card>
      <SectionHeader title="Department Performance Reports" subtitle="Generate GPA analysis files" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>All core performance metrics graphs are plotted correctly on your main dashboard layout.</p>
    </Card>
  )
}

export function DeptNotifications() {
  const [headline, setHeadline] = useState('')
  const [body, setBody] = useState('')
  const [selectedYears, setSelectedYears] = useState([])
  const [selectedSemesters, setSelectedSemesters] = useState([])
  const [selectedRoles, setSelectedRoles] = useState(['student'])
  const [history, setHistory] = useState([
    { id: 1, title: 'Final Exams Timetable Published', target: 'Year 4 (Sem 8)', recipients: 210, date: 'Jul 15, 2026', rate: '100%', status: 'Completed' },
  ])

  const yearsList = [
    { id: 'y1', label: '1st Year' },
    { id: 'y2', label: '2nd Year' },
    { id: 'y3', label: '3rd Year' },
    { id: 'y4', label: '4th Year' },
  ]
  const semsList = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8']
  const rolesList = [
    { id: 'student', label: 'Students' },
    { id: 'faculty', label: 'Faculty' },
  ]

  const toggleArray = (arr, val, setArr) => {
    if (arr.includes(val)) setArr(arr.filter(v => v !== val))
    else setArr([...arr, val])
  }

  const estimateRecipients = () => {
    let base = 250
    let factor = selectedYears.length || 1
    if (selectedSemesters.length > 0) factor = selectedSemesters.length
    return base * factor * (selectedRoles.length / 2)
  }

  const handleBroadcast = (e) => {
    e.preventDefault()
    if (!headline || !body) return
    let targetSummary = 'Dept-wide'
    if (selectedYears.length > 0) targetSummary = `Years: ${selectedYears.join(', ')}`
    if (selectedSemesters.length > 0) targetSummary += ` Sems: ${selectedSemesters.join(', ')}`
    targetSummary += ` (${selectedRoles.join(', ')})`

    const newBroadcast = {
      id: Date.now(),
      title: headline,
      target: targetSummary,
      date: 'Just Now',
      recipients: estimateRecipients(),
      status: 'Completed',
      rate: '100%'
    }
    setHistory([newBroadcast, ...history])
    setHeadline('')
    setBody('')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Card>
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px', color: 'var(--text-1)' }}>Department Notifications Dispatch</h2>
          <p style={{ fontSize: 13, color: 'var(--text-3)', margin: 0 }}>Send announcements specifically targeted to students or faculty in certain years and semesters.</p>
        </div>
        
        <form onSubmit={handleBroadcast} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Headline Subject</label>
                <input type="text" value={headline} onChange={e => setHeadline(e.target.value)} required style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Message Body</label>
                <textarea value={body} onChange={e => setBody(e.target.value)} required style={{ width: '100%', height: 120, padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)', resize: 'none' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, borderLeft: '1px solid var(--border)', paddingLeft: 16 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Target Year(s)</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                  {yearsList.map(y => (
                    <label key={y.id} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, cursor: 'pointer' }}>
                      <input type="checkbox" checked={selectedYears.includes(y.label)} onChange={() => toggleArray(selectedYears, y.label, setSelectedYears)} />
                      <span>{y.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Target Semester(s)</label>
                <div style={{ maxHeight: 90, overflowY: 'auto', border: '1px solid var(--border)', borderRadius: 8, padding: 8, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, background: 'var(--surface-2)' }}>
                  {semsList.map(s => (
                    <label key={s} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, cursor: 'pointer' }}>
                      <input type="checkbox" checked={selectedSemesters.includes(s)} onChange={() => toggleArray(selectedSemesters, s, setSelectedSemesters)} />
                      <span>{s}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Audience</label>
                <div style={{ display: 'flex', gap: 12 }}>
                  {rolesList.map(r => (
                    <label key={r.id} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, cursor: 'pointer' }}>
                      <input type="checkbox" checked={selectedRoles.includes(r.id)} onChange={() => toggleArray(selectedRoles, r.id, setSelectedRoles)} />
                      <span>{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" style={{ padding: '8px 16px', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
              Dispatch Notification
            </button>
          </div>
        </form>
      </Card>
      
      <Card>
        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: 'var(--text-1)' }}>Dispatch History</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Subject</th>
              <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Target</th>
              <th style={{ padding: 10, textAlign: 'center', fontSize: 11, color: 'var(--text-3)' }}>Recipients</th>
              <th style={{ padding: 10, textAlign: 'center', fontSize: 11, color: 'var(--text-3)' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: 12, fontSize: 12, fontWeight: 600 }}>{item.title}</td>
                <td style={{ padding: 12, fontSize: 12, color: 'var(--text-3)' }}>{item.target}</td>
                <td style={{ padding: 12, textAlign: 'center', fontSize: 12 }}>{item.recipients}</td>
                <td style={{ padding: 12, textAlign: 'center' }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--success)', background: 'var(--success-muted)', padding: '2px 6px', borderRadius: 4 }}>{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

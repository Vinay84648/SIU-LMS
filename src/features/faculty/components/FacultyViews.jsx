import { useState } from 'react'
import { Card, SectionHeader } from '../../../components/ui/UI'

export function FacultyCourses() {
  const courses = [
    { code: 'CS101', title: 'Intro to Computer Science', students: 120, schedule: 'Mon, Wed 10:00 AM' },
    { code: 'CS201', title: 'Data Structures & Algorithms', students: 85, schedule: 'Tue, Thu 2:00 PM' }
  ]
  return (
    <Card>
      <SectionHeader title="Assigned Courses" subtitle="Active academic catalogue segments you instruct" />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Code</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Course Title</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Students</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{c.code}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{c.title}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{c.students}</td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12 }}>{c.schedule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

export function FacultyAssignments() {
  const assignments = [
    { title: 'Homework 1: Recursion Analysis', course: 'CS201', submitted: '81 / 85', due: 'Jul 24, 2026' },
    { title: 'Project Milestone 1: ER modeling', course: 'CS101', submitted: '112 / 120', due: 'Jul 28, 2026' }
  ]
  return (
    <Card>
      <SectionHeader title="Course Assignments" subtitle="Configure class homework evaluation scopes" />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Assignment</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Course</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Submissions</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{a.title}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{a.course}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{a.submitted}</td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12 }}>{a.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

export function FacultySchedule() {
  return (
    <Card>
      <SectionHeader title="Teaching Class Calendar" subtitle="Assigned lecture slots schedule" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Timetables are synced from the department administration panel. Direct events can be checked in your dashboard side panels.</p>
    </Card>
  )
}

export function FacultyReports() {
  return (
    <Card>
      <SectionHeader title="Grades Analysis Exports" subtitle="Download student performance spreadsheets" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Grading curves, GPA reports, and exports can be generated directly inside your active course sections panel.</p>
    </Card>
  )
}

export function FacultySettings() {
  return (
    <Card>
      <SectionHeader title="Consultation & Profile Settings" subtitle="Configure office hours and notifications" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Preferred Office hours</label>
          <input type="text" defaultValue="Tue, Thu 4:00 PM - 5:30 PM" style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8 }} />
        </div>
      </div>
    </Card>
  )
}

export function FacultyNotifications() {
  const [headline, setHeadline] = useState('')
  const [body, setBody] = useState('')
  const [selectedCourses, setSelectedCourses] = useState([])
  const [history, setHistory] = useState([
    { id: 1, title: 'CS201 Midterm Moved to Friday', target: 'CS201', date: 'Yesterday', recipients: 85, status: 'Sent' },
  ])

  const courses = ['CS101 (Intro to Computer Science)', 'CS201 (Data Structures & Algorithms)']

  const toggleCourse = (course) => {
    if (selectedCourses.includes(course)) setSelectedCourses(selectedCourses.filter(c => c !== course))
    else setSelectedCourses([...selectedCourses, course])
  }

  const handleBroadcast = (e) => {
    e.preventDefault()
    if (!headline || !body || selectedCourses.length === 0) return

    const newBroadcast = {
      id: Date.now(),
      title: headline,
      target: selectedCourses.map(c => c.split(' ')[0]).join(', '),
      date: 'Just Now',
      recipients: selectedCourses.length * 100, // mock estimate
      status: 'Sent'
    }

    setHistory([newBroadcast, ...history])
    setHeadline('')
    setBody('')
    setSelectedCourses([])
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Card>
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px', color: 'var(--text-1)' }}>Class Announcements</h2>
          <p style={{ fontSize: 13, color: 'var(--text-3)', margin: 0 }}>Send announcements and updates to students enrolled in your active courses.</p>
        </div>
        
        <form onSubmit={handleBroadcast} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Announcement Title</label>
                <input type="text" value={headline} onChange={e => setHeadline(e.target.value)} required style={{ width: '100%', padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)' }} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Message Details</label>
                <textarea value={body} onChange={e => setBody(e.target.value)} required style={{ width: '100%', height: 100, padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 8, background: 'var(--surface-2)', color: 'var(--text-1)', resize: 'none' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, borderLeft: '1px solid var(--border)', paddingLeft: 16 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Select Target Course(s)</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 150, overflowY: 'auto', border: '1px solid var(--border)', borderRadius: 8, padding: 8, background: 'var(--surface-2)' }}>
                  {courses.map(c => (
                    <label key={c} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, cursor: 'pointer' }}>
                      <input type="checkbox" checked={selectedCourses.includes(c)} onChange={() => toggleCourse(c)} />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
                {selectedCourses.length === 0 && <p style={{ fontSize: 10, color: 'var(--danger)', marginTop: 4 }}>Select at least one course</p>}
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" disabled={selectedCourses.length === 0} style={{ padding: '8px 16px', background: 'var(--primary)', color: 'var(--primary-fg)', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: selectedCourses.length === 0 ? 'not-allowed' : 'pointer', opacity: selectedCourses.length === 0 ? 0.5 : 1 }}>
              Send Announcement
            </button>
          </div>
        </form>
      </Card>
      
      <Card>
        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: 'var(--text-1)' }}>Past Announcements</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Subject</th>
              <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Course Target</th>
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

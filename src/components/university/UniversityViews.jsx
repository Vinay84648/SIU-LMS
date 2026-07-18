import { useState } from 'react'
import {
  Building2, Users, GraduationCap, Building, FileCheck, CalendarDays, Upload, Settings, Plus
} from 'lucide-react'
import { Card, SectionHeader } from '../common/UI'

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

export function UniFaculty() {
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

export function UniDepartments() {
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

import { Card, SectionHeader } from '../common/UI'

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

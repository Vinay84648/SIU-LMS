import { Card, SectionHeader } from '../common/UI'

export function StudentCourses() {
  const myCourses = [
    { code: 'CS101', title: 'Intro to Computer Science', credits: 4, type: 'Core' },
    { code: 'EE204', title: 'Digital Systems Logic', credits: 4, type: 'Elective' }
  ]
  return (
    <Card>
      <SectionHeader title="My Course Subscriptions" subtitle="Active academic catalogue segments you are enrolled in" />
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
          {myCourses.map((c, i) => (
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

export function StudentAssignments() {
  const studentAssignments = [
    { title: 'Homework 1: Logic Gates', course: 'EE204', status: 'Graded (A)', score: '92/100' },
    { title: 'Project Milestone 1: ER mapping', course: 'CS101', status: 'Submitted', score: 'Pending' }
  ]
  return (
    <Card>
      <SectionHeader title="Assignments Due" subtitle="Course evaluations and grading status logs" />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Assignment</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Course</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Status</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Grade</th>
          </tr>
        </thead>
        <tbody>
          {studentAssignments.map((a, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{a.title}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{a.course}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{a.status}</td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12, fontWeight: 700 }}>{a.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

export function StudentSchedule() {
  return (
    <Card>
      <SectionHeader title="My Timetable Calendar" subtitle="Lecture timings timeline schedule" />
      <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Weekly lecture slots are synced dynamically from registration rosters. Refer to your calendar widget on the dashboard main page.</p>
    </Card>
  )
}

export function StudentTranscript() {
  const grades = [
    { semester: 'Semester 1', GPA: '3.84', status: 'Completed' },
    { semester: 'Semester 2', GPA: '3.91', status: 'Completed' }
  ]
  return (
    <Card>
      <SectionHeader title="Academic Transcript GPA" subtitle="Official semester performance summaries" />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>Semester</th>
            <th style={{ padding: 10, textAlign: 'left', fontSize: 11, color: 'var(--text-3)' }}>GPA</th>
            <th style={{ padding: 10, textAlign: 'right', fontSize: 11, color: 'var(--text-3)' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((g, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: 10, fontSize: 12, fontWeight: 600 }}>{g.semester}</td>
              <td style={{ padding: 10, fontSize: 12 }}>{g.GPA}</td>
              <td style={{ padding: 10, textAlign: 'right', fontSize: 12, color: 'var(--success)' }}>{g.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

export function StudentSettings() {
  return (
    <Card>
      <SectionHeader title="Profile & Notification Configs" subtitle="Update preferred contact formats" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={{ fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 4 }}>Registered Email address</label>
          <input type="text" readOnly defaultValue="student492@stanford.edu" style={{ width: '100%', padding: 8, border: '1px solid var(--border)', borderRadius: 8, background: 'var(--bg-2)', color: 'var(--text-3)' }} />
        </div>
      </div>
    </Card>
  )
}

import { Card, SectionHeader } from '../common/UI'

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

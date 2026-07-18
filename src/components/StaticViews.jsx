import RoleAccessControl from './common/RoleAccessControl'
import {
  SuperAnalytics, SuperMap, SuperUniversities, SuperUsers, SuperEmail,
  SuperSecurity, SuperFlags, SuperAudit, SuperBranding, SuperSettings
} from './super/SuperViews'
import {
  UniAnalytics, UniStudents, UniFaculty, UniDepartments, UniContent,
  UniCalendar, UniImport, UniReports, UniNotifications, UniSettings, UniColleges
} from './university/UniversityViews'
import {
  DeptPrograms, DeptCurriculum, DeptPlanner, DeptBatches, DeptCourses,
  DeptFaculty, DeptStudents, DeptInternships, DeptReports
} from './department/DepartmentViews'
import {
  FacultyCourses, FacultyAssignments, FacultySchedule, FacultyReports, FacultySettings
} from './faculty/FacultyViews'
import {
  StudentCourses, StudentAssignments, StudentSchedule, StudentTranscript, StudentSettings
} from './student/StudentViews'

export default function StaticViews({ role, tab }) {
  const viewMap = {
    super: {
      analytics: <SuperAnalytics />,
      map: <SuperMap />,
      universities: <SuperUniversities />,
      users: <SuperUsers />,
      email: <SuperEmail />,
      security: <SuperSecurity />,
      flags: <SuperFlags />,
      audit: <SuperAudit />,
      branding: <SuperBranding />,
      settings: <SuperSettings />,
      roleAccess: <RoleAccessControl currentRole={role} />,
    },
    university: {
      analytics: <UniAnalytics />,
      students: <UniStudents />,
      faculty: <UniFaculty />,
      roleAccess: <RoleAccessControl currentRole={role} />,
      colleges: <UniColleges />,
      departments: <UniDepartments />,
      content: <UniContent />,
      calendar: <UniCalendar />,
      import: <UniImport />,
      reports: <UniReports />,
      notifications: <UniNotifications />,
      settings: <UniSettings />,
    },
    department: {
      programs: <DeptPrograms />,
      curriculum: <DeptCurriculum />,
      planner: <DeptPlanner />,
      batches: <DeptBatches />,
      courses: <DeptCourses />,
      faculty: <DeptFaculty />,
      students: <DeptStudents />,
      roleAccess: <RoleAccessControl currentRole={role} />,
      internships: <DeptInternships />,
      reports: <DeptReports />,
    },
    faculty: {
      courses: <FacultyCourses />,
      assignments: <FacultyAssignments />,
      schedule: <FacultySchedule />,
      reports: <FacultyReports />,
      settings: <FacultySettings />,
    },
    student: {
      courses: <StudentCourses />,
      assignments: <StudentAssignments />,
      schedule: <StudentSchedule />,
      transcript: <StudentTranscript />,
      settings: <StudentSettings />,
    },
  }

  const roleViews = viewMap[role] || {}
  const targetView = roleViews[tab]

  if (!targetView) {
    return (
      <div style={{ padding: 20, textAlign: 'center', color: 'var(--text-3)' }}>
        <h3>Component Not Configured</h3>
        <p style={{ fontSize: 13 }}>The requested view for <strong>{role}</strong> / <strong>{tab}</strong> is not configured yet.</p>
      </div>
    )
  }

  return targetView
}

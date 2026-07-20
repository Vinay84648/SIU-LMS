import { createHashRouter } from 'react-router-dom'
import { PublicLayout } from './PublicLayout'
import { PrivateLayout } from './PrivateLayout'
import { RoleGuard } from '../features/auth/RoleGuard'

// Auth pages
import { LoginPage } from '../features/auth/LoginPage'
import { OtpPage } from '../features/auth/OtpPage'

import { DashboardRouter, SmartView, SmartRoleAccess } from './RouteHelpers'

// UI Components for Super Admin
import {
  SuperAnalytics, SuperMap, SuperUniversities, SuperUsers, SuperEmail,
  SuperSecurity, SuperFlags, SuperAudit, SuperBranding, SuperSettings, SuperColleges, SuperNotifications
} from '../features/admin/super/components/SuperViews'

// UI Components for University Admin
import {
  UniAnalytics, UniStudents, UniFaculty, UniDepartments, UniContent,
  UniCalendar, UniImport, UniReports, UniNotifications, UniSettings, UniColleges
} from '../features/admin/university/components/UniversityViews'

// UI Components for College Admin
import {
  CollegeAnalytics, CollegeDepartments, CollegeFaculty, CollegeStudents, CollegeReports, CollegeNotifications, CollegeSettings
} from '../features/admin/college/components/CollegeViews'

// UI Components for Department Admin
import {
  DeptPrograms, DeptCurriculum, DeptPlanner, DeptBatches, DeptCourses,
  DeptFaculty, DeptStudents, DeptInternships, DeptReports, DeptNotifications
} from '../features/admin/department/components/DepartmentViews'

// UI Components for Faculty
import {
  FacultyCourses, FacultyAssignments, FacultySchedule, FacultyReports, FacultySettings, FacultyNotifications
} from '../features/faculty/components/FacultyViews'

// UI Components for Student
import {
  StudentCourses, StudentAssignments, StudentSchedule, StudentTranscript, StudentSettings
} from '../features/student/components/StudentViews'


export const router = createHashRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/login/verify', element: <OtpPage /> },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      { path: '/', element: <DashboardRouter /> },

      { path: 'analytics', element: <SmartView superView={<SuperAnalytics/>} uniView={<UniAnalytics/>} collegeView={<CollegeAnalytics/>} /> },
      { path: 'map', element: <SmartView superView={<SuperMap/>} /> },
      
      { path: 'courses', element: <SmartView deptView={<DeptCourses/>} facultyView={<FacultyCourses/>} studentView={<StudentCourses/>} /> },
      { path: 'timetable', element: <SmartView facultyView={<FacultySchedule/>} studentView={<StudentSchedule/>} /> },
      { path: 'calendar', element: <SmartView uniView={<UniCalendar/>} collegeView={<UniCalendar/>} deptView={<DeptPlanner/>} /> },
      { path: 'notifications', element: <SmartView superView={<SuperNotifications/>} uniView={<UniNotifications/>} collegeView={<CollegeNotifications/>} deptView={<DeptNotifications/>} facultyView={<FacultyNotifications/>} /> },
      { path: 'announcements', element: <SmartView superView={<SuperNotifications/>} /> },
      
      { path: 'admin/colleges', element: <SmartView superView={<SuperColleges/>} uniView={<UniColleges/>} /> },
      { path: 'admin/universities', element: <SmartView superView={<SuperUniversities/>} /> },
      { path: 'admin/users', element: <SmartView superView={<SuperUsers/>} uniView={<UniStudents/>} collegeView={<CollegeStudents/>} deptView={<DeptStudents/>} /> },
      { path: 'admin/faculty', element: <SmartView uniView={<UniFaculty/>} collegeView={<CollegeFaculty/>} deptView={<DeptFaculty/>} /> },
      { path: 'admin/departments', element: <SmartView uniView={<UniDepartments/>} collegeView={<CollegeDepartments/>} /> },
      { path: 'admin/roles', element: <SmartRoleAccess /> },
      { path: 'admin/email', element: <SmartView superView={<SuperEmail/>} /> },
      { path: 'admin/security', element: <SmartView superView={<SuperSecurity/>} /> },
      { path: 'admin/flags', element: <SmartView superView={<SuperFlags/>} /> },
      { path: 'admin/audit-log', element: <SmartView superView={<SuperAudit/>} /> },
      { path: 'admin/branding', element: <SmartView superView={<SuperBranding/>} /> },
      { path: 'admin/settings', element: <SmartView superView={<SuperSettings/>} uniView={<UniSettings/>} collegeView={<CollegeSettings/>} facultyView={<FacultySettings/>} studentView={<StudentSettings/>} /> },
      { path: 'admin/imports', element: <SmartView uniView={<UniImport/>} collegeView={<UniImport/>} /> },
      { path: 'admin/reports', element: <SmartView uniView={<UniReports/>} collegeView={<CollegeReports/>} deptView={<DeptReports/>} facultyView={<FacultyReports/>} /> },
      
      { path: 'teach', element: <SmartView facultyView={<FacultyCourses/>} /> },
      { path: 'teach/content', element: <SmartView uniView={<UniContent/>} collegeView={<UniContent/>} /> },
      { path: 'teach/assignments', element: <SmartView facultyView={<FacultyAssignments/>} studentView={<StudentAssignments/>} /> },
      { path: 'teach/reports', element: <SmartView facultyView={<FacultyReports/>} /> },
      
      { path: 'dept-admin/programs', element: <SmartView deptView={<DeptPrograms/>} collegeView={<DeptPrograms/>} /> },
      { path: 'dept-admin/curriculum', element: <SmartView deptView={<DeptCurriculum/>} /> },
      { path: 'dept-admin/planner', element: <SmartView deptView={<DeptPlanner/>} /> },
      { path: 'dept-admin/batches', element: <SmartView deptView={<DeptBatches/>} /> },
      { path: 'dept-admin/internships', element: <SmartView deptView={<DeptInternships/>} /> },
      
      { path: 'transcript', element: <SmartView studentView={<StudentTranscript/>} /> },
      { path: 'settings', element: <SmartView facultyView={<FacultySettings/>} studentView={<StudentSettings/>} /> },
    ],
  },
  { path: '*', element: <div>Page not found</div> },
])

import { useUIStore } from '../store/uiStore'
import SuperAdminPage from '../features/admin/super/SuperAdminPage'
import UniversityAdminPage from '../features/admin/university/UniversityAdminPage'
import CollegeAdminPage from '../features/admin/college/CollegeAdminPage'
import DepartmentAdminPage from '../features/admin/department/DepartmentAdminPage'
import FacultyPage from '../features/faculty/FacultyPage'
import StudentPage from '../features/student/StudentPage'
import RoleAccessControl from '../features/admin/roles/RoleAccessControl'

export function DashboardRouter() {
  const { role } = useUIStore()
  if (role === 'super') return <SuperAdminPage />
  if (role === 'university') return <UniversityAdminPage />
  if (role === 'college') return <CollegeAdminPage />
  if (role === 'department') return <DepartmentAdminPage />
  if (role === 'faculty') return <FacultyPage />
  if (role === 'student') return <StudentPage />
  return <div>Unknown role</div>
}

export function SmartView({ superView, uniView, collegeView, deptView, facultyView, studentView }) {
  const { role } = useUIStore()
  if (role === 'super') return superView || <div>Not available for Super Admin</div>
  if (role === 'university') return uniView || <div>Not available for University Admin</div>
  if (role === 'college') return collegeView || <div>Not available for College Admin</div>
  if (role === 'department') return deptView || <div>Not available for Department Admin</div>
  if (role === 'faculty') return facultyView || <div>Not available for Faculty</div>
  if (role === 'student') return studentView || <div>Not available for Student</div>
  return null
}

export function SmartRoleAccess() {
  const { role } = useUIStore()
  return <RoleAccessControl currentRole={role} />
}

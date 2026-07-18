import { useState, useEffect, createContext, useContext } from 'react'
import Shell from './components/Shell'
import CommandPalette from './components/CommandPalette'
import SuperAdminDashboard from './components/super/SuperAdminDashboard'
import UniversityAdminDashboard from './components/university/UniversityAdminDashboard'
import DepartmentAdminDashboard from './components/department/DepartmentAdminDashboard'
import FacultyDashboard from './components/faculty/FacultyDashboard'
import StudentDashboard from './components/student/StudentDashboard'
import StaticViews from './components/StaticViews'

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} })
export const RoleContext = createContext({ role: 'super', setRole: () => {} })
export const TabContext = createContext({ activeTab: 'dashboard', setActiveTab: () => {} })

export const useTheme = () => useContext(ThemeContext)
export const useRole = () => useContext(RoleContext)
export const useTab = () => useContext(TabContext)

export default function App() {
  const [theme, setTheme] = useState('light')
  const [role, setRole] = useState('super')
  const [activeTab, setActiveTab] = useState('dashboard')
  const [cmdOpen, setCmdOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Reset current tab to dashboard when switching user roles
  useEffect(() => {
    setActiveTab('dashboard')
  }, [role])

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setCmdOpen(v => !v)
      }
      if (e.key === 'Escape') setCmdOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <RoleContext.Provider value={{ role, setRole }}>
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
          <Shell onCommandOpen={() => setCmdOpen(true)}>
            {activeTab === 'dashboard' ? (
              <>
                {role === 'super' && <SuperAdminDashboard />}
                {role === 'university' && <UniversityAdminDashboard />}
                {role === 'department' && <DepartmentAdminDashboard />}
                {role === 'faculty' && <FacultyDashboard />}
                {role === 'student' && <StudentDashboard />}
              </>
            ) : (
              <StaticViews role={role} tab={activeTab} />
            )}
          </Shell>
          {cmdOpen && <CommandPalette onClose={() => setCmdOpen(false)} />}
        </TabContext.Provider>
      </RoleContext.Provider>
    </ThemeContext.Provider>
  )
}

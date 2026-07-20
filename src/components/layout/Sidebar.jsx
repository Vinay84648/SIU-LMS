import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useUIStore } from '../../store/uiStore'
import {
  LayoutDashboard, Building2, Users, CreditCard, Mail, ShieldCheck,
  ToggleLeft, ScrollText, Settings, GraduationCap, BookOpen,
  Building, Upload, FileCheck, CalendarDays, BookMarked,
  Layers, Calendar, UserSquare2, Briefcase, LineChart,
  Search, Sun, Moon, Bell, ChevronLeft, ChevronRight,
  BarChart3, Palette, Globe, ChevronDown, X, Check,
  AlertCircle, Info, Zap, LogOut, User, HelpCircle,
  Command, ExternalLink, Sparkles, Key,
} from 'lucide-react'

const navConfig = {
  super: [
    { group: 'Overview', items: [
      { label: 'Dashboard', icon: LayoutDashboard, id: 'dashboard', path: '/' },
      { label: 'Analytics', icon: BarChart3, id: 'analytics', path: '/analytics' },
      { label: 'Global Map', icon: Globe, id: 'map', path: '/map' },
    ]},
    { group: 'Management', items: [
      { label: 'Universities', icon: Building2, id: 'universities', badge: '1', path: '/admin/universities' }, // Using existing route logic for now
      { label: 'Colleges & Affiliations', icon: Building, id: 'colleges', path: '/admin/colleges' },
      { label: 'Users & Sessions', icon: Users, id: 'users', path: '/admin/users' },
      { label: 'Role Access', icon: Key, id: 'roleAccess', path: '/admin/roles' },
    ]},
    { group: 'Platform', items: [
      { label: 'Announcements', icon: Bell, id: 'notifications', path: '/announcements' },
      { label: 'Email (SES)', icon: Mail, id: 'email', path: '/admin/email' },
      { label: 'Security', icon: ShieldCheck, id: 'security', badge: '3', path: '/admin/security' },
      { label: 'Feature Flags', icon: ToggleLeft, id: 'flags', path: '/admin/flags' },
      { label: 'Audit Logs', icon: ScrollText, id: 'audit', path: '/admin/audit-log' },
    ]},
    { group: 'Config', items: [
      { label: 'Tenant Branding', icon: Palette, id: 'branding', path: '/admin/branding' },
      { label: 'Settings', icon: Settings, id: 'settings', path: '/admin/settings' },
    ]},
  ],
  university: [
    { group: 'Overview', items: [
      { label: 'Dashboard', icon: LayoutDashboard, id: 'dashboard', path: '/' },
      { label: 'Analytics', icon: BarChart3, id: 'analytics', path: '/analytics' },
    ]},
    { group: 'People', items: [
      { label: 'Students', icon: GraduationCap, id: 'students', badge: '4,821', path: '/admin/users' },
      { label: 'Faculty', icon: UserSquare2, id: 'faculty', path: '/admin/faculty' },
      { label: 'Role Access', icon: Key, id: 'roleAccess', path: '/admin/roles' },
    ]},
    { group: 'Academic', items: [
      { label: 'Colleges', icon: Building2, id: 'colleges', path: '/admin/colleges' },
      { label: 'Departments', icon: Building, id: 'departments', path: '/admin/departments' },
      { label: 'Content Queue', icon: FileCheck, id: 'content', badge: '7', path: '/teach/content' },
      { label: 'Academic Calendar', icon: CalendarDays, id: 'calendar', path: '/calendar' },
    ]},
    { group: 'Operations', items: [
      { label: 'CSV Import', icon: Upload, id: 'import', path: '/admin/imports' },
      { label: 'Reports', icon: LineChart, id: 'reports', path: '/admin/reports' },
      { label: 'Notifications', icon: Bell, id: 'notifications', path: '/notifications' },
      { label: 'Settings', icon: Settings, id: 'settings', path: '/admin/settings' },
    ]},
  ],
  college: [
    { group: 'Overview', items: [
      { label: 'Dashboard', icon: LayoutDashboard, id: 'dashboard', path: '/' },
      { label: 'Analytics', icon: BarChart3, id: 'analytics', path: '/analytics' },
    ]},
    { group: 'Management', items: [
      { label: 'Departments', icon: Building, id: 'departments', path: '/admin/departments' },
      { label: 'Faculty Roster', icon: Users, id: 'faculty', path: '/admin/faculty' },
      { label: 'Students', icon: GraduationCap, id: 'students', path: '/admin/users' },
      { label: 'Role Access', icon: Key, id: 'roleAccess', path: '/admin/roles' },
    ]},
    { group: 'Academic', items: [
      { label: 'Programs & Courses', icon: BookOpen, id: 'programs', path: '/dept-admin/programs' },
      { label: 'Content Queue', icon: FileCheck, id: 'content', path: '/teach/content' },
      { label: 'Academic Calendar', icon: CalendarDays, id: 'calendar', path: '/calendar' },
    ]},
    { group: 'Operations', items: [
      { label: 'CSV Import', icon: Upload, id: 'import', path: '/admin/imports' },
      { label: 'Reports', icon: LineChart, id: 'reports', path: '/admin/reports' },
      { label: 'Notifications', icon: Bell, id: 'notifications', path: '/notifications' },
      { label: 'Settings', icon: Settings, id: 'settings', path: '/admin/settings' },
    ]},
  ],
  department: [
    { group: 'Overview', items: [
      { label: 'Dashboard', icon: LayoutDashboard, id: 'dashboard', path: '/' },
    ]},
    { group: 'Academic', items: [
      { label: 'Programs', icon: Layers, id: 'programs', path: '/dept-admin/programs' },
      { label: 'Curriculum', icon: BookMarked, id: 'curriculum', path: '/dept-admin/curriculum' },
      { label: 'Quarter Planner', icon: Calendar, id: 'planner', path: '/calendar' },
      { label: 'Batches', icon: GraduationCap, id: 'batches', badge: '12', path: '/dept-admin/batches' },
      { label: 'Courses', icon: BookOpen, id: 'courses', path: '/courses' },
    ]},
    { group: 'People', items: [
      { label: 'Faculty', icon: UserSquare2, id: 'faculty', path: '/admin/faculty' },
      { label: 'Students', icon: GraduationCap, id: 'students', path: '/admin/users' },
      { label: 'Role Access', icon: Key, id: 'roleAccess', path: '/admin/roles' },
      { label: 'Internships', icon: Briefcase, id: 'internships', path: '/dept-admin/internships' },
    ]},
    { group: 'Operations', items: [
      { label: 'Reports', icon: LineChart, id: 'reports', path: '/admin/reports' },
      { label: 'Notifications', icon: Bell, id: 'notifications', path: '/notifications' },
    ]},
  ],
  faculty: [
    { group: 'Overview', items: [
      { label: 'Dashboard', icon: LayoutDashboard, id: 'dashboard', path: '/' },
    ]},
    { group: 'Teaching', items: [
      { label: 'My Courses', icon: BookOpen, id: 'courses', path: '/teach' },
      { label: 'Assignments', icon: FileCheck, id: 'assignments', path: '/teach/assignments' },
      { label: 'Schedule', icon: Calendar, id: 'schedule', path: '/timetable' },
    ]},
    { group: 'Tools', items: [
      { label: 'Reports', icon: LineChart, id: 'reports', path: '/admin/reports' },
      { label: 'Notifications', icon: Bell, id: 'notifications', path: '/notifications' },
      { label: 'Settings', icon: Settings, id: 'settings', path: '/admin/settings' },
    ]},
  ],
  student: [
    { group: 'Overview', items: [
      { label: 'Dashboard', icon: LayoutDashboard, id: 'dashboard', path: '/' },
    ]},
    { group: 'Learning', items: [
      { label: 'My Courses', icon: BookOpen, id: 'courses', path: '/courses' },
      { label: 'Assignments', icon: FileCheck, id: 'assignments', path: '/teach/assignments' },
      { label: 'Schedule', icon: Calendar, id: 'schedule', path: '/timetable' },
    ]},
    { group: 'Records', items: [
      { label: 'Transcript', icon: ScrollText, id: 'transcript', path: '/transcript' },
      { label: 'Settings', icon: Settings, id: 'settings', path: '/settings' },
    ]},
  ],
}

const roleLabels = {
  super: { label: 'Super Admin', sub: 'Global Platform Control', color: 'var(--danger)' },
  university: { label: 'University Admin', sub: 'Tenant Settings', color: 'var(--primary)' },
  college: { label: 'College Admin', sub: 'Collegiate Operations', color: '#8B5CF6' },
  department: { label: 'Department Admin', sub: 'Curriculum & Faculty', color: 'var(--warning)' },
  faculty: { label: 'Faculty', sub: 'Course Management', color: 'var(--info)' },
  student: { label: 'Student', sub: 'Enrolled Courses', color: 'var(--success)' },
}

function NavItemEl({ item, collapsed }) {
  const Icon = item.icon
  return (
    <NavLink
      to={item.path}
      end
      title={collapsed ? item.label : undefined}
      style={({ isActive }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: collapsed ? '10px 0' : '8px 16px',
        margin: '2px 0',
        background: isActive ? 'var(--primary-muted)' : 'transparent',
        border: 'none',
        borderRadius: 8,
        cursor: 'pointer',
        color: isActive ? 'var(--primary)' : 'var(--text-3)',
        fontFamily: 'inherit',
        fontSize: 13,
        fontWeight: isActive ? 600 : 500,
        textAlign: 'left',
        transition: 'all 0.15s ease',
        position: 'relative',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        justifyContent: collapsed ? 'center' : 'flex-start',
        textDecoration: 'none'
      })}
    >
      {({ isActive }) => (
        <>
          <Icon size={collapsed ? 20 : 16} strokeWidth={isActive ? 2.2 : 1.8} style={{ flexShrink: 0 }} />
          {!collapsed && (
            <>
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.badge && (
                <span style={{
                  fontSize: 10, fontWeight: 600,
                  background: isActive ? 'var(--primary)' : 'var(--border-strong)',
                  color: isActive ? '#fff' : 'var(--text-3)',
                  borderRadius: 100,
                  padding: '1px 6px',
                  letterSpacing: '0.02em',
                }}>{item.badge}</span>
              )}
            </>
          )}
        </>
      )}
    </NavLink>
  )
}

function RoleSwitcher() {
  const { role, setRole } = useUIStore()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = roleLabels[role]

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          width: '100%', padding: '8px 10px',
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          borderRadius: 10, cursor: 'pointer',
          fontFamily: 'inherit', color: 'var(--text-1)',
          transition: 'all 0.15s ease',
        }}
      >
        <div style={{
          width: 8, height: 8, borderRadius: '50%',
          background: current.color, flexShrink: 0,
          boxShadow: `0 0 6px ${current.color}80`,
        }} />
        <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{current.label}</div>
          <div style={{ fontSize: 10, color: 'var(--text-3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{current.sub}</div>
        </div>
        <ChevronDown size={12} color="var(--text-3)" />
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 200,
          marginTop: 4, background: 'var(--surface-2)',
          border: '1px solid var(--border)', borderRadius: 10,
          boxShadow: 'var(--shadow-4)', overflow: 'hidden',
        }}>
          {['super', 'university', 'college', 'department', 'faculty', 'student'].map(r => {
            const info = roleLabels[r]
            const isActive = role === r
            return (
              <button
                key={r}
                onClick={() => { setRole(r); setOpen(false) }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  width: '100%', padding: '9px 10px',
                  background: isActive ? 'var(--primary-muted)' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'inherit', textAlign: 'left',
                  transition: 'background 0.15s',
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: info.color, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: isActive ? 'var(--primary)' : 'var(--text-1)' }}>{info.label}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-3)' }}>{info.sub}</div>
                </div>
                {isActive && <Check size={12} color="var(--primary)" style={{ marginLeft: 'auto' }} />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export function Sidebar() {
  const { sidebarCollapsed, setSidebarCollapsed, role } = useUIStore()
  const sidebarW = sidebarCollapsed ? 64 : 260
  
  return (
    <aside style={{
      width: sidebarW, flexShrink: 0,
      height: '100vh', position: 'fixed',
      top: 0, left: 0, zIndex: 50,
      background: 'var(--sidebar)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
      transition: 'width 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
      overflow: 'hidden',
    }}>
      {/* Logo */}
      <div style={{
        height: 60, display: 'flex', alignItems: 'center',
        padding: sidebarCollapsed ? '0 16px' : '0 16px',
        borderBottom: '1px solid var(--border)',
        flexShrink: 0, gap: 10,
        justifyContent: sidebarCollapsed ? 'center' : 'flex-start',
      }}>
        <div style={{
          width: 34, height: 34, borderRadius: 10, flexShrink: 0,
          background: '#8c1515', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'rgba(71, 85, 105, 0.3) 0px 4px 14px'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles" aria-hidden="true">
            <circle cx="4" cy="20" r="2"></circle>
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
            <path d="M20 2v4"></path>
            <path d="M22 4h-4"></path>
          </svg>
        </div>
        {!sidebarCollapsed && (() => {
          let brandTitle = 'Zdotapps Admin';
          let brandSubtitle = 'LMS Platform';
          
          if (role === 'university') {
            brandTitle = 'SIU';
          } else if (['college', 'department', 'faculty', 'student'].includes(role)) {
            brandTitle = 'SIU';
            brandSubtitle = 'School of Technology & AI';
          }

          return (
            <div style={{ minWidth: 0, whiteSpace: 'nowrap' }}>
              <div style={{ fontSize: brandTitle.length > 15 ? 12 : 15, fontWeight: 750, color: 'var(--text-1)', letterSpacing: '-0.025em', lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis' }}>{brandTitle}</div>
              <div style={{ fontSize: 10, color: 'var(--text-4)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>{brandSubtitle}</div>
            </div>
          );
        })()}
      </div>

      {/* Role switcher */}
      {!sidebarCollapsed && (
        <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--border)', flexShrink: 0 }}>
          <RoleSwitcher />
        </div>
      )}

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '8px 8px' }}>
        {(navConfig[role] || navConfig.super).map(group => (
          <div key={group.group} style={{ marginBottom: 8 }}>
            {!sidebarCollapsed && (
              <div style={{
                fontSize: 10, fontWeight: 600, color: 'var(--text-4)',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                padding: '8px 8px 4px',
              }}>{group.group}</div>
            )}
            {group.items.map(item => (
              <NavItemEl key={item.id} item={item} collapsed={sidebarCollapsed} />
            ))}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div style={{ borderTop: '1px solid var(--border)', flexShrink: 0 }}>
        {!sidebarCollapsed && (
          <div style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: 'var(--primary)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 700, color: 'var(--primary-fg)', flexShrink: 0,
            }}>JD</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>SIU Admin</div>
              <div style={{ fontSize: 10, color: 'var(--text-3)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>SIUAdmin@siu.org</div>
            </div>
          </div>
        )}
        <button
          onClick={() => setSidebarCollapsed(v => !v)}
          style={{
            width: '100%', padding: '10px 0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'transparent', border: 'none',
            borderTop: '1px solid var(--border)',
            cursor: 'pointer', color: 'var(--text-3)',
            transition: 'all 0.15s',
          }}
        >
          {sidebarCollapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
          {!sidebarCollapsed && <span style={{ fontSize: 11, marginLeft: 6, color: 'var(--text-4)', fontFamily: 'inherit' }}>Collapse</span>}
        </button>
      </div>
    </aside>
  )
}

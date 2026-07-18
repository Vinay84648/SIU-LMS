import { useState, useRef, useEffect } from 'react'
import { useTheme, useRole, useTab } from '../App'
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
      { label: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
      { label: 'Analytics', icon: BarChart3, id: 'analytics' },
      { label: 'Global Map', icon: Globe, id: 'map' },
    ]},
    { group: 'Management', items: [
      { label: 'Universities', icon: Building2, id: 'universities', badge: '142' },
      { label: 'Users & Sessions', icon: Users, id: 'users' },
      { label: 'Role Access', icon: Key, id: 'roleAccess' },
    ]},
    { group: 'Platform', items: [
      { label: 'Email (SES)', icon: Mail, id: 'email' },
      { label: 'Security', icon: ShieldCheck, id: 'security', badge: '3' },
      { label: 'Feature Flags', icon: ToggleLeft, id: 'flags' },
      { label: 'Audit Logs', icon: ScrollText, id: 'audit' },
    ]},
    { group: 'Config', items: [
      { label: 'Tenant Branding', icon: Palette, id: 'branding' },
      { label: 'Settings', icon: Settings, id: 'settings' },
    ]},
  ],
  university: [
    { group: 'Overview', items: [
      { label: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
      { label: 'Analytics', icon: BarChart3, id: 'analytics' },
    ]},
    { group: 'People', items: [
      { label: 'Students', icon: GraduationCap, id: 'students', badge: '4,821' },
      { label: 'Faculty', icon: UserSquare2, id: 'faculty' },
      { label: 'Role Access', icon: Key, id: 'roleAccess' },
    ]},
    { group: 'Academic', items: [
      { label: 'Colleges', icon: Building2, id: 'colleges' },
      { label: 'Departments', icon: Building, id: 'departments' },
      { label: 'Content Queue', icon: FileCheck, id: 'content', badge: '7' },
      { label: 'Academic Calendar', icon: CalendarDays, id: 'calendar' },
    ]},
    { group: 'Operations', items: [
      { label: 'CSV Import', icon: Upload, id: 'import' },
      { label: 'Reports', icon: LineChart, id: 'reports' },
      { label: 'Notifications', icon: Bell, id: 'notifications' },
      { label: 'Settings', icon: Settings, id: 'settings' },
    ]},
  ],
  department: [
    { group: 'Overview', items: [
      { label: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
    ]},
    { group: 'Academic', items: [
      { label: 'Programs', icon: Layers, id: 'programs' },
      { label: 'Curriculum', icon: BookMarked, id: 'curriculum' },
      { label: 'Quarter Planner', icon: Calendar, id: 'planner' },
      { label: 'Batches', icon: GraduationCap, id: 'batches', badge: '12' },
      { label: 'Courses', icon: BookOpen, id: 'courses' },
    ]},
    { group: 'People', items: [
      { label: 'Faculty', icon: UserSquare2, id: 'faculty' },
      { label: 'Students', icon: GraduationCap, id: 'students' },
      { label: 'Role Access', icon: Key, id: 'roleAccess' },
      { label: 'Internships', icon: Briefcase, id: 'internships' },
    ]},
    { group: 'Performance', items: [
      { label: 'Reports', icon: LineChart, id: 'reports' },
    ]},
  ],
  faculty: [
    { group: 'Overview', items: [
      { label: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
    ]},
    { group: 'Teaching', items: [
      { label: 'My Courses', icon: BookOpen, id: 'courses' },
      { label: 'Assignments', icon: FileCheck, id: 'assignments' },
      { label: 'Schedule', icon: Calendar, id: 'schedule' },
    ]},
    { group: 'Tools', items: [
      { label: 'Reports', icon: LineChart, id: 'reports' },
      { label: 'Settings', icon: Settings, id: 'settings' },
    ]},
  ],
  student: [
    { group: 'Overview', items: [
      { label: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
    ]},
    { group: 'Learning', items: [
      { label: 'My Courses', icon: BookOpen, id: 'courses' },
      { label: 'Assignments', icon: FileCheck, id: 'assignments' },
      { label: 'Schedule', icon: Calendar, id: 'schedule' },
    ]},
    { group: 'Records', items: [
      { label: 'Transcript', icon: ScrollText, id: 'transcript' },
      { label: 'Settings', icon: Settings, id: 'settings' },
    ]},
  ],
}

const roleLabels = {
  super: { label: 'Super Admin', sub: 'Global Platform Control', color: 'var(--danger)' },
  university: { label: 'University Admin', sub: 'Tenant Settings', color: 'var(--primary)' },
  department: { label: 'Department Admin', sub: 'Curriculum & Faculty', color: 'var(--warning)' },
  faculty: { label: 'Faculty', sub: 'Course Management', color: 'var(--info)' },
  student: { label: 'Student', sub: 'Enrolled Courses', color: 'var(--success)' },
}

const notifications = [
  { id: 1, type: 'alert', title: 'Failed OTP spike detected', body: '42 failed attempts in last hour from EU-West', time: '5m ago', read: false },
  { id: 2, type: 'success', title: 'University provisioned', body: 'Stanford University onboarding complete', time: '1h ago', read: false },
  { id: 3, type: 'warning', title: 'Storage at 84%', body: 'EU-West-2 storage reaching capacity threshold', time: '3h ago', read: true },
  { id: 4, type: 'info', title: 'SES quota renewal', body: 'Monthly email quota refreshed for all tenants', time: '1d ago', read: true },
]

function NavItemEl({ item, active, collapsed, onClick }) {
  const Icon = item.icon
  return (
    <button
      onClick={onClick}
      title={collapsed ? item.label : undefined}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: collapsed ? '9px 18px' : '8px 16px',
        margin: '1px 0',
        background: active ? 'var(--primary-muted)' : 'transparent',
        border: 'none',
        borderRadius: 8,
        cursor: 'pointer',
        color: active ? 'var(--primary)' : 'var(--text-3)',
        fontFamily: 'inherit',
        fontSize: 13,
        fontWeight: active ? 600 : 500,
        textAlign: 'left',
        transition: 'all 0.15s ease',
        position: 'relative',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        justifyContent: collapsed ? 'center' : 'flex-start',
      }}
      onMouseEnter={e => {
        if (!active) e.currentTarget.style.background = 'var(--surface-hover)'
        if (!active) e.currentTarget.style.color = 'var(--text-1)'
      }}
      onMouseLeave={e => {
        if (!active) e.currentTarget.style.background = 'transparent'
        if (!active) e.currentTarget.style.color = 'var(--text-3)'
      }}
    >
      <Icon size={16} strokeWidth={active ? 2.2 : 1.8} />
      {!collapsed && (
        <>
          <span style={{ flex: 1 }}>{item.label}</span>
          {item.badge && (
            <span style={{
              fontSize: 10, fontWeight: 600,
              background: active ? 'var(--primary)' : 'var(--border-strong)',
              color: active ? '#fff' : 'var(--text-3)',
              borderRadius: 100,
              padding: '1px 6px',
              letterSpacing: '0.02em',
            }}>{item.badge}</span>
          )}
        </>
      )}
    </button>
  )
}

function RoleSwitcher() {
  const { role, setRole } = useRole()
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
          {['super', 'university', 'department', 'faculty', 'student'].map(r => {
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
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'var(--surface-hover)' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
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

function NotificationPanel({ onClose }) {
  const [items, setItems] = useState(notifications)
  const typeIcon = (type) => {
    if (type === 'alert') return <AlertCircle size={14} color="var(--danger)" />
    if (type === 'success') return <Check size={14} color="var(--success)" />
    if (type === 'warning') return <Zap size={14} color="var(--warning)" />
    return <Info size={14} color="var(--info)" />
  }
  return (
    <div style={{
      position: 'absolute', top: '100%', right: 0, width: 360, zIndex: 300,
      marginTop: 8, background: 'var(--surface-2)',
      border: '1px solid var(--border)', borderRadius: 14,
      boxShadow: 'var(--shadow-4)', overflow: 'hidden',
    }}>
      <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-1)' }}>Notifications</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setItems(i => i.map(n => ({ ...n, read: true })))} style={{ fontSize: 11, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>Mark all read</button>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-3)', display: 'flex', alignItems: 'center' }}><X size={14} /></button>
        </div>
      </div>
      {items.map(n => (
        <div key={n.id} style={{
          padding: '12px 16px', display: 'flex', gap: 10,
          borderBottom: '1px solid var(--border)',
          background: n.read ? 'transparent' : 'var(--primary-muted)',
          cursor: 'pointer', transition: 'background 0.15s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
          onMouseLeave={e => e.currentTarget.style.background = n.read ? 'transparent' : 'var(--primary-muted)'}
        >
          <div style={{ marginTop: 2 }}>{typeIcon(n.type)}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)', marginBottom: 2 }}>{n.title}</div>
            <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 4 }}>{n.body}</div>
            <div style={{ fontSize: 10, color: 'var(--text-4)' }}>{n.time}</div>
          </div>
          {!n.read && <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: 6, flexShrink: 0 }} />}
        </div>
      ))}
      <div style={{ padding: '10px 16px', textAlign: 'center' }}>
        <button style={{ fontSize: 12, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>View all notifications</button>
      </div>
    </div>
  )
}

function TopNav({ onCommandOpen }) {
  const { theme, toggleTheme } = useTheme()
  const { role } = useRole()
  const [notifOpen, setNotifOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const notifRef = useRef(null)
  const profileRef = useRef(null)
  const unread = notifications.filter(n => !n.read).length

  const breadcrumbMap = {
    super: ['Platform', 'Super Admin', 'Dashboard'],
    university: ['MIT', 'University Admin', 'Dashboard'],
    department: ['CS Dept', 'HOD Dashboard', 'Overview'],
    faculty: ['Faculty', 'Course Management', 'Dashboard'],
    student: ['Student', 'Enrolled Courses', 'Dashboard'],
  }
  const breadcrumbs = breadcrumbMap[role] || ['Dashboard']

  useEffect(() => {
    const handler = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false)
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header style={{
      height: 60, display: 'flex', alignItems: 'center',
      padding: '0 24px', gap: 12, flexShrink: 0,
      background: 'var(--topbar)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky', top: 0, zIndex: 40,
    }}>
      {/* Breadcrumbs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1, minWidth: 0 }}>
        {breadcrumbs.map((crumb, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {i > 0 && <span style={{ color: 'var(--text-4)', fontSize: 13 }}>/</span>}
            <span style={{
              fontSize: 13,
              fontWeight: i === breadcrumbs.length - 1 ? 600 : 400,
              color: i === breadcrumbs.length - 1 ? 'var(--text-1)' : 'var(--text-3)',
              cursor: i < breadcrumbs.length - 1 ? 'pointer' : 'default',
            }}>{crumb}</span>
          </div>
        ))}
      </div>

      {/* Search */}
      <button
        onClick={onCommandOpen}
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '6px 12px', borderRadius: 8,
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          cursor: 'pointer', color: 'var(--text-3)',
          fontFamily: 'inherit', fontSize: 12,
          transition: 'all 0.15s ease', whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
      >
        <Search size={13} />
        <span>Search or jump to...</span>
        <span style={{
          display: 'flex', alignItems: 'center', gap: 2,
          background: 'var(--bg-2)', borderRadius: 4,
          padding: '1px 5px', fontSize: 10, color: 'var(--text-4)',
        }}>
          <Command size={9} />K
        </span>
      </button>

      {/* Notifications */}
      <div ref={notifRef} style={{ position: 'relative' }}>
        <button
          onClick={() => { setNotifOpen(v => !v); setProfileOpen(false) }}
          style={{
            width: 34, height: 34, borderRadius: 8,
            background: notifOpen ? 'var(--primary-muted)' : 'var(--surface-2)',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', position: 'relative', transition: 'all 0.15s',
          }}
        >
          <Bell size={15} color={notifOpen ? 'var(--primary)' : 'var(--text-3)'} />
          {unread > 0 && (
            <div style={{
              position: 'absolute', top: 4, right: 4,
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--danger)',
              border: '1.5px solid var(--bg)',
            }} />
          )}
        </button>
        {notifOpen && <NotificationPanel onClose={() => setNotifOpen(false)} />}
      </div>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        style={{
          width: 34, height: 34, borderRadius: 8,
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', transition: 'all 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--surface-2)'}
      >
        {theme === 'dark' ? <Sun size={15} color="var(--text-3)" /> : <Moon size={15} color="var(--text-3)" />}
      </button>

      {/* Profile */}
      <div ref={profileRef} style={{ position: 'relative' }}>
        <button
          onClick={() => { setProfileOpen(v => !v); setNotifOpen(false) }}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '4px 8px 4px 4px', borderRadius: 10,
            background: profileOpen ? 'var(--surface-hover)' : 'transparent',
            border: '1px solid transparent',
            cursor: 'pointer', transition: 'all 0.15s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--surface-2)'
            e.currentTarget.style.borderColor = 'var(--border)'
          }}
          onMouseLeave={e => {
            if (!profileOpen) {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'transparent'
            }
          }}
        >
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: 'var(--primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 700, color: 'var(--primary-fg)',
          }}>JD</div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.3 }}>James Doe</div>
            <div style={{ fontSize: 10, color: 'var(--text-3)' }}>james@educore.io</div>
          </div>
          <ChevronDown size={12} color="var(--text-4)" />
        </button>
        {profileOpen && (
          <div style={{
            position: 'absolute', top: '100%', right: 0, width: 200, zIndex: 300,
            marginTop: 6, background: 'var(--surface-2)',
            border: '1px solid var(--border)', borderRadius: 12,
            boxShadow: 'var(--shadow-4)', overflow: 'hidden',
          }}>
            {[
              { icon: User, label: 'Your Profile' },
              { icon: Settings, label: 'Preferences' },
              { icon: HelpCircle, label: 'Help & Support' },
              { icon: ExternalLink, label: 'View Changelog' },
            ].map(({ icon: MenuIcon, label }) => (
              <button key={label} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                width: '100%', padding: '9px 14px',
                background: 'transparent', border: 'none',
                cursor: 'pointer', fontFamily: 'inherit',
                fontSize: 12, color: 'var(--text-2)', transition: 'background 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <MenuIcon size={13} /> {label}
              </button>
            ))}
            <div style={{ borderTop: '1px solid var(--border)', margin: '4px 0' }} />
            <button style={{
              display: 'flex', alignItems: 'center', gap: 8,
              width: '100%', padding: '9px 14px',
              background: 'transparent', border: 'none',
              cursor: 'pointer', fontFamily: 'inherit',
              fontSize: 12, color: 'var(--danger)', transition: 'background 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--danger-muted)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <LogOut size={13} /> Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default function Shell({ children, onCommandOpen }) {
  const { role } = useRole()
  const [collapsed, setCollapsed] = useState(false)
  const { activeTab: active, setActiveTab: setActive } = useTab()
  const sidebarW = collapsed ? 64 : 260

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
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
          padding: collapsed ? '0 16px' : '0 16px',
          borderBottom: '1px solid var(--border)',
          flexShrink: 0, gap: 10,
          justifyContent: collapsed ? 'center' : 'flex-start',
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10, flexShrink: 0,
            background: 'var(--primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(71,85,105,0.3)',
          }}>
            <Sparkles size={17} color="white" strokeWidth={2} />
          </div>
          {!collapsed && (
            <div>
              <div style={{ fontSize: 15, fontWeight: 750, color: 'var(--text-1)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>EduCore</div>
              <div style={{ fontSize: 10, color: 'var(--text-4)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>LMS Platform</div>
            </div>
          )}
        </div>

        {/* Role switcher */}
        {!collapsed && (
          <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--border)', flexShrink: 0 }}>
            <RoleSwitcher />
          </div>
        )}

        {/* Nav */}
        <nav style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '8px 8px' }}>
          {(navConfig[role] || navConfig.super).map(group => (
            <div key={group.group} style={{ marginBottom: 8 }}>
              {!collapsed && (
                <div style={{
                  fontSize: 10, fontWeight: 600, color: 'var(--text-4)',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  padding: '8px 8px 4px',
                }}>{group.group}</div>
              )}
              {group.items.map(item => (
                <NavItemEl
                  key={item.id}
                  item={item}
                  active={active === item.id}
                  collapsed={collapsed}
                  onClick={() => setActive(item.id)}
                />
              ))}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div style={{ borderTop: '1px solid var(--border)', flexShrink: 0 }}>
          {!collapsed && (
            <div style={{
              padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <div style={{
                width: 30, height: 30, borderRadius: 8,
                background: 'var(--primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700, color: 'var(--primary-fg)', flexShrink: 0,
              }}>JD</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>James Doe</div>
                <div style={{ fontSize: 10, color: 'var(--text-3)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>james@educore.io</div>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(v => !v)}
            style={{
              width: '100%', padding: '10px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'transparent', border: 'none',
              borderTop: '1px solid var(--border)',
              cursor: 'pointer', color: 'var(--text-3)',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
            {!collapsed && <span style={{ fontSize: 11, marginLeft: 6, color: 'var(--text-4)', fontFamily: 'inherit' }}>Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div style={{
        flex: 1, marginLeft: sidebarW,
        display: 'flex', flexDirection: 'column',
        height: '100vh', overflow: 'hidden',
        transition: 'margin-left 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <TopNav onCommandOpen={onCommandOpen} />
        <main className="mesh-bg" style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          {children}
        </main>
      </div>
    </div>
  )
}

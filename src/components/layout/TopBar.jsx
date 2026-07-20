import { useState, useRef, useEffect } from 'react'
import { Search, Sun, Moon, Bell, ChevronDown, X, Check, AlertCircle, Info, Zap, LogOut, User, HelpCircle, Command, ExternalLink, Settings } from 'lucide-react'
import { useUIStore } from '../../store/uiStore'

const notifications = [
  { id: 1, type: 'alert', title: 'Failed OTP spike detected', body: '42 failed attempts in last hour from EU-West', time: '5m ago', read: false },
  { id: 2, type: 'success', title: 'University provisioned', body: 'Sricity International University(SIU) onboarding complete', time: '1h ago', read: false },
  { id: 3, type: 'warning', title: 'Storage at 84%', body: 'EU-West-2 storage reaching capacity threshold', time: '3h ago', read: true },
  { id: 4, type: 'info', title: 'SES quota renewal', body: 'Monthly email quota refreshed for all tenants', time: '1d ago', read: true },
]

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

export function TopBar() {
  const { theme, toggleTheme, role } = useUIStore()
  const [notifOpen, setNotifOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const notifRef = useRef(null)
  const profileRef = useRef(null)
  const unread = notifications.filter(n => !n.read).length

  const breadcrumbMap = {
    super: ['Platform', 'Super Admin', 'Dashboard'],
    university: ['MIT', 'University Admin', 'Dashboard'],
    college: ['College of Eng', 'College Admin', 'Dashboard'],
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
        onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '6px 12px', borderRadius: 8,
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          cursor: 'pointer', color: 'var(--text-3)',
          fontFamily: 'inherit', fontSize: 12,
          transition: 'all 0.15s ease', whiteSpace: 'nowrap',
        }}
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
        >
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: 'var(--primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 700, color: 'var(--primary-fg)',
          }}>JD</div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.3 }}>SIU Admin</div>
            <div style={{ fontSize: 10, color: 'var(--text-3)' }}>SIUAdmin@siu.org</div>
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
              }}>
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
            }}>
              <LogOut size={13} /> Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

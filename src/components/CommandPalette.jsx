import { useState, useEffect, useRef } from 'react'
import { Search, LayoutDashboard, Building2, Users, CreditCard, Shield, ScrollText, Settings, GraduationCap, FileCheck, ArrowRight, Hash, Zap, BookOpen } from 'lucide-react'

const allCommands = [
  { group: 'Navigation', icon: LayoutDashboard, label: 'Go to Dashboard', shortcut: 'G D' },
  { group: 'Navigation', icon: Building2, label: 'View Universities', shortcut: 'G U' },
  { group: 'Navigation', icon: Users, label: 'Manage Users', shortcut: 'G M' },
  { group: 'Navigation', icon: Shield, label: 'Security Dashboard', shortcut: '' },
  { group: 'Navigation', icon: ScrollText, label: 'Audit Logs', shortcut: '' },
  { group: 'Actions', icon: Building2, label: 'Provision New University', shortcut: '⌘ N' },
  { group: 'Actions', icon: FileCheck, label: 'Review Content Queue', shortcut: '' },
  { group: 'Actions', icon: Zap, label: 'Toggle Feature Flag', shortcut: '' },
  { group: 'Actions', icon: BookOpen, label: 'Create New Course', shortcut: '' },
  { group: 'Settings', icon: Settings, label: 'Platform Settings', shortcut: '⌘ ,' },
  { group: 'Settings', icon: Hash, label: 'Manage Email Domains', shortcut: '' },
]

export default function CommandPalette({ onClose }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef(null)

  const filtered = query
    ? allCommands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()))
    : allCommands

  const grouped = {}
  filtered.forEach(cmd => {
    if (!grouped[cmd.group]) grouped[cmd.group] = []
    grouped[cmd.group].push(cmd)
  })

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    setSelected(0)
  }, [query])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(v => Math.min(v + 1, filtered.length - 1)) }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(v => Math.max(v - 1, 0)) }
      if (e.key === 'Enter') { e.preventDefault(); onClose() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [filtered.length, onClose])

  let globalIdx = 0

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        paddingTop: '15vh',
      }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 580,
          background: 'var(--surface-2)',
          border: '1px solid var(--border-strong)',
          borderRadius: 16,
          boxShadow: 'var(--shadow-4), 0 0 0 1px rgba(99,102,241,0.08)',
          overflow: 'hidden',
        }}
      >
        {/* Search input */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '14px 16px',
          borderBottom: '1px solid var(--border)',
        }}>
          <Search size={16} color="var(--text-3)" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search commands, pages, users..."
            style={{
              flex: 1, background: 'transparent', border: 'none',
              outline: 'none', fontFamily: 'inherit',
              fontSize: 14, color: 'var(--text-1)',
              caretColor: 'var(--primary)',
            }}
          />
          <kbd style={{
            fontSize: 10, color: 'var(--text-4)',
            background: 'var(--bg-2)', borderRadius: 4,
            padding: '2px 6px', border: '1px solid var(--border)',
          }}>ESC</kbd>
        </div>

        {/* Results */}
        <div style={{ maxHeight: 380, overflowY: 'auto', padding: '8px 0' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-3)', fontSize: 13 }}>
              No results for &ldquo;{query}&rdquo;
            </div>
          ) : (
            Object.entries(grouped).map(([group, cmds]) => (
              <div key={group}>
                <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-4)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '8px 16px 4px' }}>{group}</div>
                {cmds.map(cmd => {
                  const Icon = cmd.icon
                  const isSelected = globalIdx++ === selected
                  return (
                    <button
                      key={cmd.label}
                      onClick={onClose}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        width: '100%', padding: '9px 16px',
                        background: isSelected ? 'var(--primary-muted)' : 'transparent',
                        border: 'none', cursor: 'pointer',
                        fontFamily: 'inherit', textAlign: 'left',
                        transition: 'background 0.1s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-hover)'}
                      onMouseLeave={e => e.currentTarget.style.background = isSelected ? 'var(--primary-muted)' : 'transparent'}
                    >
                      <div style={{
                        width: 28, height: 28, borderRadius: 7,
                        background: isSelected ? 'var(--primary)' : 'var(--bg-2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        border: '1px solid var(--border)',
                      }}>
                        <Icon size={13} color={isSelected ? '#fff' : 'var(--text-3)'} />
                      </div>
                      <span style={{ flex: 1, fontSize: 13, color: isSelected ? 'var(--primary)' : 'var(--text-1)', fontWeight: isSelected ? 500 : 400 }}>{cmd.label}</span>
                      {cmd.shortcut && (
                        <kbd style={{ fontSize: 10, color: 'var(--text-4)', background: 'var(--bg-2)', borderRadius: 4, padding: '2px 5px', border: '1px solid var(--border)' }}>{cmd.shortcut}</kbd>
                      )}
                      <ArrowRight size={12} color="var(--text-4)" />
                    </button>
                  )
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '10px 16px', borderTop: '1px solid var(--border)',
          display: 'flex', gap: 16, alignItems: 'center',
        }}>
          {[['↑↓', 'Navigate'], ['↵', 'Select'], ['ESC', 'Dismiss']].map(([key, action]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <kbd style={{ fontSize: 10, color: 'var(--text-3)', background: 'var(--bg-2)', borderRadius: 4, padding: '2px 5px', border: '1px solid var(--border)' }}>{key}</kbd>
              <span style={{ fontSize: 11, color: 'var(--text-4)' }}>{action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

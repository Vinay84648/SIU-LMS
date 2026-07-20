import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from './UI'

export function CalendarWidget({ 
  initialMonth = 'July 2026', 
  layout = 'vertical', // 'vertical' | 'horizontal'
  events = [
    { day: 14, label: 'Mid-term Exams Start', color: '#EF4444' },
    { day: 18, label: 'Faculty Senate Meeting', color: '#6B7280' },
    { day: 22, label: 'Research Symposium', color: '#10B981' },
    { day: 25, label: 'Enrollment Deadline', color: '#F59E0B' },
  ]
}) {
  const [calendarMonth] = useState(initialMonth)
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const startDay = 3 // Wednesday for July 2026

  const isHorizontal = layout === 'horizontal'

  return (
    <Card style={{ padding: '20px', display: 'flex', flexDirection: isHorizontal ? 'row' : 'column', gap: isHorizontal ? 40 : 0, alignItems: isHorizontal ? 'flex-start' : 'stretch' }}>
      <div style={{ flex: isHorizontal ? '1.5' : 'unset', minWidth: isHorizontal ? 320 : 'unset' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)' }}>{calendarMonth}</div>
        <div style={{ display: 'flex', gap: 4 }}>
          <button style={{ width: 26, height: 26, borderRadius: 6, background: 'var(--surface-2)', border: '1px solid var(--border)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronLeft size={12} color="var(--text-3)" />
          </button>
          <button style={{ width: 26, height: 26, borderRadius: 6, background: 'var(--surface-2)', border: '1px solid var(--border)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronRight size={12} color="var(--text-3)" />
          </button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 6 }}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div key={i} style={{ textAlign: 'center', fontSize: 10, fontWeight: 600, color: 'var(--text-4)', padding: '4px 0' }}>{d}</div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
        {Array.from({ length: startDay }).map((_, i) => <div key={`empty-${i}`} />)}
        {days.map(day => {
          const event = events.find(e => e.day === day)
          const isToday = day === 18
          return (
            <div key={day} style={{
              textAlign: 'center', padding: '6px 2px',
              borderRadius: 8, cursor: 'pointer',
              background: isToday ? 'var(--primary)' : event ? `${event.color}15` : 'transparent',
              border: event && !isToday ? `1px solid ${event.color}40` : '1px solid transparent',
              transition: 'all 0.2s',
              position: 'relative',
            }}
              onMouseEnter={e => { if (!isToday) e.currentTarget.style.background = 'var(--surface-hover)' }}
              onMouseLeave={e => { if (!isToday) e.currentTarget.style.background = event ? `${event.color}18` : 'transparent' }}
              title={event?.label}
            >
              <span style={{ fontSize: 11, fontWeight: (isToday || event) ? 700 : 500, color: isToday ? '#fff' : event ? event.color : 'var(--text-2)' }}>{day}</span>
            </div>
          )
        })}
      </div>
      </div>

      <div style={{ flex: isHorizontal ? '1' : 'unset', marginTop: isHorizontal ? 0 : 14, display: 'flex', flexDirection: 'column', gap: 8, borderLeft: isHorizontal ? '1px solid var(--border)' : 'none', paddingLeft: isHorizontal ? 30 : 0 }}>
        {isHorizontal && <div style={{ fontSize: 13, fontWeight: 650, color: 'var(--text-1)', marginBottom: 8 }}>Upcoming Events</div>}
        {events.map(ev => (
          <div key={ev.day} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: isHorizontal ? '8px 12px' : 0, background: isHorizontal ? 'var(--surface-2)' : 'transparent', borderRadius: 8, border: isHorizontal ? '1px solid var(--border)' : 'none' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: ev.color, flexShrink: 0 }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-2)', flex: 1 }}>{ev.label}</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-4)', fontFamily: "'JetBrains Mono', monospace" }}>Jul {ev.day}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

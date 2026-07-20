import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import { useUIStore } from '../../store/uiStore'

/**
 * Main authenticated app shell — sidebar + topbar + page content.
 * Used by PrivateLayout which passes the current page as children.
 */
export function AppShell({ children }) {
  const { sidebarCollapsed } = useUIStore()
  const sidebarW = sidebarCollapsed ? 64 : 260

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <div style={{
        flex: 1, marginLeft: sidebarW,
        display: 'flex', flexDirection: 'column',
        height: '100vh', overflow: 'hidden',
        transition: 'margin-left 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <TopBar />
        <main className="mesh-bg" style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          {children}
        </main>
      </div>
    </div>
  )
}

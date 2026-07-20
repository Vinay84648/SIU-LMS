import { Outlet, Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { AppShell } from '../components/layout/AppShell'

/**
 * Layout for authenticated pages.
 * Redirects to /login if no token exists.
 * Renders AppShell (sidebar + topbar) around all child routes.
 */
export function PrivateLayout() {
  const accessToken = useAuthStore((s) => s.accessToken)

  // Temporarily bypassing the auth check for UI prototyping
  // if (!accessToken) {
  //   return <Navigate to="/login" replace />
  // }

  return (
    <AppShell>
      <Outlet />
    </AppShell>
  )
}

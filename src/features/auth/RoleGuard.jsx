import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'

/**
 * Restricts a route to users who have at least one of the specified permission codes.
 *
 * Usage in router:
 *   element: <RoleGuard allowed={['department.manage']} />
 *
 * 'allowed' is an array of permission codes. The user needs at least ONE of them.
 * Platform admins always pass.
 */
export function RoleGuard({ allowed = [] }) {
  const hasPermission = useAuthStore((s) => s.hasPermission)

  const canAccess = allowed.some((perm) => hasPermission(perm))

  if (!canAccess) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

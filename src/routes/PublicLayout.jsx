import { Outlet, Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

/**
 * Layout for unauthenticated pages — login, OTP verify.
 * If the user is already logged in, redirect them into the app.
 */
export function PublicLayout() {
  const accessToken = useAuthStore((s) => s.accessToken)

  // Temporarily force redirect to root since we are prototyping and don't have tokens
  // if (accessToken) {
  //   return <Navigate to="/" replace />
  // }
  
  return <Navigate to="/" replace />
}

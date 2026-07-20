import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import api from '../../services/api'
import { useAuthStore } from '../../store/authStore'

const schema = z.object({
  code: z
    .string()
    .length(6, 'Code must be 6 digits')
    .regex(/^\d+$/, 'Code must be numbers only'),
})

/**
 * Step 2 of login — user enters the 6-digit OTP sent to their email.
 * On success, stores tokens + user info and redirects to the app.
 */
export function OtpPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email

  const { setTokens, setUser, setPermissions } = useAuthStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  // If someone lands here directly without going through LoginPage, send them back
  if (!email) {
    navigate('/login', { replace: true })
    return null
  }

  const onSubmit = async ({ code }) => {
    setLoading(true)
    setError('')
    try {
      const { data } = await api.post('/auth/otp/verify/', { email, code })

      setTokens(data.access, data.refresh)
      setUser({
        id: data.user.id,
        email: data.user.email,
        firstName: data.user.first_name,
        lastName: data.user.last_name,
        isPlatformAdmin: data.user.is_platform_admin,
      })
      setPermissions(data.permissions || [])

      navigate('/', { replace: true })
    } catch (err) {
      const msg = err.response?.data?.errors?.detail || 'Invalid code. Try again.'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Check your email</h1>
        <p className="text-gray-500 text-sm mb-6">
          We sent a 6-digit code to <span className="font-medium text-gray-700">{email}</span>.
          It expires in 5 minutes.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
              One-time code
            </label>
            <input
              id="code"
              type="text"
              inputMode="numeric"
              maxLength={6}
              autoComplete="one-time-code"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm tracking-widest text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="000000"
              {...register('code')}
            />
            {errors.code && (
              <p className="text-red-500 text-xs mt-1">{errors.code.message}</p>
            )}
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Verifying…' : 'Verify code'}
          </button>
        </form>

        <button
          onClick={() => navigate('/login')}
          className="mt-4 w-full text-center text-sm text-gray-500 hover:text-gray-700"
        >
          Use a different email
        </button>
      </div>
    </div>
  )
}

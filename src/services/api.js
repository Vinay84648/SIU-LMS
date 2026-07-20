import axios from 'axios'
import { useAuthStore } from '../store/authStore'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1'

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

// ─── Request interceptor ──────────────────────────────────────────────────────
// Attaches JWT token and tenant subdomain header to every request

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  // Local dev: pass subdomain via header so Django resolves the tenant without real DNS
  const subdomain = import.meta.env.VITE_TENANT_SUBDOMAIN
  if (subdomain) {
    config.headers['X-Tenant-Subdomain'] = subdomain
  }
  return config
})

// ─── Response interceptor ─────────────────────────────────────────────────────
// On 401, try refreshing the access token once then retry the original request.
// If refresh also fails, log the user out.

let isRefreshing = false
let pendingRequests = []

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config

    if (error.response?.status !== 401 || original._retry) {
      return Promise.reject(error)
    }

    const { refreshToken, setTokens, logout } = useAuthStore.getState()
    if (!refreshToken) {
      logout()
      return Promise.reject(error)
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        pendingRequests.push({ resolve, reject })
      }).then((token) => {
        original.headers.Authorization = `Bearer ${token}`
        return api(original)
      })
    }

    original._retry = true
    isRefreshing = true

    try {
      const { data } = await axios.post(`${BASE_URL}/auth/token/refresh/`, {
        refresh: refreshToken,
      })
      setTokens(data.access, data.refresh)
      pendingRequests.forEach(({ resolve }) => resolve(data.access))
      pendingRequests = []
      original.headers.Authorization = `Bearer ${data.access}`
      return api(original)
    } catch {
      pendingRequests.forEach(({ reject }) => reject(error))
      pendingRequests = []
      logout()
      return Promise.reject(error)
    } finally {
      isRefreshing = false
    }
  }
)

export default api

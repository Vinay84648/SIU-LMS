import api from '../../services/api'

export const authApi = {
  requestOtp: (email) =>
    api.post('/auth/otp/request/', { email }).then((r) => r.data),

  verifyOtp: (email, code) =>
    api.post('/auth/otp/verify/', { email, code }).then((r) => r.data),

  refreshToken: (refresh) =>
    api.post('/auth/token/refresh/', { refresh }).then((r) => r.data),

  logout: (refresh) =>
    api.post('/auth/logout/', { refresh }).then((r) => r.data),
}

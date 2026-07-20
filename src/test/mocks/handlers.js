import { http, HttpResponse } from 'msw'

// Mock API handlers used in tests.
// Add more here as you write tests for each feature.
export const handlers = [
  http.post('/api/v1/auth/otp/request/', () =>
    HttpResponse.json({ detail: 'OTP sent.' })
  ),
  http.post('/api/v1/auth/otp/verify/', () =>
    HttpResponse.json({
      access: 'mock-access-token',
      refresh: 'mock-refresh-token',
      user: {
        id: 'mock-uuid',
        email: 'test@sit.edu.in',
        first_name: 'Test',
        last_name: 'User',
        is_platform_admin: false,
      },
    })
  ),
]

import '@testing-library/jest-dom'
import { server } from './mocks/server'

// Start mock server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))

// Reset handlers after each test so they don't bleed between tests
afterEach(() => server.resetHandlers())

// Clean up after all tests
afterAll(() => server.close())

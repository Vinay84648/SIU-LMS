import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// This server intercepts fetch/axios calls during tests
export const server = setupServer(...handlers)

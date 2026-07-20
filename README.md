# SIU LMS — Frontend

React + Vite SPA for the SIU Learning Management System.
Plain JavaScript (no TypeScript). Talks to the Django backend via REST API.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [What Each Folder Does](#what-each-folder-does)
4. [How to Run Locally](#how-to-run-locally)
5. [Environment Variables](#environment-variables)
6. [How to Add a New Page](#how-to-add-a-new-page)
7. [How to Add a New API Call](#how-to-add-a-new-api-call)
8. [How to Add a New Store Slice](#how-to-add-a-new-store-slice)
9. [How to Run Tests](#how-to-run-tests)
10. [Key Design Decisions](#key-design-decisions)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + Vite 8 |
| Routing | React Router v6 |
| Server state | TanStack Query v5 |
| Client state | Zustand |
| Forms | React Hook Form + Zod |
| HTTP client | Axios |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Charts | Recharts |
| Markdown | react-markdown + rehype-sanitize |
| Tables | TanStack Table v8 |
| Toasts | Sonner |
| Tests | Vitest + Testing Library + MSW |

---

## Project Structure

```
src/
├── routes/
│   ├── index.jsx          ← ALL route definitions live here — add new routes here
│   ├── PublicLayout.jsx   ← wraps unauthenticated pages (login etc)
│   └── PrivateLayout.jsx  ← wraps authenticated pages, enforces auth guard
│
├── features/              ← one folder per domain/feature
│   └── <feature>/
│       ├── components/    ← UI components used only by this feature
│       ├── hooks/         ← React Query hooks for this feature
│       ├── <Name>Page.jsx ← the route-level page component
│       └── api.js         ← API call functions for this feature
│
├── services/
│   └── api.js             ← Axios instance with JWT interceptors and auto-refresh
│
├── store/                 ← Zustand stores, one file per domain
│   └── authStore.js       ← tokens, user, university, permissions
│
├── components/            ← shared UI used across multiple features
│   ├── ui/                ← Button, Input, Modal, Badge, etc.
│   ├── layout/            ← AppShell, Sidebar, TopBar
│   └── feedback/          ← LoadingSpinner, ErrorBoundary, EmptyState
│
├── hooks/                 ← shared hooks used across multiple features
│   └── useDebounce.js
│
├── utils/                 ← pure helper functions (no React)
│
├── test/
│   ├── setup.js           ← testing setup (jest-dom + MSW server)
│   └── mocks/
│       ├── handlers.js    ← MSW request handlers (mock API responses)
│       └── server.js      ← MSW server instance
│
├── App.jsx                ← root — sets up QueryClient + RouterProvider
├── main.jsx               ← entry point
└── index.css              ← Tailwind import
```

---

## What Each Folder Does

### `routes/`
All route definitions in one file (`index.jsx`). Two layout wrappers:
- `PublicLayout` — for pages that don't require login. If you're already logged in, it redirects you into the app.
- `PrivateLayout` — for pages that require login. If you're not logged in, it redirects to `/login`. Renders `AppShell` (sidebar + topbar) around the page.

### `features/`
Each domain has its own folder. Inside each feature:
- `components/` — UI components that only make sense within this feature
- `hooks/` — React Query hooks (`useQuery`, `useMutation`) that fetch data for this feature
- `<Name>Page.jsx` — the top-level page component that the router renders
- `api.js` — the raw API call functions (just axios calls, no React)

### `services/api.js`
The Axios instance. Handles:
- Attaching the JWT `Authorization` header to every request
- Attaching `X-Tenant-Subdomain` header for local dev
- Auto-refreshing the access token on 401 responses
- Logging out on refresh failure

Never import this in components directly. Features use it through their `api.js` or React Query hooks.

### `store/`
Zustand stores. Currently one file:
- `authStore.js` — access token, refresh token, user object, university object, permission codes

Add new stores here as needed (e.g. `uiStore.js` for sidebar open/close state).

### `components/`
Truly shared UI. Only put something here if it's used by at least two different features.
- `ui/` — pure presentational components: Button, Input, Modal, Table, Badge, etc.
- `layout/` — AppShell (overall page frame), Sidebar, TopBar
- `feedback/` — LoadingSpinner, ErrorBoundary, EmptyState

### `hooks/`
Shared React hooks that are not tied to a specific feature or API resource.
Example: `useDebounce`, `useLocalStorage`, `useMediaQuery`.

### `test/mocks/handlers.js`
Mock API responses for tests. When a test runs, MSW intercepts the HTTP call and returns whatever you define here instead of hitting the real backend.

---

## How to Run Locally

Make sure the backend is running at `http://localhost:8000`.

```bash
# Install dependencies (first time only)
npm install

# Copy env file and set your values
copy .env.example .env

# Start dev server
npm run dev
```

App opens at `http://localhost:5173`.

**About `VITE_TENANT_SUBDOMAIN`** — since you're on localhost (not a real subdomain like `sit.yourlms.com`), set this to any university subdomain you created in the backend. The frontend will send it as an `X-Tenant-Subdomain` header on every request so Django can resolve the tenant.

---

## Environment Variables

Copy `.env.example` to `.env`. Never commit `.env`.

| Variable | What it does |
|---|---|
| `VITE_API_BASE_URL` | Backend API base URL. Default: `http://localhost:8000/api/v1` |
| `VITE_TENANT_SUBDOMAIN` | Subdomain to use locally (e.g. `sit`). Sent as `X-Tenant-Subdomain` header. |

---

## How to Add a New Page

Example: adding a "Programs" page for the Department Admin.

**Step 1** — Create the page component:
```
src/features/academics/programs/ProgramsPage.jsx
```
```jsx
export function ProgramsPage() {
  return <div>Programs</div>
}
```

**Step 2** — Add the route in `src/routes/index.jsx`:
```jsx
import { ProgramsPage } from '../features/academics/programs/ProgramsPage'

// Inside the dept-admin children array:
{ path: 'programs', element: <ProgramsPage /> },
```

That's it. The page is now live at `/dept-admin/programs`.

---

## How to Add a New API Call

Example: fetching the list of programs.

**Step 1** — Add the API function in the feature's `api.js`:
```js
// src/features/academics/programs/api.js
import api from '../../../services/api'

export const programsApi = {
  list: () => api.get('/admin/programs/').then(r => r.data),
  create: (data) => api.post('/admin/programs/', data).then(r => r.data),
}
```

**Step 2** — Create a React Query hook in the feature's `hooks/` folder:
```js
// src/features/academics/programs/hooks/usePrograms.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { programsApi } from '../api'

export function usePrograms() {
  return useQuery({
    queryKey: ['programs'],
    queryFn: programsApi.list,
  })
}

export function useCreateProgram() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: programsApi.create,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['programs'] }),
  })
}
```

**Step 3** — Use the hook in the page:
```jsx
import { usePrograms } from './hooks/usePrograms'

export function ProgramsPage() {
  const { data, isLoading } = usePrograms()
  if (isLoading) return <div>Loading...</div>
  return <div>{data?.results?.map(p => <div key={p.id}>{p.name}</div>)}</div>
}
```

---

## How to Add a New Store Slice

Only create a new store for client-side state that isn't server data (server data belongs in React Query). Example: sidebar open/close state.

```js
// src/store/uiStore.js
import { create } from 'zustand'

export const useUiStore = create((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}))
```

---

## How to Run Tests

```bash
# Run all tests once
npm run test

# Watch mode (re-runs on file save)
npm run test:watch

# With coverage report
npm run test:coverage
```

Tests use Vitest + Testing Library. MSW intercepts API calls — no real backend needed for tests.

Example test:
```jsx
// src/features/auth/LoginPage.test.jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { LoginPage } from './LoginPage'

test('shows OTP page after submitting email', async () => {
  render(<MemoryRouter><LoginPage /></MemoryRouter>)
  await userEvent.type(screen.getByLabelText(/college email/i), 'test@sit.edu.in')
  await userEvent.click(screen.getByRole('button', { name: /send code/i }))
  // MSW handler returns success — assert navigation or success state
})
```

---

## Key Design Decisions

**Why `routes/` instead of `app/`?**
`routes/` is a more explicit name. Anyone new to the codebase immediately knows where to find and add routes.

**Why `PublicLayout` and `PrivateLayout` as separate components?**
Each layout has a different concern — public redirects you in if you're logged in, private redirects you out if you're not. Keeping them separate makes each one simple and easy to reason about.

**Why `services/api.js` for the Axios client but `features/<name>/api.js` for calls?**
The client (`services/api.js`) is infrastructure — JWT, interceptors, base URL. Feature API files are domain logic — what endpoints to call. Mixing them in one file would make `services/api.js` grow unbounded.

**Why Zustand instead of Redux or Context?**
Zustand is minimal — no boilerplate, no Provider wrapping, works outside React components (the Axios interceptor reads the token directly from `useAuthStore.getState()`). For the small amount of client state this app needs, Redux would be overkill.

**Why TanStack Query for server state?**
All data from the backend is server state — it needs caching, background refetch, loading/error states. TanStack Query handles all of that without manual `useEffect` + `useState` patterns. Each feature's `hooks/` folder wraps `useQuery`/`useMutation` calls so the page component stays clean.

**Why plain JavaScript instead of TypeScript?**
Company standard. JSDoc comments are used where types would otherwise be helpful.

import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { router } from './routes/index'
import CommandPalette from './components/ui/CommandPalette'
import { useUIStore } from './store/uiStore'

// Initialize react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
})

export default function App() {
  const { theme } = useUIStore()
  const [cmdOpen, setCmdOpen] = useState(false)

  // Apply dark mode class to html element
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Global keyboard shortcuts (Command Palette)
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setCmdOpen(v => !v)
      }
      if (e.key === 'Escape') setCmdOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {cmdOpen && <CommandPalette onClose={() => setCmdOpen(false)} />}
    </QueryClientProvider>
  )
}

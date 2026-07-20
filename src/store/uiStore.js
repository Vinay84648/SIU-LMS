import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUIStore = create(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      sidebarCollapsed: false,
      setSidebarCollapsed: (val) => set((state) => ({ 
        sidebarCollapsed: typeof val === 'function' ? val(state.sidebarCollapsed) : val 
      })),
      role: 'super', // temporary for UI prototyping as per Shell.jsx
      setRole: (role) => set({ role }),
    }),
    {
      name: 'lms-ui-store',
    }
  )
)

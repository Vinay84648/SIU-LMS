import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * Auth store — tokens, user, university, and resolved permissions.
 *
 * Persisted to localStorage: accessToken, refreshToken, permissions
 * NOT persisted: user, university (re-fetched on load)
 */
export const useAuthStore = create(
  persist(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      // { id, email, firstName, lastName, isPlatformAdmin }
      university: null,
      // { id, name, subdomain, logoUrl, academicCalendarType, periodsPerYear, settings }
      permissions: [],
      // string[] of permission codes e.g. ['content.publish', 'grade.view_own']

      setTokens: (access, refresh) =>
        set({ accessToken: access, refreshToken: refresh }),

      setUser: (user) => set({ user }),

      setUniversity: (university) => set({ university }),

      setPermissions: (permissions) => set({ permissions }),

      logout: () =>
        set({
          accessToken: null,
          refreshToken: null,
          user: null,
          university: null,
          permissions: [],
        }),

      /**
       * Check if current user has a permission.
       * Platform admins bypass all checks.
       */
      hasPermission: (code) => {
        const { user, permissions } = get()
        if (!user) return false
        if (user.isPlatformAdmin) return true
        return permissions.includes(code)
      },
    }),
    {
      name: 'lms-auth',
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        permissions: state.permissions,
      }),
    }
  )
)

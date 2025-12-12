import { create } from 'zustand';
import { UserProfile, Job, MatchResult } from '../types';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
}

interface AppState {
  // User State
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
  updateUser: (updates: Partial<UserProfile>) => void;

  // Jobs State
  localJobs: Job[];
  webJobs: Job[];
  setLocalJobs: (jobs: Job[]) => void;
  setWebJobs: (jobs: Job[]) => void;

  // Matching State
  matches: MatchResult[];
  setMatches: (matches: MatchResult[]) => void;

  // Applied Jobs State
  appliedJobs: Set<string>;
  addAppliedJob: (jobId: string) => void;
  removeAppliedJob: (jobId: string) => void;

  // Notifications State
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;

  // Online Status
  isOnline: boolean;
  setIsOnline: (status: boolean) => void;

  // Loading States
  isLoadingJobs: boolean;
  isLoadingUser: boolean;
  setIsLoadingJobs: (loading: boolean) => void;
  setIsLoadingUser: (loading: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  // User State
  user: null,
  setUser: (user) => set({ user }),
  updateUser: (updates) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updates } : null,
    })),

  // Jobs State
  localJobs: [],
  webJobs: [],
  setLocalJobs: (jobs) => set({ localJobs: jobs }),
  setWebJobs: (jobs) => set({ webJobs: jobs }),

  // Matching State
  matches: [],
  setMatches: (matches) => set({ matches }),

  // Applied Jobs State
  appliedJobs: new Set<string>(),
  addAppliedJob: (jobId) =>
    set((state) => ({
      appliedJobs: new Set([...state.appliedJobs, jobId]),
    })),
  removeAppliedJob: (jobId) =>
    set((state) => {
      const newSet = new Set(state.appliedJobs);
      newSet.delete(jobId);
      return { appliedJobs: newSet };
    }),

  // Notifications State
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          ...notification,
          id: Date.now().toString(),
          timestamp: new Date(),
        },
      ],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
  clearNotifications: () => set({ notifications: [] }),

  // Online Status
  isOnline: true,
  setIsOnline: (status) => set({ isOnline: status }),

  // Loading States
  isLoadingJobs: false,
  isLoadingUser: false,
  setIsLoadingJobs: (loading) => set({ isLoadingJobs: loading }),
  setIsLoadingUser: (loading) => set({ isLoadingUser: loading }),
}));

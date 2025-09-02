import { create } from 'zustand';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  preferences: {
    notifications: boolean;
    theme: 'light' | 'dark';
    language: string;
  };
}

interface UserState {
  profile: UserProfile | null;
  isLoading: boolean;
  updateProfile: (updates: Partial<UserProfile>) => void;
  updatePreferences: (preferences: Partial<UserProfile['preferences']>) => void;
  setLoading: (loading: boolean) => void;
}

export const useUserStore = create<UserState>((set, get) => ({
  profile: null,
  isLoading: false,
  
  updateProfile: (updates) => set((state) => ({
    profile: state.profile ? { ...state.profile, ...updates } : null
  })),
  
  updatePreferences: (preferences) => set((state) => ({
    profile: state.profile ? {
      ...state.profile,
      preferences: { ...state.profile.preferences, ...preferences }
    } : null
  })),
  
  setLoading: (loading) => set({ isLoading: loading }),
}));
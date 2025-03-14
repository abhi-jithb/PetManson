import { create } from 'zustand';
import { User, Badge, SavedMatch, Pet } from '../types';

interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  addBadge: (badge: Badge) => void;
  savePetMatch: (match: SavedMatch) => void;
  addAdoptedPet: (pet: Pet) => void;
  likeStory: (storyId: string) => void;
}

const useUserStore = create<UserState>((set) => ({
  currentUser: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    // In a real app, this would make an API call
    const mockUser: User = {
      id: '1',
      username: 'demo_user',
      email,
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      joinDate: new Date().toISOString(),
      bio: 'Pet lover and advocate for animal adoption',
      adoptedPets: [],
      savedMatches: [],
      likedStories: [],
      badges: [
        {
          id: '1',
          name: 'Early Adopter',
          description: 'One of the first to join our community',
          icon: '🌟',
          dateEarned: new Date().toISOString()
        }
      ]
    };

    set({ currentUser: mockUser, isAuthenticated: true });
  },

  logout: () => {
    set({ currentUser: null, isAuthenticated: false });
  },

  updateProfile: (updates) => {
    set((state) => ({
      currentUser: state.currentUser ? { ...state.currentUser, ...updates } : null
    }));
  },

  addBadge: (badge) => {
    set((state) => ({
      currentUser: state.currentUser
        ? {
            ...state.currentUser,
            badges: [...state.currentUser.badges, badge]
          }
        : null
    }));
  },

  savePetMatch: (match) => {
    set((state) => ({
      currentUser: state.currentUser
        ? {
            ...state.currentUser,
            savedMatches: [...state.currentUser.savedMatches, match]
          }
        : null
    }));
  },

  addAdoptedPet: (pet) => {
    set((state) => ({
      currentUser: state.currentUser
        ? {
            ...state.currentUser,
            adoptedPets: [...state.currentUser.adoptedPets, pet]
          }
        : null
    }));
  },

  likeStory: (storyId) => {
    set((state) => ({
      currentUser: state.currentUser
        ? {
            ...state.currentUser,
            likedStories: [...state.currentUser.likedStories, storyId]
          }
        : null
    }));
  }
}));

export default useUserStore
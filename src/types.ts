export interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'bird' | 'rabbit';
  size: 'small' | 'medium' | 'large';
  energyLevel: 'low' | 'medium' | 'high';
  goodWith: ('children' | 'dogs' | 'cats')[];
  experienceNeeded: 'beginner' | 'intermediate' | 'advanced';
  spaceRequired: 'apartment' | 'house' | 'large-yard';
  imageUrl: string;
  description: string;
  age: number;
  personality: ('playful' | 'calm' | 'social' | 'independent' | 'trainable')[];
}

export interface UserPreferences {
  petType: string[];
  livingSpace: string;
  hasChildren: boolean;
  hasOtherPets: boolean;
  experienceLevel: string;
  energyPreference: string;
  sizePreference: string[];
  personalityPreference: string[];
}

export interface MatchFeedback {
  petId: string;
  userId: string;
  rating: number;
  comment?: string;
  timestamp: number;
}

export interface SavedMatch {
  pet: Pet;
  score: number;
  savedAt: number;
}

export interface AdoptionStory {
  id: string;
  petName: string;
  petType: string;
  ownerName: string;
  imageUrl: string;
  story: string;
  adoptionDate: string;
  likes: number;
}

export interface PetCareGuide {
  id: string;
  title: string;
  content: string;
  category: 'basic' | 'training' | 'health' | 'first-time';
  petTypes: string[];
  readTime: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
  joinDate: string;
  bio: string;
  adoptedPets: Pet[];
  savedMatches: SavedMatch[];
  likedStories: string[];
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  dateEarned: string;
}

export interface ForumPost {
  id: string;
  userId: string;
  title: string;
  content: string;
  category: 'general' | 'advice' | 'success-stories' | 'health' | 'training';
  tags: string[];
  createdAt: string;
  updatedAt: string;
  likes: number;
  replies: ForumReply[];
}

export interface ForumReply {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
  likes: number;
  isAnswer: boolean;
}
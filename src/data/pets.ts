import { Pet } from '../types';

export const pets: Pet[] = [
  {
    id: '1',
    name: 'Luna',
    type: 'dog',
    size: 'medium',
    energyLevel: 'high',
    goodWith: ['children', 'dogs'],
    experienceNeeded: 'intermediate',
    spaceRequired: 'house',
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800',
    description: 'Luna is a playful and energetic Border Collie who loves to run and play fetch.',
    age: 2,
    personality: ['playful', 'trainable', 'social']
  },
  {
    id: '2',
    name: 'Oliver',
    type: 'cat',
    size: 'small',
    energyLevel: 'low',
    goodWith: ['cats', 'children'],
    experienceNeeded: 'beginner',
    spaceRequired: 'apartment',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
    description: 'Oliver is a calm and gentle cat who enjoys lounging in sunny spots.',
    age: 4,
    personality: ['calm', 'independent']
  },
  {
    id: '3',
    name: 'Charlie',
    type: 'dog',
    size: 'small',
    energyLevel: 'medium',
    goodWith: ['children', 'dogs', 'cats'],
    experienceNeeded: 'beginner',
    spaceRequired: 'apartment',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800',
    description: 'Charlie is a friendly Corgi who gets along with everyone.',
    age: 3,
    personality: ['social', 'playful', 'trainable']
  },
  {
    id: '4',
    name: 'Bella',
    type: 'rabbit',
    size: 'small',
    energyLevel: 'medium',
    goodWith: ['children'],
    experienceNeeded: 'beginner',
    spaceRequired: 'apartment',
    imageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=800',
    description: 'Bella is a sweet rabbit who loves to hop around and explore.',
    age: 1,
    personality: ['calm', 'social']
  },
  {
    id: '5',
    name: 'Rio',
    type: 'bird',
    size: 'small',
    energyLevel: 'high',
    goodWith: ['children'],
    experienceNeeded: 'intermediate',
    spaceRequired: 'apartment',
    imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=800',
    description: 'Rio is a colorful parakeet who loves to sing and interact with people.',
    age: 2,
    personality: ['social', 'playful']
  }
];
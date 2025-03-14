import { PetCareGuide } from '../types';

export const petCareGuides: PetCareGuide[] = [
  {
    id: '1',
    title: 'First-Time Pet Owner\'s Guide',
    content: `# Welcome to Pet Parenthood!

## Essential First Steps
- Set up a comfortable space for your new pet
- Schedule a vet visit within the first week
- Stock up on appropriate food and supplies
- Pet-proof your home

## Daily Care Routine
1. Regular feeding schedule
2. Fresh water always available
3. Exercise and playtime
4. Grooming basics

## Common Challenges
- Adjustment period expectations
- Basic training tips
- Signs of stress to watch for
- When to contact a vet`,
    category: 'first-time',
    petTypes: ['dog', 'cat', 'rabbit', 'bird'],
    readTime: 5
  },
  {
    id: '2',
    title: 'Basic Training Techniques',
    content: `# Training Your New Pet

## Positive Reinforcement
- Use treats and praise
- Timing is crucial
- Consistency is key
- Keep sessions short

## Essential Commands
1. Name recognition
2. Basic obedience
3. House training
4. Leash training (for dogs)

## Problem Behaviors
- Addressing common issues
- Prevention techniques
- When to seek professional help`,
    category: 'training',
    petTypes: ['dog', 'cat'],
    readTime: 8
  },
  {
    id: '3',
    title: 'Health & Wellness Guide',
    content: `# Keeping Your Pet Healthy

## Preventive Care
- Vaccination schedule
- Regular check-ups
- Dental care
- Parasite prevention

## Nutrition
1. Understanding pet food labels
2. Age-appropriate diets
3. Portion control
4. Common food allergies

## Emergency Care
- First aid basics
- Signs of illness
- Emergency kit essentials
- When to visit the vet`,
    category: 'health',
    petTypes: ['dog', 'cat', 'rabbit', 'bird'],
    readTime: 10
  }
];
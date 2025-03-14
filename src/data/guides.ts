// Import necessary types
import { PetCareGuide } from '../types';

// Define pet care guides
export const petCareGuides: PetCareGuide[] = [
  {
    id: '1',
    title: "First-Time Pet Owner's Guide",
    content: `Welcome to Pet Parenthood!

## Preparation

- **Prepare a Comfortable Space**: Set up bedding, toys, and a safe retreat area. Ensure your home is pet-proofed by securing loose wires and removing toxic items.
- **Vet Check-Up**: Schedule an initial visit within the first week to discuss diet, health, and behavior.
- **Essential Supplies**: Food, bowls, toys, grooming tools, and a leash for dogs.
- **Pet Insurance**: Consider insurance to cover unexpected health emergencies.

## Daily Care Routine

1. **Feeding**: Follow age and size-appropriate meal schedules. Puppies need 3-4 meals a day, while adult dogs typically eat twice a day.
2. **Hydration**: Fresh water should always be available.
3. **Exercise & Play**: Provide physical and mental stimulation through regular walks and playtime.
4. **Grooming**: Brush, trim nails, and bathe as needed to maintain hygiene.

## Common Challenges

- **Adjustment Period**: Most pets need 2-4 weeks to settle.
- **Training Basics**: Start with simple commands and positive reinforcement.
- **Signs of Stress**: Look for hiding, appetite changes, or unusual behavior.
- **When to Call the Vet**: If you notice lethargy, vomiting, or drastic behavior shifts.

## Bonding Tips

- Spend quality time together daily.
- Learn to read body language.
- Respect boundaries and preferences.
- Celebrate progress with treats and praise.

## Resources

- **[1] Village Animal Hospital**: <a href="https://village-ah.com/owning-your-first-dog-a-comprehensive-guide-for-new-pet-owners/" target="_blank">https://village-ah.com/owning-your-first-dog-a-comprehensive-guide-for-new-pet-owners/</a>
- **[2] Rover.com**: <a href="https://www.rover.com/uk/blog/first-time-dog-owner/" target="_blank">https://www.rover.com/uk/blog/first-time-dog-owner/</a>
- **[3] The Honest Kitchen**: <a href="https://www.thehonestkitchen.com/blogs/pet-tips-training/first-time-dog-owner-checklist" target="_blank">https://www.thehonestkitchen.com/blogs/pet-tips-training/first-time-dog-owner-checklist</a>
- **[5] Doggyville India**: <a href="https://doggyvilleindia.in/essential-tips-for-new-dog-owners/" target="_blank">https://doggyvilleindia.in/essential-tips-for-new-dog-owners/</a>`,
    category: 'first-time',
    petTypes: ['dog', 'cat', 'rabbit', 'bird', 'small-mammal'],
    readTime: 10
  },
  {
    id: '2',
    title: 'Basic Training Techniques',
    content: `# Training Your New Pet

## Positive Reinforcement

- **Reward-Based Training**: Use treats, praise, and play.
- **Timing Matters**: Reward immediately after the behavior.
- **Consistency is Key**: Use the same commands and signals.
- **Short Sessions**: 5-15 minute training blocks work best.

## Essential Commands

1. **Name Recognition**: Teach response to their name.
2. **Basic Obedience**: Sit, stay, and come.
3. **House Training**: Set a bathroom routine and reward success.
4. **Leash Training**: Introduce leash walking gradually.

## Managing Behavioral Issues

- **Chewing/Scratching**: Provide safe alternatives.
- **Jumping/Climbing**: Reinforce keeping all paws on the ground.
- **Excessive Barking/Vocalization**: Address triggers and use the “quiet” command.
- **Aggression**: Identify triggers and consult a professional.

## Advanced Training

- **Clicker Training**: Uses sound markers for precision.
- **Enrichment Activities**: Puzzle toys and problem-solving games.
- **Socialization**: Expose pets to new people and environments.

## Resources

- **[1] Village Animal Hospital**: <a href="https://village-ah.com/owning-your-first-dog-a-comprehensive-guide-for-new-pet-owners/" target="_blank">https://village-ah.com/owning-your-first-dog-a-comprehensive-guide-for-new-pet-owners/</a>
- **[2] Rover.com**: <a href="https://www.rover.com/uk/blog/first-time-dog-owner/" target="_blank">https://www.rover.com/uk/blog/first-time-dog-owner/</a>
- **[3] The Honest Kitchen**: <a href="https://www.thehonestkitchen.com/blogs/pet-tips-training/first-time-dog-owner-checklist" target="_blank">https://www.thehonestkitchen.com/blogs/pet-tips-training/first-time-dog-owner-checklist</a>
- **[5] Doggyville India**: <a href="https://doggyvilleindia.in/essential-tips-for-new-dog-owners/" target="_blank">https://doggyvilleindia.in/essential-tips-for-new-dog-owners/</a>`,
    category: 'training',
    petTypes: ['dog', 'cat', 'bird'],
    readTime: 12
  },
  {
    id: '3',
    title: 'Health & Wellness Guide',
    content: `# Keeping Your Pet Healthy

## Preventive Care

- **Vaccinations**: Follow the vet-recommended schedule.
- **Regular Check-Ups**: Annual exams; bi-annual for senior pets.
- **Dental Hygiene**: Brushing and dental treats.
- **Parasite Prevention**: Flea, tick, and worm protection.

## Nutrition Basics

1. **Understanding Food Labels**: Look for quality ingredients.
2. **Life-Stage Diets**: Adjust for growth, adult maintenance, and senior needs.
3. **Portion Control**: Follow feeding guidelines.
4. **Allergy Awareness**: Watch for symptoms and consult a vet if needed.

## Emergency Preparedness

- **First Aid Basics**: Learn CPR and wound care.
- **Signs of Illness**: Monitor appetite, hydration, and bathroom habits.
- **Emergency Kit**: Include bandages, antiseptics, and a thermometer.
- **When to Visit the Vet**: Recognize urgent symptoms.

## Enrichment & Exercise

- **Tailored Physical Activity**: Based on breed, age, and health.
- **Mental Stimulation**: Training sessions and problem-solving toys.
- **Environmental Enrichment**: Hiding spots, interactive areas.
- **Rest & Recovery**: Ensure adequate sleep for overall well-being.

## Resources

- **[1] Village Animal Hospital**: <a href="https://village-ah.com/owning-your-first-dog-a-comprehensive-guide-for-new-pet-owners/" target="_blank">https://village-ah.com/owning-your-first-dog-a-comprehensive-guide-for-new-pet-owners/</a>
- **[2] Rover.com**: <a href="https://www.rover.com/uk/blog/first-time-dog-owner/" target="_blank">https://www.rover.com/uk/blog/first-time-dog-owner/</a>
- **[3] The Honest Kitchen**: <a href=A"https://www.thehonestkitchen.com/blogs/pet-tips-training/first-time-dog-owner-checklist" target="_blank">https://www.thehonestkitchen.com/blogs/pet-tips-training/first-time-dog-owner-checklist</a>
- **[5] Doggyville India**: <a href="https://doggyvilleindia.in/essential-tips-for-new-dog-owners/" target="_blank">https://doggyvilleindia.in/essential-tips-for-new-dog-owners/</a>`,
    category: 'health',
    petTypes: ['dog', 'cat', 'rabbit', 'bird', 'small-mammal'],
    readTime: 14
  }
];

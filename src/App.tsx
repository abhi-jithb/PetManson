import React, { useState, useEffect } from 'react';
import { Pet, UserPreferences, MatchFeedback, SavedMatch } from './types';
import { pets } from './data/pets';
import { adoptionStories } from './data/stories';
import { petCareGuides } from './data/guides';
import QuestionnaireForm from './components/QuestionnaireForm';
import PetCard from './components/PetCard';
import AdoptionStories from './components/AdoptionStories';
import PetCareResources from './components/PetCareResources';
import UserProfile from './components/UserProfile';
import Forum from './components/Forum';
import { Heart, BookmarkCheck, RotateCcw, BookOpen, Users, MessageSquare, User, Loader } from 'lucide-react';
import useUserStore from './store/userStore';

// Updated Loading component directly in App.tsx
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="mb-4 animate-spin">
        <Loader className="w-12 h-12 text-blue-500" />
      </div>
      <p className="text-lg text-gray-600">Finding your perfect pet match...</p>
      <div className="mt-8 max-w-md">
        <img 
          src=".logo.png" 
          alt="Pets waiting to be matched" 
          className="rounded-lg shadow-md opacity-75"
        />
      </div>
    </div>
  );
};

type View = 'quiz' | 'matches' | 'saved' | 'stories' | 'resources' | 'profile' | 'forum';

function App() {
  const [matches, setMatches] = useState<Array<{ pet: Pet; score: number }> | null>(null);
  const [savedMatches, setSavedMatches] = useState<SavedMatch[]>([]);
  const [currentView, setCurrentView] = useState<View>('quiz');
  const [feedbackHistory, setFeedbackHistory] = useState<MatchFeedback[]>([]);
  const { isAuthenticated, login } = useUserStore();
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    const saved = localStorage.getItem('savedMatches');
    if (saved) {
      setSavedMatches(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedMatches', JSON.stringify(savedMatches));
  }, [savedMatches]);

  const handleSubmit = (preferences: UserPreferences) => {
    setLoading(true); // Show loading
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
  
    setTimeout(() => { // Simulating a fetch delay
      const matchedPets = pets
        .map(pet => ({
          pet,
          score: calculateMatchScore(pet, preferences)
        }))
        .sort((a, b) => b.score - a.score);
  
      setMatches(matchedPets);
      setCurrentView('matches');
      setLoading(false); // Hide loading
    }, 2000); // Simulate API delay
  };
  

  const handleFeedback = (feedback: MatchFeedback) => {
    setFeedbackHistory(prev => [...prev, feedback]);
  };

  const handleSaveMatch = (match: { pet: Pet; score: number }) => {
    const savedMatch: SavedMatch = {
      ...match,
      savedAt: Date.now()
    };
    setSavedMatches(prev => {
      const exists = prev.some(m => m.pet.id === match.pet.id);
      if (exists) {
        return prev.filter(m => m.pet.id !== match.pet.id);
      }
      return [...prev, savedMatch];
    });
  };

  const renderContent = () => {
    if (loading) return <Loading />; // Show loading when fetching data
  
    switch (currentView) {
      case 'quiz':
        return <QuestionnaireForm onSubmit={handleSubmit} />;
      case 'matches':
      case 'saved':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setCurrentView('quiz')}
                className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800"
              >
                <RotateCcw className="w-5 h-5" />
                Start Over
              </button>
              <h2 className="text-2xl font-semibold">
                {currentView === 'saved' ? 'Saved Matches' : 'Your Matches'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(currentView === 'saved' ? savedMatches : matches)?.map((match) => (
                <PetCard
                  key={match.pet.id}
                  pet={match.pet}
                  matchScore={match.score}
                  onFeedback={handleFeedback}
                  onSave={() => handleSaveMatch(match)}
                  isSaved={savedMatches.some(m => m.pet.id === match.pet.id)}
                />
              ))}
              {currentView === 'saved' && savedMatches.length === 0 && (
                <div className="col-span-full text-center py-8 text-gray-500">
                  No saved matches yet. Save some matches to view them later!
                </div>
              )}
            </div>
          </div>
        );
      case 'stories':
        return <AdoptionStories stories={adoptionStories} />;
      case 'resources':
        return <PetCareResources guides={petCareGuides} />;
      case 'profile':
        return <UserProfile />;
      case 'forum':
        return <Forum />;
      default:
        return null;
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Heart className="w-8 h-8 text-red-500" />
            Pet Manson
          </h1>
          <p className="text-lg text-gray-600 mb-6">
              "Every Paw Deserves a Home"
          </p>
          <div className="flex justify-center gap-4">
            <NavButton
              icon={<Heart />}
              label="Find Match"
              isActive={currentView === 'quiz' || currentView === 'matches'}
              onClick={() => setCurrentView(matches ? 'matches' : 'quiz')}
            />
            <NavButton
              icon={<BookmarkCheck />}
              label="Saved"
              isActive={currentView === 'saved'}
              onClick={() => setCurrentView('saved')}
              badge={savedMatches.length}
            />
            <NavButton
              icon={<Users />}
              label="Stories"
              isActive={currentView === 'stories'}
              onClick={() => setCurrentView('stories')}
            />
            <NavButton
              icon={<BookOpen />}
              label="Resources"
              isActive={currentView === 'resources'}
              onClick={() => setCurrentView('resources')}
            />
            <NavButton
              icon={<MessageSquare />}
              label="Forum"
              isActive={currentView === 'forum'}
              onClick={() => setCurrentView('forum')}
            />
            {isAuthenticated ? (
              <NavButton
                icon={<User />}
                label="Profile"
                isActive={currentView === 'profile'}
                onClick={() => setCurrentView('profile')}
              />
            ) : (
              <button
                onClick={() => login('demo@example.com', 'password')}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
}


interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  badge?: number;
}

function NavButton({ icon, label, isActive, onClick, badge }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors relative ${
        isActive
          ? 'bg-blue-500 text-white'
          : 'bg-white text-gray-600 hover:bg-gray-50'
      }`}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: 'w-5 h-5'
      })}
      {label}
      {badge !== undefined && badge > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
          {badge}
        </span>
      )}
    </button>
  );
}

function calculateMatchScore(pet: Pet, preferences: UserPreferences): number {
  let score = 0;
  let totalFactors = 0;

  // Pet type match
  if (preferences.petType.includes(pet.type)) {
    score += 20;
  }
  totalFactors += 20;

  // Living space compatibility
  const spaceMap = {
    apartment: ['apartment'],
    house: ['apartment', 'house'],
    'large-yard': ['apartment', 'house', 'large-yard'],
  };
  if (spaceMap[preferences.livingSpace as keyof typeof spaceMap]?.includes(pet.spaceRequired)) {
    score += 20;
  }
  totalFactors += 20;

  // Experience level match
  const experienceLevels = ['beginner', 'intermediate', 'advanced'];
  const userExpIndex = experienceLevels.indexOf(preferences.experienceLevel);
  const petExpIndex = experienceLevels.indexOf(pet.experienceNeeded);
  if (userExpIndex >= petExpIndex) {
    score += 20;
  }
  totalFactors += 20;

  // Energy level match
  if (preferences.energyPreference === pet.energyLevel) {
    score += 20;
  }
  totalFactors += 20;

  // Children and other pets compatibility
  if (preferences.hasChildren && pet.goodWith.includes('children')) {
    score += 10;
  }
  if (preferences.hasOtherPets && (pet.goodWith.includes('dogs') || pet.goodWith.includes('cats'))) {
    score += 10;
  }
  totalFactors += 20;

  // Personality match
  const personalityMatches = pet.personality.filter(trait => 
    preferences.personalityPreference.includes(trait)
  ).length;
  score += (personalityMatches / pet.personality.length) * 20;
  totalFactors += 20;

  return Math.round((score / totalFactors) * 100);
}

export default App;
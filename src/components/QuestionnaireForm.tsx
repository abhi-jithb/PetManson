import React, { useState, useEffect } from 'react';
import { UserPreferences } from '../types';
import { Check, Home, Users, Brain, Zap, Ruler, Sparkles } from 'lucide-react';

interface QuestionnaireFormProps {
  onSubmit: (preferences: UserPreferences) => void;
}

export default function QuestionnaireForm({ onSubmit }: QuestionnaireFormProps) {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<UserPreferences>({
    petType: [],
    livingSpace: '',
    hasChildren: false,
    hasOtherPets: false,
    experienceLevel: '',
    energyPreference: '',
    sizePreference: [],
    personalityPreference: []
  });

  // Load saved preferences from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('userPreferences');
    if (saved) {
      setPreferences(JSON.parse(saved));
    }
  }, []);

  const updatePreference = (key: keyof UserPreferences, value: any) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Home className="w-5 h-5" />
              Living Situation
            </h2>
            <div className="space-y-2">
              <label className="block text-sm font-medium">What type of home do you live in?</label>
              <select
                className="w-full p-2 border rounded-md"
                value={preferences.livingSpace}
                onChange={(e) => updatePreference('livingSpace', e.target.value)}
              >
                <option value="">Select...</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="large-yard">House with Large Yard</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Users className="w-5 h-5" />
              Household Members
            </h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.hasChildren}
                  onChange={(e) => updatePreference('hasChildren', e.target.checked)}
                  className="rounded"
                />
                <span>Do you have children?</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.hasOtherPets}
                  onChange={(e) => updatePreference('hasOtherPets', e.target.checked)}
                  className="rounded"
                />
                <span>Do you have other pets?</span>
              </label>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Experience Level
            </h2>
            <div className="space-y-2">
              <label className="block text-sm font-medium">How experienced are you with pets?</label>
              <select
                className="w-full p-2 border rounded-md"
                value={preferences.experienceLevel}
                onChange={(e) => updatePreference('experienceLevel', e.target.value)}
              >
                <option value="">Select...</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Energy & Personality Preferences
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Preferred energy level:</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={preferences.energyPreference}
                  onChange={(e) => updatePreference('energyPreference', e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="low">Low Energy</option>
                  <option value="medium">Medium Energy</option>
                  <option value="high">High Energy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Desired personality traits:</label>
                <div className="grid grid-cols-2 gap-2">
                  {['playful', 'calm', 'social', 'independent', 'trainable'].map(trait => (
                    <label key={trait} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={preferences.personalityPreference.includes(trait)}
                        onChange={(e) => {
                          const newTraits = e.target.checked
                            ? [...preferences.personalityPreference, trait]
                            : preferences.personalityPreference.filter(t => t !== trait);
                          updatePreference('personalityPreference', newTraits);
                        }}
                        className="rounded"
                      />
                      <span className="capitalize">{trait}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred pet types:</label>
                <div className="grid grid-cols-2 gap-2">
                  {['dog', 'cat', 'bird', 'rabbit'].map(type => (
                    <label key={type} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={preferences.petType.includes(type)}
                        onChange={(e) => {
                          const newTypes = e.target.checked
                            ? [...preferences.petType, type]
                            : preferences.petType.filter(t => t !== type);
                          updatePreference('petType', newTypes);
                        }}
                        className="rounded"
                      />
                      <span className="capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return preferences.livingSpace !== '';
      case 2:
        return true; // These are optional
      case 3:
        return preferences.experienceLevel !== '';
      case 4:
        return (
          preferences.energyPreference !== '' &&
          preferences.petType.length > 0 &&
          preferences.personalityPreference.length > 0
        );
      default:
        return false;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= stepNumber ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {step > stepNumber ? <Check className="w-5 h-5" /> : stepNumber}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {renderStep()}

      <div className="mt-6 flex justify-between">
        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="px-4 py-2 text-blue-600 hover:text-blue-800"
          >
            Back
          </button>
        )}
        {step < 4 ? (
          <button
            type="button"
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`px-4 py-2 rounded-md ml-auto ${
              isStepValid()
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={!isStepValid()}
            className={`px-4 py-2 rounded-md ml-auto flex items-center gap-2 ${
              isStepValid()
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            Find Matches
          </button>
        )}
      </div>
    </form>
  );
}
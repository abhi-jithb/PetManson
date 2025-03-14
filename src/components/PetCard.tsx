import React, { useState } from 'react';
import { Pet, MatchFeedback } from '../types';
import { Heart, Activity, Home, Brain, ThumbsUp, ThumbsDown, Share2 } from 'lucide-react';

interface PetCardProps {
  pet: Pet;
  matchScore: number;
  onFeedback?: (feedback: MatchFeedback) => void;
  onSave?: () => void;
  isSaved?: boolean;
}

export default function PetCard({ pet, matchScore, onFeedback, onSave, isSaved }: PetCardProps) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [comment, setComment] = useState('');

  const handleFeedback = (rating: number) => {
    if (onFeedback) {
      onFeedback({
        petId: pet.id,
        userId: 'anonymous', // In a real app, this would come from auth
        rating,
        comment,
        timestamp: Date.now()
      });
    }
    setShowFeedback(false);
    setComment('');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Meet ${pet.name}!`,
        text: `Check out ${pet.name}, a ${pet.age} year old ${pet.type} looking for a home!`,
        url: window.location.href
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
      <div className="relative">
        <img
          src={pet.imageUrl}
          alt={pet.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full shadow flex items-center gap-1">
          <Heart className={`w-4 h-4 ${matchScore >= 80 ? 'text-red-500' : 'text-gray-500'}`} />
          <span className="font-semibold">{matchScore}% Match</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{pet.name}</h3>
          <span className="text-gray-600">{pet.age} years old</span>
        </div>
        
        <p className="text-gray-600 mb-4">{pet.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center gap-1 text-sm">
            <Activity className="w-4 h-4 text-blue-500" />
            <span className="capitalize">{pet.energyLevel} Energy</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Home className="w-4 h-4 text-green-500" />
            <span className="capitalize">{pet.spaceRequired.replace('-', ' ')}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Brain className="w-4 h-4 text-purple-500" />
            <span className="capitalize">{pet.experienceNeeded} Level</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Personality:</h4>
          <div className="flex flex-wrap gap-2">
            {pet.personality.map((trait) => (
              <span
                key={trait}
                className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm capitalize"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Good With:</h4>
          <div className="flex flex-wrap gap-2">
            {pet.goodWith.map((trait) => (
              <span
                key={trait}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm capitalize"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <div className="flex gap-2">
            <button
              onClick={() => setShowFeedback(!showFeedback)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
              title="Give Feedback"
            >
              <ThumbsUp className="w-5 h-5" />
            </button>
            <button
              onClick={handleShare}
              className="text-gray-600 hover:text-blue-600 transition-colors"
              title="Share"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={onSave}
            className={`px-4 py-2 rounded-md transition-colors ${
              isSaved
                ? 'bg-gray-100 text-gray-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isSaved ? 'Saved' : 'Save Match'}
          </button>
        </div>

        {showFeedback && (
          <div className="mt-4 pt-4 border-t">
            <h4 className="text-sm font-semibold mb-2">How's this match?</h4>
            <div className="flex gap-4 mb-2">
              <button
                onClick={() => handleFeedback(1)}
                className="flex items-center gap-1 text-green-600"
              >
                <ThumbsUp className="w-5 h-5" /> Good Match
              </button>
              <button
                onClick={() => handleFeedback(-1)}
                className="flex items-center gap-1 text-red-600"
              >
                <ThumbsDown className="w-5 h-5" /> Not for Me
              </button>
            </div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Any additional feedback? (optional)"
              className="w-full p-2 border rounded-md"
              rows={2}
            />
          </div>
        )}
      </div>
    </div>
  );
}
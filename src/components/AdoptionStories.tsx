import React from 'react';
import { format } from 'date-fns';
import { AdoptionStory } from '../types';
import { Heart, Clock } from 'lucide-react';

interface AdoptionStoriesProps {
  stories: AdoptionStory[];
}

export default function AdoptionStories({ stories }: AdoptionStoriesProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Adoption Success Stories
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-[1.02]"
          >
            <img
              src={story.imageUrl}
              alt={`${story.petName} with ${story.ownerName}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{story.petName}'s Story</h3>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {format(new Date(story.adoptionDate), 'MMM d, yyyy')}
                </span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-4">{story.story}</p>
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-sm text-gray-500">
                  Adopted by {story.ownerName}
                </span>
                <button className="flex items-center gap-1 text-red-500 hover:text-red-600">
                  <Heart className="w-5 h-5" />
                  {story.likes}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
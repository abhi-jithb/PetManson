import React, { useState } from 'react';
import { PetCareGuide } from '../types';
import { Book, Clock, Filter } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface PetCareResourcesProps {
  guides: PetCareGuide[];
}

export default function PetCareResources({ guides }: PetCareResourcesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGuide, setSelectedGuide] = useState<PetCareGuide | null>(null);

  const categories = [
    { id: 'all', label: 'All Guides' },
    { id: 'first-time', label: 'First-Time Owner' },
    { id: 'training', label: 'Training' },
    { id: 'health', label: 'Health & Wellness' }
  ];

  const filteredGuides = selectedCategory === 'all'
    ? guides
    : guides.filter(guide => guide.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Pet Care Resources</h2>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-md px-3 py-1"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredGuides.map((guide) => (
          <div
            key={guide.id}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transform transition hover:scale-[1.02]"
            onClick={() => setSelectedGuide(guide)}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">{guide.title}</h3>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                {guide.readTime} min read
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {guide.petTypes.map(type => (
                <span
                  key={type}
                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm capitalize"
                >
                  {type}
                </span>
              ))}
            </div>
            <button
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              onClick={() => setSelectedGuide(guide)}
            >
              <Book className="w-5 h-5" />
              Read Guide
            </button>
          </div>
        ))}
      </div>

      {selectedGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedGuide.title}</h2>
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="prose max-w-none">
                <ReactMarkdown>{selectedGuide.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
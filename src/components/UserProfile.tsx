import React from 'react';
import { format } from 'date-fns';
import { User } from '../types';
import { Calendar, Award, Heart, PawPrint, Edit, LogOut } from 'lucide-react';
import useUserStore from '../store/userStore';

export default function UserProfile() {
  const { currentUser, logout } = useUserStore();

  if (!currentUser) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={currentUser.avatarUrl}
              alt={currentUser.username}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">{currentUser.username}</h2>
              <p className="text-gray-600">{currentUser.bio}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <Calendar className="w-4 h-4" />
                Joined {format(new Date(currentUser.joinDate), 'MMMM yyyy')}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-3 py-1 text-blue-600 hover:text-blue-800">
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-1 px-3 py-1 text-red-600 hover:text-red-800"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              Badges
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {currentUser.badges.map((badge) => (
                <div
                  key={badge.id}
                  className="bg-gray-50 rounded-lg p-3 text-center"
                  title={badge.description}
                >
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <div className="text-sm font-medium">{badge.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <PawPrint className="w-5 h-5 text-purple-500" />
              Adopted Pets
            </h3>
            <div className="space-y-3">
              {currentUser.adoptedPets.map((pet) => (
                <div key={pet.id} className="flex items-center gap-3">
                  <img
                    src={pet.imageUrl}
                    alt={pet.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{pet.name}</div>
                    <div className="text-sm text-gray-500 capitalize">
                      {pet.type}
                    </div>
                  </div>
                </div>
              ))}
              {currentUser.adoptedPets.length === 0 && (
                <p className="text-gray-500 text-sm">No pets adopted yet</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              Saved Matches
            </h3>
            <div className="space-y-3">
              {currentUser.savedMatches.map((match) => (
                <div key={match.pet.id} className="flex items-center gap-3">
                  <img
                    src={match.pet.imageUrl}
                    alt={match.pet.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{match.pet.name}</div>
                    <div className="text-sm text-gray-500">
                      {match.score}% Match
                    </div>
                  </div>
                </div>
              ))}
              {currentUser.savedMatches.length === 0 && (
                <p className="text-gray-500 text-sm">No matches saved yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
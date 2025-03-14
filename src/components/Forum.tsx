import React, { useState } from 'react';
import { ForumPost } from '../types';
import { MessageSquare, Tag, ThumbsUp, Clock, Filter } from 'lucide-react';
import { format } from 'date-fns';
import useUserStore from '../store/userStore';

const MOCK_POSTS: ForumPost[] = [
  {
    id: '1',
    userId: '1',
    title: 'Tips for First-Time Dog Owners',
    content: 'What are your essential tips for someone bringing home their first dog? Looking for advice on training, supplies, and establishing routines.',
    category: 'advice',
    tags: ['dogs', 'training', 'first-time'],
    createdAt: '2024-03-01T12:00:00Z',
    updatedAt: '2024-03-01T12:00:00Z',
    likes: 24,
    replies: [
      {
        id: '1',
        userId: '2',
        content: 'Consistency is key with training! Set a routine from day one and stick to it. Also, invest in good quality food and basic supplies before bringing your pup home.',
        createdAt: '2024-03-01T13:00:00Z',
        likes: 12,
        isAnswer: true
      }
    ]
  },
  {
    id: '2',
    userId: '3',
    title: 'Cat Behavior Question',
    content: 'My new cat keeps scratching furniture despite having multiple scratching posts. Any suggestions?',
    category: 'advice',
    tags: ['cats', 'behavior'],
    createdAt: '2024-03-02T15:00:00Z',
    updatedAt: '2024-03-02T15:00:00Z',
    likes: 15,
    replies: []
  }
];

export default function Forum() {
  const [posts, setPosts] = useState<ForumPost[]>(MOCK_POSTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { currentUser } = useUserStore();

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'general', label: 'General Discussion' },
    { id: 'advice', label: 'Advice' },
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'health', label: 'Health' },
    { id: 'training', label: 'Training' }
  ];

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Pet Community Forum</h2>
        <div className="flex items-center gap-4">
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            New Post
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                {format(new Date(post.createdAt), 'MMM d, yyyy')}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600">
                  <ThumbsUp className="w-5 h-5" />
                  {post.likes}
                </button>
                <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600">
                  <MessageSquare className="w-5 h-5" />
                  {post.replies.length}
                </button>
              </div>
              <button className="text-blue-600 hover:text-blue-800">
                View Discussion
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react'
import { motion } from 'framer-motion'
import {
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Bookmark,
} from 'lucide-react'
const STORY_AVATARS = [
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100',
  'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=100&h=100',
]
const FLOATING_AVATARS = [
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=50&h=50',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=50&h=50',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=50&h=50',
]
const POSTS = [
  {
    id: 1,
    author: 'Église La Compassion',
    avatar:
      'https://images.unsplash.com/photo-1548625361-18886594294d?auto=format&fit=crop&q=80&w=150&h=150',
    time: '2h',
    content:
      "Retrouvez-nous ce dimanche pour notre culte spécial d'adoration ! 🙏✨ #Culte #Adoration #Dimanche",
    image:
      'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800&h=600',
    likes: 245,
    comments: 18,
  },
  {
    id: 2,
    author: 'Groupe de Jeunes',
    avatar:
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=150&h=150',
    time: '4h',
    content:
      "Super moment de partage hier soir lors de notre réunion hebdomadaire. Merci à tous d'être venus ! 🔥",
    image:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800&h=600',
    likes: 189,
    comments: 42,
  },
  {
    id: 3,
    author: 'Pasteur Marc',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    time: '6h',
    content:
      'La foi déplace des montagnes. Gardez espoir en toute circonstance.',
    likes: 562,
    comments: 89,
  },
]
export function FeedPreview() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Phone Frame */}
      <div className="relative bg-white rounded-[2.5rem] shadow-2xl border-8 border-gray-900 overflow-hidden h-[600px]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>

        {/* Status Bar Mockup */}
        <div className="h-8 bg-white w-full flex justify-between items-center px-6 pt-2 text-[10px] font-semibold text-gray-900 z-10 relative">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-2.5 bg-gray-900 rounded-[1px]"></div>
            <div className="w-0.5 h-2.5 bg-gray-900 rounded-[1px]"></div>
          </div>
        </div>

        {/* App Header */}
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B35] to-[#E91E63]">
            Fil d'actualité
          </span>
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-gray-600" />
          </div>
        </div>

        {/* Stories */}
        <div className="flex gap-3 px-4 py-3 border-b border-gray-100 overflow-x-hidden">
          {STORY_AVATARS.map((url, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 min-w-[60px]"
            >
              <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-[#FF6B35] to-[#E91E63]">
                <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={url}
                    alt="Story"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="text-[10px] text-gray-500">Story</span>
            </div>
          ))}
        </div>

        {/* Feed Content */}
        <div className="overflow-y-auto h-[calc(100%-140px)] pb-4 scrollbar-hide">
          {POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.2,
              }}
              className="mb-2 bg-white"
            >
              {/* Post Header */}
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-500">{post.time}</p>
                  </div>
                </div>
                <MoreHorizontal className="w-5 h-5 text-gray-400" />
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="aspect-[4/3] bg-gray-100">
                  <img
                    src={post.image}
                    alt="Post content"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Post Actions */}
              <div className="px-4 py-3">
                <div className="flex justify-between mb-2">
                  <div className="flex gap-4">
                    <Heart className="w-6 h-6 text-gray-900 hover:text-red-500 transition-colors cursor-pointer" />
                    <MessageCircle className="w-6 h-6 text-gray-900 cursor-pointer" />
                    <Share2 className="w-6 h-6 text-gray-900 cursor-pointer" />
                  </div>
                  <Bookmark className="w-6 h-6 text-gray-900 cursor-pointer" />
                </div>
                <p className="text-sm font-semibold mb-1">
                  {post.likes} j'aime
                </p>
                <p className="text-sm text-gray-900">
                  <span className="font-semibold mr-2">{post.author}</span>
                  {post.content}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Voir les {post.comments} commentaires
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Elements for "Immersive" feel */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut',
        }}
        className="absolute -right-12 top-1/4 bg-white p-3 rounded-xl shadow-lg z-30 hidden md:block"
      >
        <Heart className="w-8 h-8 text-[#E91E63] fill-current" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute -left-8 bottom-1/3 bg-white p-3 rounded-xl shadow-lg z-30 hidden md:block"
      >
        <div className="flex -space-x-2">
          {FLOATING_AVATARS.map((url, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
            >
              <img
                src={url}
                alt={`User ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

import React from 'react';
import {blog} from '../../json/blog'

export default function Blog() {
  return (
     <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Latest Blogs</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blog.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={post.image.url}
              alt={post.image.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">
                By {post.author} • {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="px-5 pb-4 text-sm text-gray-500 italic">
              {post.image.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
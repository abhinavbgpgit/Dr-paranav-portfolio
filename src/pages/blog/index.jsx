import React from 'react';
import { useNavigate } from 'react-router-dom';
import {blog} from '../../json/blog'

export default function Blog() {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-6 rounded-lg" style={{height: '680px', width: '650px',}}>
      <div className="relative w-fit mb-5 ml-0" style={{height: '28px'}}>
        <h1 className="font-medium text-left" style={{fontSize: '18px', position: 'relative', zIndex: 2, padding: '0 8px'}}>Blog Posts</h1>
        <div style={{
          position: 'absolute',
          left: 5,
          top: '78%',
          width: '90%',
          height: '8px',
          backgroundColor: 'lightsteelblue',
          zIndex: 1,
          transform: 'translateY(-50%)'
        }}></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-9 gap-y-6 justify-start">
        {/* Make each card clickable to open detail page */}
        {blog.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition flex flex-col cursor-pointer"
            style={{ width: '190px', height: '270px' }}
            onClick={() => navigate(`/blog/${index}`)}
          >
            <img
              src={post.image.url}
              alt={post.image.alt}
              className="w-full min-h-[150px] h-[150px] object-cover"
            />
            <h2 className="text-[10px] font-semibold mb-0 w-full text-left ml-2" style={{marginTop:'10px', marginLeft:'8px'}}>{post.title}</h2>
            <p className="text-gray-500 text-[10px] mt-1 mb-0 text-left ml-2">By {post.author} • {new Date(post.date).toLocaleDateString()}</p>
            <p className="text-gray-700 text-[10px] mt-1 mb-0 text-left ml-2">{post.content}</p>
            <p className="text-gray-400 text-[9px] font-medium mt-2 mb-0 text-left ml-2">{post.image.caption}</p>
            <div className="flex flex-wrap gap-2 text-left ml-2">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import Post from './Post';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const addPost = () => {
    const newPost = {
      id: posts.length + 1,
      title: newTitle,
      content: newContent,
      comments: [],
    };
    setPosts([...posts, newPost]);
    setNewTitle('');
    setNewContent('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Site</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
        <input
          type="text"
          placeholder="Post Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Post Content"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        ></textarea>
        <button
          onClick={addPost}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Post
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">All Posts</h2>
        {posts.length === 0 ? (
          <p>No posts yet!</p>
        ) : (
          posts.map((post) => (
            <Post key={post.id} post={post} setPosts={setPosts} posts={posts} />
          ))
        )}
      </div>
    </div>
  );
}

export default Blog;

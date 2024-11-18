import React, { useState } from 'react';

function Post({ post, setPosts, posts }) {
  const [newComment, setNewComment] = useState('');

  const addComment = (postId) => {
    const updatedPosts = posts.map((p) => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [...p.comments, newComment],
        };
      }
      return p;
    });
    setPosts(updatedPosts);
    setNewComment('');
  };

  return (
    <div className="mb-8 p-6 bg-white rounded shadow-lg">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-700 mb-4">{post.content}</p>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Comments</h4>
        {post.comments.length === 0 ? (
          <p>No comments yet!</p>
        ) : (
          <ul className="list-disc pl-5">
            {post.comments.map((comment, index) => (
              <li key={index} className="text-gray-600">{comment}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={() => addComment(post.id)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}

export default Post;

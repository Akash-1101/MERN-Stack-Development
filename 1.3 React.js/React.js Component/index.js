import React from "react";

const BlogPostList = () => {
  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to React Hooks",
      author: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      title: "React Router: Navigating in Single Page Applications",
      author: "Jane Smith",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
    },
    // Add more dummy data as needed
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>Author: {post.author}</p>
            <button onClick={() => alert(`View Full Post: ${post.title}`)}>
              View Full Post
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostList;

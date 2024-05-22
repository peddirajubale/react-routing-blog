import React, { useState, useEffect } from 'react';
import './index.css';

const BlogItemDetails = ({ match }) => {
  const [blogData, setBlogData] = useState({});
  

  useEffect(() => {
    getBlogItemData();
  });

  const getBlogItemData = async () => {
    try {
      const response = await fetch(`https://apis.ccbp.in/blogs/${match.params.id}`);
      const data = await response.json();
      const updatedData = {
        title: data.title,
        imageUrl: data.image_url,
        content: data.content,
        avatarUrl: data.avatar_url,
        author: data.author,
      };
      setBlogData(updatedData);
      
    } catch (error) {
      console.error('Error fetching blog data:', error);
      
    }
  };

  const renderBlogItemDetails = () => {
    const { title, imageUrl, content, avatarUrl, author } = blogData;

    return (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    );
  };

  return (
    <div className="blog-container">
      {
        renderBlogItemDetails()
      }
    </div>
  );
};

export default BlogItemDetails;

import React from 'react';
import { useState, useEffect } from 'react';
import BlogItem from '../BlogItem';

import './index.css'


export default function BlogList() {
  const [blogData, setBlogData] = useState([]);
  

  useEffect(() => {
    getBlogsList();
  }, []);

  const getBlogsList = async () => {
    try {
      const response = await fetch("https://apis.ccbp.in/blogs");
      const data = await response.json();
      const updatedData = data.map(eachItem => ({
        id: eachItem.id,
        imageUrl: eachItem.image_url,
        avatarUrl: eachItem.avatar_url,
        title: eachItem.title,
        author: eachItem.author,
        topic: eachItem.topic
      }));
      setBlogData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul className='blog-list-container'>
      {
      blogData.map(eachItem => (
        <BlogItem blogListDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  );
}

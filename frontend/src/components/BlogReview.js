import React, { useState } from 'react';
import axios from 'axios';
import './BlogReview.css';

function BlogReview() {
  const [title, setTitle] = useState('');
  const [blogs, setBlogs] = useState([]);

  const handleSearch = async () => {
    if (!title.trim()) return;

    try {
      const response = await axios.get(`http://localhost:4000/api/blogs/search?title=${encodeURIComponent(title)}`);
      setBlogs(response.data);
    } catch (error) {
      console.error('블로그 검색 오류:', error);
    }
  };

  return (
    <div>
      {/* 검색 입력창 */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="책 제목을 입력하세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className="search-button" onClick={handleSearch}>
          🔍
        </button>
      </div>

      {/* 블로그 결과 리스트 */}
      <ul className="blog-list">
        {blogs.map((blog, index) => (
            <li key={index}>
            <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-title"
                dangerouslySetInnerHTML={{ __html: blog.title }}
            />
            <div
                className="blog-desc"
                dangerouslySetInnerHTML={{ __html: blog.description }}
            />
            <small className="blog-writer">작성자: {blog.bloggername}</small>
            </li>
        ))}
        </ul>
    </div>
  );
}

export default BlogReview;
import React, { useState } from 'react';
import axios from 'axios';
import './BookSearch.css';

function BookSearch() {
  const [keyword, setKeyword] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    if (!keyword.trim()) return;

    try {
      const response = await axios.get(`https://naveraladin-backend.onrender.com/api/books/search?keyword=${keyword}`);
      setBooks(response.data);
    } catch (error) {
      console.error('검색 실패:', error);
    }
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="책 키워드를 입력하세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className="search-button" onClick={handleSearch}>
          🔍
        </button>
      </div>

      <ul className="book-list">
        {books.map((book, index) => (
        <li key={index}>
          <img src={book.cover} alt={book.title} />
          <div className="book-info">
            <div className="book-title">{book.title}</div>
            <div className="book-meta">{book.author}</div>
            <div className="book-meta">{book.publisher} / {book.pubdate}</div>
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="book-link"
            >
          책 링크
        </a>
      </div>
    </li>
  ))}
</ul>
    </div>
  );
}

export default BookSearch;
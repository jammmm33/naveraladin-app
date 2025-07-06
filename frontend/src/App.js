import React from 'react';
import BookSearch from './components/BookSearch';
import BlogReview from './components/BlogReview';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="logo-banner">
        <h1>로고자리</h1> {/* 나중에 이미지로 교체 가능 */}
      </div>

      <div className="container">
        <div className="left-pane">
          <h2 className="section-title">🩵서적 검색(키워드 검색도 가능해요)🩵</h2>
          <BookSearch />
        </div>
        <div className="right-pane">
          <h2 className="section-title">💜책 리뷰 검색(완전한 책 제목을 입력해주세요)💜</h2>
          <BlogReview />
        </div>
      </div>
    </div>
  );
}

export default App;
const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/search', async (req, res) => {
  const { title } = req.query;
  const encodedTitle = encodeURIComponent(title);

  try {
    const response = await axios.get(`https://openapi.naver.com/v1/search/blog.json?query=${encodedTitle}&display=10&sort=sim`, {
      headers: {
        'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
      }
    });

    res.json(response.data.items);
  } catch (error) {
    console.error('네이버 블로그 검색 실패:', error.response?.data || error);
    res.status(500).json({ error: '블로그 검색 실패' });
  }
});

module.exports = router;
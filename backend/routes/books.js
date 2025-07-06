const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/search', async (req, res) => {
  const { keyword } = req.query;
  const ttbKey = process.env.ALADIN_TTB_KEY;

  try {
    const response = await axios.get('http://www.aladin.co.kr/ttb/api/ItemSearch.aspx', {
      params: {
        ttbkey: ttbKey,
        Query: keyword,
        QueryType: 'Keyword',
        SearchTarget: 'Book',
        MaxResults: 10,
        Output: 'JS',
        Version: '20131101',
      },
    });

    res.json(response.data.item); // 'item'만 프론트로 전달
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '책 정보를 불러오지 못했습니다.' });
  }
});

module.exports = router;
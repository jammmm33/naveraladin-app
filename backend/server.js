const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/books');
const blogRoutes = require('./routes/blog');
require('dotenv').config();

const app = express();
const PORT = 4000;

app.use(cors());
app.use('/api/blogs', blogRoutes);
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`✅ 백엔드 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
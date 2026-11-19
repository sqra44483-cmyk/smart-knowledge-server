const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'SMART KNOWLEDGE server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

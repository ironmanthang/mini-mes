// src/routes/index.js

const express = require('express');
const componentRoutes = require('./componentRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('API is running....');
});

router.use('/components', componentRoutes);

module.exports = router;
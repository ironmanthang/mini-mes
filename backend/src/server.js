// src/server.js 

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const setupSwagger = require('./config/swaggerConfig');
const allRoutes = require('./routes/index'); 

dotenv.config({ path: './.env' });
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

const startServer = async () => {
  try {
    await connectDB();

    setupSwagger(app, PORT);

    app.use('/api', allRoutes);

    app.use((req, res, next) => {
      res.status(404).json({ success: false, error: 'Route Not Found' });
    });
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
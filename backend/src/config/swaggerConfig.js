// src/config/swaggerConfig.js

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

/**
 * Sets up the Swagger API documentation.
 * @param {import('express').Express} app The Express application instance.
 * @param {number} port The port the server is running on.
 */
const setupSwagger = (app, port) => {
  const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Mini-MES API',
        version: '1.0.0',
        description: 'API documentation for the Mini-MES backend',
      },
      servers: [{ url: `http://localhost:${port}` }],
    },
    apis: ['./src/routes/*.js'], 
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);

  app.use('/mes', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  console.log(`Swagger docs available at http://localhost:${port}/mes`);
};

module.exports = setupSwagger;
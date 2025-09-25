// backend/src/routes/componentRoutes.js
const express = require('express');
const {
  createComponent,
  getAllComponents,
  getComponentById,
  updateComponent,
  deleteComponent,
} = require('../controllers/componentController');

const router = express.Router();

router.route('/')
  .post(createComponent)
  .get(getAllComponents);
router.route('/:id')
  .get(getComponentById)
  .put(updateComponent)
  .delete(deleteComponent);
/**
 * @swagger
 * tags:
 *   name: Components
 *   description: API for managing components
 */

/**
 * @swagger
 * /api/components:
 *   get:
 *     summary: Returns a list of all components
 *     tags: [Components]
 *     responses:
 *       200:
 *         description: The list of components
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Component'
 *   post:
 *     summary: Creates a new component
 *     tags: [Components]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Component'
 *     responses:
 *       201:
 *         description: The component was successfully created
 *       400:
 *         description: Bad request
 */


/**
 * @swagger
 * /api/components/{id}:
 *   get:
 *     summary: Gets a component by ID
 *     tags: [Components]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The component ID
 *     responses:
 *       200:
 *         description: The component description by ID
 *       404:
 *         description: Component not found
 *   put:
 *     summary: Updates a component by ID
 *     tags: [Components]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The component ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Component'
 *     responses:
 *       200:
 *         description: The updated component
 *       404:
 *         description: Component not found
 *   delete:
 *     summary: Deletes a component by ID
 *     tags: [Components]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The component ID
 *     responses:
 *       200:
 *         description: Component was deleted
 *       404:
 *         description: Component not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Component:
 *       type: object
 *       required:
 *         - name
 *         - sku
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the component
 *         name:
 *           type: string
 *           description: The name of the component
 *         sku:
 *           type: string
 *           description: The Stock Keeping Unit (SKU)
 *         description:
 *           type: string
 *           description: Optional description for the component
 *       example:
 *         name: "Resistor 10k Ohm"
 *         sku: "RES-10K-025"
 *         description: "A standard 1/4 watt resistor."
 */


module.exports = router;
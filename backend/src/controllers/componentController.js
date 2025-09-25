// src/controllers/componentController.js

const componentService = require('../services/componentService');

exports.createComponent = async (req, res, next) => { 
  try {
    const component = await componentService.create(req.body);
    res.status(201).json({ success: true, data: component });
  } catch (error) {
    next(error); 
  }
};

exports.getAllComponents = async (req, res, next) => {
  try {
    const components = await componentService.getAll();
    res.status(200).json({ success: true, count: components.length, data: components });
  } catch (error) {
    next(error);
  }
};

exports.getComponentById = async (req, res, next) => {
  try {
    const component = await componentService.getById(req.params.id);
    res.status(200).json({ success: true, data: component });
  } catch (error) {
    next(error);
  }
};

exports.updateComponent = async (req, res, next) => {
  try {
    const component = await componentService.update(req.params.id, req.body);
    res.status(200).json({ success: true, data: component });
  } catch (error) {
    next(error);
  }
};

exports.deleteComponent = async (req, res, next) => {
  try {
    await componentService.delete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  } catch (error)    {
    next(error);
  }
};
// src/services/componentService.js

const Component = require('../models/ComponentModel');

const componentService = {
    create: async (componentData) => {
        const component = await Component.create(componentData);
        return component;
    },

    getAll: async () => {
        const components = await Component.find();
        return components;
    },

    getById: async (id) => {
        const component = await Component.findById(id);
        if (!component) {
            throw new Error('Component not found'); 
        }
        return component;
    },

    update: async (id, updateData) => {
        const component = await Component.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        });
        if (!component) {
            throw new Error('Component not found');
        }
        return component;
    },

    delete: async (id) => {
        const component = await Component.findByIdAndDelete(id);
        if (!component) {
            throw new Error('Component not found');
        }
        return { success: true };
    },
};

module.exports = componentService;
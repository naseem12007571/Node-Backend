const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.put('/api/todo/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    if (title) {
      todo.title = title;
    }
    if (description) {
      todo.description = description;
    }
    if (status) {
      todo.status = status;
    }
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

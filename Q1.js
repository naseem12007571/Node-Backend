const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.post('/api/todo', async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = new Todo({
      title,
      description,
      status: 'not completed'
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

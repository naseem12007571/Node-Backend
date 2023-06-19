const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/api/todo', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

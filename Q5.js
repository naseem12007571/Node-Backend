This should delete the specified to-do item based on the provided id.
Sent message. 5. Delete a To-Do Item API - DELETE `/api/todo/:id` This should delete the specified to-do item based on the provided id.
Here’s an example of how you can create a DELETE /api/todo/:id endpoint using Node.js and Express to delete a specific to-do item from the database based on its id:

const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.delete('/api/todo/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    await todo.remove();
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

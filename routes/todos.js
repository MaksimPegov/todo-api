const express = require('express');
const router = express.Router();
const todoList = require('../services/todo');

router.get('/', async (req, res) => {
   try {
      const list = await todoList.getTodoList();

      res.json(list);
   } catch (err) {
      res.status(500).send(err);
   }
});

router.post('/', async (req, res) => {
   try {
      const todo = req.body;
      const result = await todoList.addTodo(todo);

      res.json(result);
   }
   catch (err) {
      res.status(500).send(err);
   }
});

module.exports = router;
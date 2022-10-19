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

router.put('/:id', async (req, res) => {
   try {
      const id = +req.params.id;
      const newData = req.body;

      if (!(Number.isInteger(id) && id > 0) || !newData.text || !newData.date) {
         res.status(400).send({error: 'Please provide correct id, text and date'});

         return;
      }
      
      res.json(await todoList.editTodo(id, newData));
   }
   catch (err) {
      res.status(500).send(err);
   }
});

router.delete('/:id', async (req, res) => {
   try {
      const id = +req.params.id;

      if (!(Number.isInteger(id) && id > 0)) {
         res.status(400).send({error: 'Please provide correct id'});

         return;
      }

      res.json(await todoList.deleteTodo(id));
   }
   catch (err) {
      res.status(500).send(err);
   }
});

module.exports = router;
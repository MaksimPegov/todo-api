const db = require('./db');
const config = require('../config');
const { response } = require('express');

async function getTodoList(id) {
   const list = await db.query(`SELECT * FROM todos WHERE user_id = ${id}`);

   return list;
}

async function addTodo(todo) {
   const result = await db.query(`INSERT INTO todos (text, date, user_id) VALUES ('${todo.text}', '${todo.date}', ${todo.user_id})`);

   let message = 'Error in creating todo';

   if (result.affectedRows) {
      message = 'Todo created successfully';
   }

   return { message };
}

async function editTodo(id, newData) {
   const result = await db.query(`UPDATE todos SET text = '${newData.text}', date = '${newData.date}' WHERE id = ${id}`);
   const message = result.affectedRows ? 'Todo updated successfully' : `Todo whith id = ${id} not found`;

   return { message };
}

async function deleteTodo(id) {
   const result = await db.query(`DELETE FROM todos WHERE id = ${id}`);
   const message = result.affectedRows ? 'Todo deleted successfully' : `Todo whith id = ${id} not found`;

   return { message };
}

module.exports = {
   getTodoList,
   addTodo,
   editTodo,
   deleteTodo,
};

const db = require('./db');
const config = require('../config');

async function getTodoList() {
   const list = await db.query('SELECT * FROM todos');

   return list;
}

async function addTodo(todo) {
   console.log(todo);
   const result = await db.query(`INSERT INTO todos (text, date, user_id) VALUES ('${todo.text}', '${todo.date}', ${todo.user_id})`);

   let message = 'Error in creating todo';

   if (result.affectedRows) {
      message = 'Todo created successfully';
   }

   return { message };
}

module.exports = {
   getTodoList,
   addTodo,
};

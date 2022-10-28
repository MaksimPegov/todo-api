const db = require('./db');
const config = require('../config');
const { response } = require('express');

async function getUser(user, password) {
   const userId = await db.query(`SELECT id FROM users WHERE username = '${user}' AND password = '${password}'`);
   
   const answer = userId.length !== 0 ? userId[0] : "User not found";

   return answer ;
}

module.exports = {
   getUser,
};

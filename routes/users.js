const express = require('express');
const router = express.Router();
const userList = require('../services/user');

router.get('/:user&:password', async (req, res) => {
   try {
      const user = req.params.user;
      const password = req.params.password;

      if(!user || !password){
         res.status(400).send({error: 'Please provide correct user and password'});
         return;
      }

      const list = await userList.getUser(user, password);

      res.json(list);
   } catch (err) {
      res.status(500).send(err);
   }
});

router.post('/', async (req, res) => {
   try {
      const user = req.body;

      if(!user.username || !user.password){
         res.status(400).send({error: 'Please provide correct username and password'});
         return;
      }

      const result = await userList.addUser(user);

      res.json(result);
   }
   catch (err) {
      if(err.message.includes('Duplicate')){
         message = 'This username is already used';
         res.status(400).send(message);
         return
      }
      res.status(500).send(err);
   }
});

module.exports = router;

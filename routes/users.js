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

module.exports = router;

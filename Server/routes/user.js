const express = require('express');
const User = require('../models/user');
const router = express.Router();

router
.get('/',(req,res)=>{
    try{
        const users = User.getUsers();
        res.send(users);
    }catch(err){
        res.status(401).send({message : err.message});
    }
})

.post('/login', async (req, res) => {
    try {
      let user = await User.login(req.body)
      res.send({...user, Password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
    .post('/register', async(req, res) => {
    try {
      let user = await User.register(req.body)
      res.send({...user, Password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .put('/update', async(req, res) => {
    try {
      let user = await User.updateEmail(req.body)
      res.send({...user, Password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  
  .delete('/delete', async(req, res) => {
    try {
      let user = await User.deleteAccount(req.body)
      res.send({success: "We're sad to see you go"})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
  

module.exports = router;
const express = require('express');
const mongoose = require('mongoose');
const Users = require('../models/users');
const userApi = express.Router();

userApi
  // .post('/', (req, res) => {
  //   const user = new Users({
  //     userName: req.body.userName,
  //     password: req.body.password
  //   })
  //   user.save()
  //     .then(result => res.status(201).send(user.userName))
  //     .catch(err => res.status(404).send(err));
  // })
  .post('/is', (req, res) => {
    Users.findOne({ userName: req.body.userName, password: req.body.password })
      .then((result) => res.status(200).send(result ? true : false))
      .catch(err => res.status(401).send(err));
  })

module.exports = userApi;

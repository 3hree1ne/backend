const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../models/collection1');
const api = express.Router();

api
  .get('/', (req, res) => {
    Blog.find()
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => res.status(404).send(err));
  })

module.exports = api;

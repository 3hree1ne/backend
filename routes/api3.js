const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../models/collection1');
const api3 = express.Router();

api3.route('/')
  .put((req, res) => {
          Blog.findOneAndUpdate({postUrl: req.body.postUrl},
					{
              // id: req.body.id,            
              postHeader: req.body.postHeader,
              postBody: req.body.postBody,
              author: req.body.author,    
              category: req.body.category,
              // featured: req.body.featured,
              // comments: req.body.comments,
              // date: req.body.date             
					})
          .then(result => res.status(202).send(result))
      .catch(err => {
                  res.status(402).send(err);
      })
  })

module.exports = api3;

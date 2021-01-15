const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../models/collection1');
const api2 = express.Router();

api2.route('/').post((req, res) => {
  const blog = new Blog({               
              id: req.body.id,            
              postUrl: req.body.postUrl,      
              postHeader: req.body.postHeader,
              postBody: req.body.postBody,
              author: req.body.author,    
              category: req.body.category,
              featured: req.body.featured,
              comments: req.body.comments,
              date: req.body.date             
  })                                      
      blog.save()                             
      .then(() => res.status(201).send(blog))
      .catch(err => res.status(404).send(err));
})                                        
  .delete((req, res) => {
        Blog.findOneAndRemove({postUrl: req.body.postUrl})
          .then(result => res.status(202).send(result))
      .catch(err => {
                res.status(404).send(err);
              
      })
      
  })
  .put((req, res) => {
          Blog.findOneAndUpdate({postUrl: req.body.postUrl},{featured : req.body.featured})
          .then(result => res.status(202).send(result))
      .catch(err => {
                  res.status(404).send(err);
                
      })
        
  })

module.exports = api2;

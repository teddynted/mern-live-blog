const express = require('express');
const router = express.Router();
const blog = require('./blog');

module.exports = function(io) {

  const obj = new blog();

  io.on('connection', socket => {

     console.log('Connection established!');
     
     router.post('/api/post/', async (req, res) => {
        obj.newPost(req.body.post).then(response => {
           socket.broadcast.emit('posts', [ { '_id' : response._id, 'post': response.post, 'createdAt': response.createdAt } ] );
        })
     });
     
     // Emit posts event with json data
     obj.getPosts().then( response => {
        socket.emit('posts', response );
     });
     
  });

  return router;

};
'use strict';

const mongoose = require('mongoose'), Schema = mongoose.Schema;

const BlogSchema = new Schema({
  post: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Blog', BlogSchema);
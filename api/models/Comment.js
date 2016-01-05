/**
* Comment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    article: {
      model: 'article',
      required: true
    },
    author: {
      model: 'user',
      required: true
    },
    content: {
      type: 'string',
      required: true
    },
    lastUpdated: {
      type: 'date',
      required: true,
      defaultsTo: new Date(0)
    },
    upvotes: {
      type: 'integer',
      required: true,
      defaultsTo: 0
    },
    downvotes: {
      type: 'integer',
      required: true,
      defaultsTo: 0
    },
    score:{
      type: 'integer',
      required: true,
      defaultsTo: 0
    }
  }
};

/**
* Deck.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    author: {
      model: 'user',
      required: true
    },
    content: {
      type: 'string',
      required: true
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
    },
    deckType: {
      type: 'string',
      required: true
    },
    craftingCost: {
      type: 'integer',
      required: true
    },
    decklink: {
      type: 'string',
      required: true,
      unique: true
    },
    cards: {
      collection: 'card',
      via: 'deck'
    },
    comments: {
      collection: 'comment',
      via: 'deck'
    }
  }
};

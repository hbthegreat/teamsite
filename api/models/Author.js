/**
* Author.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    thumbnailImageUrl: {
      type: 'string',
      required: true
    },

    name: {
      type: 'string',
      required: true
    },

    about: {
      type: 'string',
      required: true
    },

    twitterUrl :{
      type: 'string'
    },

    facebookUrl: {
      type: 'string'
    },

    twitchUrl: {
      type: 'string'
    },

    youtubeUrl: {
      type: 'string'
    }
  },
  seedData:[
  {
    thumbnailImageUrl : 'blah',
    name : 'HermiesL',
    about : 'Hermies really enjoyes hearthstone and watching Hbthegreat program random stuff',
    twitterUrl : 'https://twitter.com/hermiestv',
    facebookUrl : 'https://www.facebook.com/Hermiestv',
    twitchUrl : 'https://twitch.tv/hermiesl',
    youtubeUrl : 'https://www.youtube.com/c/hermiestv'
  },
]
};

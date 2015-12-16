/**
* Card.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    //The hearthstoneapi.com/in game card Id
      apiCardId: {
        type: 'string',
        unique: true
      },

    //The card name
      name: {
        type: 'string',
        required: true
      },

    //The set the card comes from
      cardSet: {
        type:  'string'
      },

    //The type of the card minion/spell/weapon/hero/etc
      cardType: {
        type: 'string'
      },

    // The faction of the card. Example values: Alliance, Horde, Neutral.
    faction: {
      type: 'string'
    },

    //The rarity of the card. Free/commmon/rare/epic/legendary
    rarity: {
      type: 'string'
    },

    //The mana cost of the card
    cost: {
      type: 'integer'
    },

    //The attack of the card
    attack: {
      type: 'integer'
    },

    //The health of the card
    health: {
      type: 'integer'
    },

    //The durability of the card (for weapons)
    durability: {
      type: 'integer'
    },

    //The text of the card when its in your Handle
    text: {
      type: 'string'
    },

    //The text of the card when its in play
    inPlayText: {
      type: 'string'
    },

    //The flavour text of the card
    flavour: {
      type: 'string'
    },

    //The name of the Artist on the card TODO (link to all cards by artist)
    artist: {
      type: 'string'
    },

    //Indicates if the card is collectible or notFound
    collectible: {
      type: 'boolean'
    },

    //Indicates if the card is "elite" essentially legendary border
    elite: {
      type: 'boolean'
    },

    //indicates the race of the card (murloc, demon, beast etc)
    race: {
      type: 'string'
    },

    //the class this card belongs to (hunter, druid, pally etc)
    playerClass: {
      type: 'string'
    },

    //How to get this card only exists if getting it from a method other than booster packs
    howToGet: {
      type: 'string'
    },

    //How to get the gold version only present if another method is required than booster pack
    howToGetGold: {
      type: 'string'
    },

    //link to the normal card on Hearthhead  TODO(they have the watermark try to find anothe way)
    img : {
      type: 'string'
    },

    //link to the gold card. Same as above.
    imgGold: {
      type: 'string'
    },

    //The locale of the card. We need this if we want different language support... lets stay with english to start
    locale: {
      type: 'string'
    },

    //list of all mechanics on the card windfury/combo/overload etc
    mechanics: {
     collection: 'mechanic'
    }
  }
};

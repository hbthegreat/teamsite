/**
 * CardController
 *
 * @description :: Server-side logic for managing cards
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	getCard: function(req,res){
		Card.findOne({
			name: req.param('name')
		}, function foundCard(err, card){
			if(err) return res.negotiate(err);
			if(!card) return res.notFound();


			return res.json({card: card});
		})
	},

	addAllCards: function(req, res) {
			var unirest = require('unirest');
			var cards = {};
			unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards")
			.header("X-Mashape-Key", "VVsMO9zhOzmshhFcrgPWPdgDNloSp1ZAs1YjsnjFcyQhJ5yk3T")
			.end(function (result) {
				cards = result.body;
				//Add each subset to db
				var basicCards = cards['Basic'];
				var classicCards = cards['Classic'];
				var creditsCards = cards['Credits'];
				var naxxramasCards = cards['Naxxramas'];
				var debugCards = cards['Debug'];
				var gvgCards = cards['Goblins vs Gnomes'];
				var missionCards = cards['Missions'];
				var promotionCards = cards['Promotion'];
				var rewardCards = cards['Reward'];
				var systemCards = cards['System'];
				var brmCards = cards['Blackrock Mountain'];
				var heroSkins = cards['Hero Skins'];
				var tavernBrawlStuff = cards['Tavern Brawl'];
				var tgtCards = cards['The Grand Tournament'];
				var loeCards = cards['The League of Explorers'];
				for(var i=0; i< basicCards.length; i++){
					var currentCard = basicCards[i];
					Card.create({
						apiCardId: currentCard['cardId'] || null,
						name: currentCard['name'] || "No Name Given",
						cardSet: currentCard['cardSet'] || null,
						cardType: currentCard['type'] || null,
						faction: currentCard['faction'] || null,
						rarity: currentCard['rarity'] || null,
						cost: currentCard['cost'] || null,
						attack: currentCard['attack'] || null,
						health:currentCard['health'] || null,
						durability:currentCard['durability'] || null,
						text:currentCard['text'] || null,
						inPlayText:currentCard['inPlayText'] || null,
						flavour:currentCard['flavor'] || null,
						artist:currentCard['artist'] || null,
						collectible:currentCard['collectible'] || null,
						elite:currentCard['elite'] || null,
						race:currentCard['race'] || null,
						playerClass:currentCard['playerClass'] || null,
						howToGet:currentCard['howToGet'] || null,
						howToGetGold:currentCard['howToGetGold'] || null,
						img :currentCard['img'] || null,
						imgGold:currentCard['imgGold'] || null,
						locale:currentCard['locale'] || null,
						mechanics:currentCard['mechanics'] || null,
					}, function cardCreated(err, newCard){
						if(err){
							console.log(err);
						}
						if(newCard)
						{
							console.log(newCard);
						}
					});
				}
				for(var i=0; i< classicCards.length; i++){
					var currentCard = classicCards[i];
					Card.create({
						apiCardId: currentCard['cardId'] || null,
						name: currentCard['name'] || "No Name Given",
						cardSet: currentCard['cardSet'] || null,
						cardType: currentCard['type'] || null,
						faction: currentCard['faction'] || null,
						rarity: currentCard['rarity'] || null,
						cost: currentCard['cost'] || null,
						attack: currentCard['attack'] || null,
						health:currentCard['health'] || null,
						durability:currentCard['durability'] || null,
						text:currentCard['text'] || null,
						inPlayText:currentCard['inPlayText'] || null,
						flavour:currentCard['flavor'] || null,
						artist:currentCard['artist'] || null,
						collectible:currentCard['collectible'] || null,
						elite:currentCard['elite'] || null,
						race:currentCard['race'] || null,
						playerClass:currentCard['playerClass'] || null,
						howToGet:currentCard['howToGet'] || null,
						howToGetGold:currentCard['howToGetGold'] || null,
						img :currentCard['img'] || null,
						imgGold:currentCard['imgGold'] || null,
						locale:currentCard['locale'] || null,
						mechanics:currentCard['mechanics'] || null,
					}, function cardCreated(err, newCard){
						if(err){
							console.log(err);
						}
						if(newCard)
						{
							console.log(newCard);
						}
					});
				}
				for(var i=0; i< gvgCards.length; i++){
					var currentCard = gvgCards[i];
					Card.create({
						apiCardId: currentCard['cardId'] || null,
						name: currentCard['name'] || "No Name Given",
						cardSet: currentCard['cardSet'] || null,
						cardType: currentCard['type'] || null,
						faction: currentCard['faction'] || null,
						rarity: currentCard['rarity'] || null,
						cost: currentCard['cost'] || null,
						attack: currentCard['attack'] || null,
						health:currentCard['health'] || null,
						durability:currentCard['durability'] || null,
						text:currentCard['text'] || null,
						inPlayText:currentCard['inPlayText'] || null,
						flavour:currentCard['flavor'] || null,
						artist:currentCard['artist'] || null,
						collectible:currentCard['collectible'] || null,
						elite:currentCard['elite'] || null,
						race:currentCard['race'] || null,
						playerClass:currentCard['playerClass'] || null,
						howToGet:currentCard['howToGet'] || null,
						howToGetGold:currentCard['howToGetGold'] || null,
						img :currentCard['img'] || null,
						imgGold:currentCard['imgGold'] || null,
						locale:currentCard['locale'] || null,
						mechanics:currentCard['mechanics'] || null,
					}, function cardCreated(err, newCard){
						if(err){
							console.log(err);
						}
						if(newCard)
						{
							console.log(newCard);
						}
					});
				}
				for(var i=0; i< naxxramasCards.length; i++){
					var currentCard = naxxramasCards[i];
					Card.create({
						apiCardId: currentCard['cardId'] || null,
						name: currentCard['name'] || "No Name Given",
						cardSet: currentCard['cardSet'] || null,
						cardType: currentCard['type'] || null,
						faction: currentCard['faction'] || null,
						rarity: currentCard['rarity'] || null,
						cost: currentCard['cost'] || null,
						attack: currentCard['attack'] || null,
						health:currentCard['health'] || null,
						durability:currentCard['durability'] || null,
						text:currentCard['text'] || null,
						inPlayText:currentCard['inPlayText'] || null,
						flavour:currentCard['flavor'] || null,
						artist:currentCard['artist'] || null,
						collectible:currentCard['collectible'] || null,
						elite:currentCard['elite'] || null,
						race:currentCard['race'] || null,
						playerClass:currentCard['playerClass'] || null,
						howToGet:currentCard['howToGet'] || null,
						howToGetGold:currentCard['howToGetGold'] || null,
						img :currentCard['img'] || null,
						imgGold:currentCard['imgGold'] || null,
						locale:currentCard['locale'] || null,
						mechanics:currentCard['mechanics'] || null,
					}, function cardCreated(err, newCard){
						if(err){
							console.log(err);
						}
						if(newCard)
						{
							console.log(newCard);
						}
					});
				}
				for(var i=0; i< tgtCards.length; i++){
					var currentCard = tgtCards[i];
					Card.create({
						apiCardId: currentCard['cardId'] || null,
						name: currentCard['name'] || "No Name Given",
						cardSet: currentCard['cardSet'] || null,
						cardType: currentCard['type'] || null,
						faction: currentCard['faction'] || null,
						rarity: currentCard['rarity'] || null,
						cost: currentCard['cost'] || null,
						attack: currentCard['attack'] || null,
						health:currentCard['health'] || null,
						durability:currentCard['durability'] || null,
						text:currentCard['text'] || null,
						inPlayText:currentCard['inPlayText'] || null,
						flavour:currentCard['flavor'] || null,
						artist:currentCard['artist'] || null,
						collectible:currentCard['collectible'] || null,
						elite:currentCard['elite'] || null,
						race:currentCard['race'] || null,
						playerClass:currentCard['playerClass'] || null,
						howToGet:currentCard['howToGet'] || null,
						howToGetGold:currentCard['howToGetGold'] || null,
						img :currentCard['img'] || null,
						imgGold:currentCard['imgGold'] || null,
						locale:currentCard['locale'] || null,
						mechanics:currentCard['mechanics'] || null,
					}, function cardCreated(err, newCard){
						if(err){
							console.log(err);
						}
						if(newCard)
						{
							console.log(newCard);
						}
					});
				}
				for(var i=0; i< loeCards.length; i++){
					var currentCard = loeCards[i];
					Card.create({
						apiCardId: currentCard['cardId'] || null,
						name: currentCard['name'] || "No Name Given",
						cardSet: currentCard['cardSet'] || null,
						cardType: currentCard['type'] || null,
						faction: currentCard['faction'] || null,
						rarity: currentCard['rarity'] || null,
						cost: currentCard['cost'] || null,
						attack: currentCard['attack'] || null,
						health:currentCard['health'] || null,
						durability:currentCard['durability'] || null,
						text:currentCard['text'] || null,
						inPlayText:currentCard['inPlayText'] || null,
						flavour:currentCard['flavor'] || null,
						artist:currentCard['artist'] || null,
						collectible:currentCard['collectible'] || null,
						elite:currentCard['elite'] || null,
						race:currentCard['race'] || null,
						playerClass:currentCard['playerClass'] || null,
						howToGet:currentCard['howToGet'] || null,
						howToGetGold:currentCard['howToGetGold'] || null,
						img :currentCard['img'] || null,
						imgGold:currentCard['imgGold'] || null,
						locale:currentCard['locale'] || null,
						mechanics:currentCard['mechanics'] || null,
					}, function cardCreated(err, newCard){
						if(err){
							console.log(err);
						}
						if(newCard)
						{
							console.log(newCard);
						}
					});
				}

			});
	}
};

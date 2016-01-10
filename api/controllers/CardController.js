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

	getAllCardsForClass: function(req, res)	{
		Card.find({playerClass: req.param('class')},
			function foundCards(err, cards){
				if(err) return re.negotiate(err);
				if(!cards) return res.notFound();

				return res.json({cards: cards});
			})
	},
	getAllNeutralCards: function(req, res)	{
		Card.find({playerClass: null},
			function foundCards(err, cards){
				if(err) return re.negotiate(err);
				if(!cards) return res.notFound();

				return res.json({cards: cards});
			})
	},

	downloadCardImages: function (req, res)	{
		var unirest = require('unirest');
		var cards = {};
		unirest.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards')
		.header('X-Mashape-Key', 'VVsMO9zhOzmshhFcrgPWPdgDNloSp1ZAs1YjsnjFcyQhJ5yk3T')
		.end(function (result){
			cards = result.body;
			var basicCards = cards['The League of Explorers'];

			for(var i=0; i< basicCards.length; i++){
				var currentCard = basicCards[i];
				var currentCardType = currentCard['type'] || null;
				var currentCardImg = currentCard['img'] || null;
				var currentCardGoldImg =  currentCard['imgGold'] || null;
				var currentCardCollectible = currentCard['collectible'] || null;

				if((currentCardType === 'Weapon' || currentCardType === 'Spell' || currentCardType === 'Minion') && currentCardCollectible)
				{
					var playerClass = currentCard['playerClass'] || 'neutral';
					playerClass = playerClass.toLowerCase();
					var quality = currentCard['rarity'] || 'no quality';
					quality = quality.toLowerCase();
					if(quality === 'no quality')
					{
						console.log('no quality what the fuck? '+ currentCard['name']);
					}
					var cardName = currentCard['name'].replace(/\s+/g, '-').replace(/\'+/g, '').toLowerCase();
					/*means they are a card not some random bullshit*/
					if(currentCardImg)
					{
						var fileType = currentCardImg.split('.').pop();
						var fileName = cardName+'-standard'+'.'+fileType;
						var filePath = '/the-league-of-explorers/' + playerClass+'/'+currentCardType.toLowerCase()+'/'+quality;
						downloadFileToLocation(currentCardImg, filePath, fileName,i, function (num) {
							console.log("success classic standard: "+num);
						})
					}
					else {
						console.log('Card => ' + currentCard['name']+ " does not have an image");
					}

					if(currentCardGoldImg)
					{
						var fileType = currentCardGoldImg.split('.').pop();
						var fileName = cardName+'-gold'+'.'+fileType;
						var filePath = '/the-league-of-explorers/' + playerClass+'/'+currentCardType.toLowerCase()+'/'+quality;
						downloadFileToLocation(currentCardGoldImg, filePath, fileName, i, function (num) {
							console.log("success classic gold: "+num);
						})

					}
					else {
						console.log('Card => ' + currentCard['name']+ " does not have a gold image");
					}
				}
			}
		});
	},

	addCollectibleCards: function (req,res){
		var unirest = require('unirest');
		var cards = {};
		unirest.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards')
			.header('X-Mashape-Key', 'VVsMO9zhOzmshhFcrgPWPdgDNloSp1ZAs1YjsnjFcyQhJ5yk3T')
			.end(function (result){
				cards = result.body;
				var basicCards = cards['Basic'];
				var classicCards = cards['Classic'];
				var naxxramasCards = cards['Naxxramas'];
				var gvgCards = cards['Goblins vs Gnomes'];
				var brmCards = cards['Blackrock Mountain'];
				var tgtCards = cards['The Grand Tournament'];
				var loeCards = cards['The League of Explorers'];
				/*Add all collectible cards to DB*/
				console.log("starting basic cards!");
				addCards(basicCards, '/basic/');
				console.log("starting classic cards!");
				addCards(classicCards, '/classic/');
				console.log("starting naxxramas cards!");
				addCards(naxxramasCards, '/naxxramas/');
				console.log("starting goblins-vs-gnomes cards!");
				addCards(gvgCards, '/goblins-vs-gnomes/');
				console.log("starting blackrock-mountain cards!");
				addCards(brmCards, '/blackrock-mountain/');
				console.log("starting the-grand-tournament cards!");
				addCards(tgtCards, '/the-grand-tournament/');
				console.log("starting the-league-of-explorers cards!");
				addCards(loeCards, '/the-league-of-explorers/');
			});
	}
};
/*does cards heroes everything + enchantments*/
function downloadFileToLocation(uri, filePath, fileName,num, cb){
	var saveDir = '/home/hbthegreat/teamsite/assets/images' + filePath;
	var fullFilePath = saveDir+ '/'+fileName;

	var http = require('http');
	var fs = require('fs');
	var mkdirp = require('mkdirp');

	mkdirp.sync(saveDir, function(err) {
		console.log('directory not created');
		console.log(err);
	});

	var file = fs.createWriteStream(fullFilePath);
	var request = http.get(uri, function(response) {
		response.pipe(file);
		file.on('finish', function() {
	  	file.close(cb(num));  // close() is async, call cb after close completes.
		});
	}).on('error', function(err) { // Handle errors
			fs.unlink(fullFilePath); // Delete the file async. (But we don't check the result)
			if (cb) cb(err.message);
	});
}

function addCards(cards, cardCollection){
	for(var i=0; i< cards.length; i++){
		var currentCard = cards[i];
		var currentCardType = currentCard['type'] || null;
		var currentCardImg = currentCard['img'] || null;
		var currentCardGoldImg =  currentCard['imgGold'] || null;
		var currentCardCollectible = currentCard['collectible'] || null;
		var cardFamily = cardCollection;

		if((currentCardType === 'Weapon' || currentCardType === 'Spell' || currentCardType === 'Minion') && currentCardCollectible)
		{
			var playerClass = currentCard['playerClass'] || 'neutral';
			playerClass = playerClass.toLowerCase();
			var quality = currentCard['rarity'] || 'no quality';
			quality = quality.toLowerCase();
			if(quality === 'no quality')
			{
				console.log('no quality what the fuck? '+ currentCard['name']);
			}
			var cardName = currentCard['name'].replace(/\s+/g, '-').replace(/\'+/g, '').toLowerCase();
			var fileTypeNormal = currentCardImg.split('.').pop();
			var fileNameNormal = cardName+'-standard'+'.'+fileTypeNormal;
			var filePathNormal = cardFamily + playerClass+'/'+currentCardType.toLowerCase()+'/'+quality + '/' + fileNameNormal;
			var fileTypeGold = currentCardGoldImg.split('.').pop();
			var fileNameGold = cardName+'-gold'+'.'+fileTypeGold;
			var filePathGold = cardFamily + playerClass+'/'+currentCardType.toLowerCase()+'/'+quality + '/' + fileNameGold;

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
				img :filePathNormal,
				imgGold:filePathGold,
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
		}
	}

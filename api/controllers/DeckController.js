/**
 * DeckController
 *
 * @description :: Server-side logic for managing decks
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	showDeckBuilderPage : function(req, res)
	{
		return res.view('decks/deck-builder/deck-builder', {layout: 'layout'});
	}
};

/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	/*Get all comments for a specific articleId ordered by createdAt date*/
	getAllForArticle: function (req, res)
	{
			Comment.find({article: req.param('articleId')}).sort('createdAt DESC').exec(function findCb(err, comments){
				if (err) return res.serverError(err);

				if(!comments)
				{
						//cannot find comments
						return res.serverError(err);
				}

				return res.json({
					articleComments: comments
				});
			});
	},
	add: function (req, res)
	{
		// if ( !req.isAuthenticated() ){
		// 	//TODO error for not being logged in
		// 	return res.forbidden();
		// }
		Comment.create({
			article: req.param('articleId'),
			//author: req.user,
			author: 1,
			content: req.param('content'),
			upvotes: 0,
			downvotes: 0
		}, function commentCreated(err, newComment){
			if (err) {

				// Otherwise, send back something reasonable as our error response.
				//comment could not be added TODO
				return res.negotiate(err);
			}

			return res.json({
				newComment: newComment
			});
		});
	},
	upvote : function (req, res)
	{
		Comment.findOne({id: req.param('commentId')}).exec(function findCallback(err, comment) {
			if (err) return res.serverError(err);
			comment.upvotes = comment.upvotes + 1;
			comment.save(function(err, updatedComment) {
				//TODO return the actual value
				return res.json({});
			});
		});
	},
	downvote : function (req,res)
	{
		Comment.findOne({id: req.param('commentId')}).exec(function findCallback(err, comment) {
			if (err) return res.serverError(err);
			comment.downvotes = comment.downvotes + 1;
			comment.save(function(err, updatedComment) {
				//TODO return the actual value
				return res.json({});
			});
		});
	}
};

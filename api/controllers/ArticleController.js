/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	showArticlesPage: function (req, res)
	{
		return res.view('articles/main', {layout: 'layout'});
	},
	showSpecificArticle: function(req, res)
	{
		Article.findOne({shortUrl:req.param('articlename')}).exec(function findOneCB(err, article){
			if (err) return res.serverError(err);

			if(!article)
			{
					//cannot find article
					return res.serverError(err);
			}

			Author.findOne({id: article.author}).exec(function findOneCb(err, author){
				if (err) return res.serverError(err);
				if(!author)
				{
						//cannot find author
						return res.serverError(err);
				}
				
				article.author = author;

				return res.view('articles/specific', {
					layout: 'layout',
					article: article});
			})
		});
	}
};

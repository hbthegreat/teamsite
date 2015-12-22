module.exports = {
  showLatestResults: function (req, res)
	{
		return res.view('hermination/latest', {layout: 'hermination/hermination-layout'});
	},
  showArticles: function(req,res)
  {
    return res.view('hermination/articles',{layout: 'hermination/hermination-layout'});
  },
  showHallOfFame: function(req,res)
  {
    return res.view('hermination/hall-of-fame',{layout: 'hermination/hermination-layout'});
  },
  showPastBroadcasts: function(req,res)
  {
    return res.view('hermination/past-broadcasts',{layout: 'hermination/hermination-layout'});
  },
  showAbout: function(req,res){
    return res.view('hermination/about',{layout: 'hermination/hermination-layout'});
  },
  showHerminationPage: function (req, res)
  {
    return res.view('hermination', {layout: 'hermination/hermination-layout'});
  }
}

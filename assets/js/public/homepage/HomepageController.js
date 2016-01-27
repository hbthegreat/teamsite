angular.module('HomepageModule').controller('HomepageController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){

	$scope.articlesHoverbox = {};
	$scope.decksHoverbox = {};
	$scope.eventsHoverbox = {};
	$scope.articlesHoverbox.selected = false;
	$scope.decksHoverbox.selected = false;
	$scope.eventsHoverbox.selected = false;
	$scope.articlesHoverbox.collapsed = false;
	$scope.decksHoverbox.collapsed = false;
	$scope.eventsHoverbox.collapsed = false;
	$scope.aHoverboxIsSelected = false;

	$scope.switchSelectedHoverBox = function(hoverbox)
	{
		if(hoverbox.selected)
		{
			$scope.articlesHoverbox.selected = false;
			$scope.decksHoverbox.selected = false;
			$scope.eventsHoverbox.selected = false;
			$scope.aHoverboxIsSelected = false;
			$scope.articlesHoverbox.collapsed = false;
			$scope.decksHoverbox.collapsed = false;
			$scope.eventsHoverbox.collapsed = false;
		}
		else {
			$scope.articlesHoverbox.selected = false;
			$scope.decksHoverbox.selected = false;
			$scope.eventsHoverbox.selected = false;
			hoverbox.selected = true;
			$scope.aHoverboxIsSelected = true;
			if($scope.articlesHoverbox.selected)
			{
				$scope.articlesHoverbox.collapsed = false;
				$scope.decksHoverbox.collapsed = true;
				$scope.eventsHoverbox.collapsed = true;
			}
			if($scope.decksHoverbox.selected)
			{
				$scope.articlesHoverbox.collapsed = true;
				$scope.decksHoverbox.collapsed = false;
				$scope.eventsHoverbox.collapsed = true;
			}
			if($scope.eventsHoverbox.selected)
			{
				$scope.articlesHoverbox.collapsed = true;
				$scope.decksHoverbox.collapsed = true;
				$scope.eventsHoverbox.collapsed = false;
			}
		}
	};

	function populateArticles(){
		var fakeArticle1 = {
			name: 'Secret Paladin vs Control Warrior',
			flavourText: 'Learn from top players of each deck about how this matchup TRULY plays out',
			iconClass: 'fa fa-trophy',
			selected: false
		};
		var fakeArticle2 = {
			name: 'Fast Druid vs Freeze Mage',
			flavourText: 'Learn from top players of each deck about how this matchup TRULY plays out',
			iconClass: 'fa fa-trophy',
			selected: false
		};
		var fakeArticle3 = {
			name: 'Renolock vs KappaRogue',
			flavourText: 'Learn from top players of each deck about how this matchup TRULY plays out',
			iconClass: 'fa fa-trophy',
			selected: false
		};
		var fakeArticle4 = {
			name: 'Zoo vs PirateMage',
			flavourText: 'Learn from top players of each deck about how this matchup TRULY plays out',
			iconClass: 'fa fa-trophy',
			selected: false
		};
		$scope.articlesHoverbox.articles = {fakeArticle1, fakeArticle2, fakeArticle3, fakeArticle4};
	}
	function populateDecks(){
		var fakeDeck1 = {
			name: 'iNTELLECTUS RenoFreezeMage',
			flavourText: 'A wonderful control deck for hunting down all the rampant paladins that currently flood the ladder',
			iconClass: 'fa fa-trophy',
			selected: false
		};
		var fakeDeck2 = {
			name: 'iNTELLECTUS Fast Druid',
			flavourText: 'The best deck in the game lets just admit it now',
			iconClass: 'fa fa-trophy',
			selected: false
		};
		var fakeDeck3 = {
			name: 'iNTELLECTUS KappaRogue',
			flavourText: 'A deck for highly autistic individuals as it is neither good nor easy to play',
			iconClass: 'fa fa-trophy',
			selected: false
		};
		var fakeDeck4 = {
			name: 'iNTELLECTUS PirateMage',
			flavourText: 'A deck for highly autistic individuals as it is neither good nor easy to play',
			iconClass: 'fa fa-trophy',
			selected: false
		};
		$scope.decksHoverbox.decks = {fakeDeck1, fakeDeck2, fakeDeck3, fakeDeck4};
	}
	function populateEvents(){
		var fakeEvent1 = {
			name: 'Get Herminated #1',
			flavourText: 'Another weekly Get Herminated! Get caught up on the latest in the world of Hermination',
			iconClass: 'fa fa-trophy',
			selected: false
		};
		var fakeEvent2 = {
			name: 'Get Herminated #2',
			flavourText: 'Another weekly Get Herminated! Get caught up on the latest in the world of Hermination',
			iconClass: 'fa fa-trophy',
			selected: false
		};
		var fakeEvent3 = {
			name: 'Get Herminated #3',
			flavourText: 'Another weekly Get Herminated! Get caught up on the latest in the world of Hermination',
			iconClass: 'fa fa-trophy',
			selected: false
		};
		var fakeEvent4 = {
			name: 'Get Herminated #4',
			flavourText: 'Another weekly Get Herminated! Get caught up on the latest in the world of Hermination',
			iconClass: 'fa fa-trophy',
			selected: false
		};
		$scope.eventsHoverbox.events = {fakeEvent1, fakeEvent2, fakeEvent3, fakeEvent4};
	}

	// set-up loginForm loading state
	$scope.loginForm = {
		loading: false
	};

	$scope.submitLoginForm = function (){

    // Set the loading state (i.e. show loading spinner)
    $scope.loginForm.loading = true;

    // Submit request to Sails.
    $http.put('/login', {
      email: $scope.loginForm.email,
      password: $scope.loginForm.password
    })
    .then(function onSuccess (){
      // Refresh the page now that we've been logged in.
      window.location = '/';
    })
    .catch(function onError(sailsResponse) {

      // Handle known error type(s).
      // Invalid username / password combination.
      if (sailsResponse.status === 400 || 404) {
        // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
        //
        toastr.error('Invalid email/password combination.', 'Error', {
          closeButton: true
        });
        return;
      }

				toastr.error('An unexpected error occurred, please try again.', 'Error', {
					closeButton: true
				});
				return;

    })
    .finally(function eitherWay(){
      $scope.loginForm.loading = false;
    });
  };

	populateArticles();
	populateDecks();
	populateEvents();

}]);

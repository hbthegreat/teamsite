angular.module('CardModule').controller('CardController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){

  $scope.card = {
    img: "http://placehold.it/350x150",
    imgGold:"http://placehold.it/350x150"
  }
  $scope.cardname = "Mind Control";

  $scope.nameChanged = function(){
    console.log("got here");
    $http.get('/getCard', {params:{name: $scope.cardname}
      }).then(function success(response){
        $scope.card.img = response['data'].card.img;
        $scope.card.imgGold = response['data'].card.imgGold;
      }, function error(response){
        console.log("we failed boyz");
      });
  }

  $scope.getAllThemCards = function(){
    $http.get('/getCards').then(function success(response){
      var x = response;
      debugger;
    })
  }
}]);

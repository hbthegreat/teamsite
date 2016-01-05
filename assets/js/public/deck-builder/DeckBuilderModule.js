angular.module('DeckBuilderModule', ['toastr', 'compareTo', 'ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/druid', {
      templateUrl: '/templates/deck-builder/druid.ejs'
    })
    .when('/mage', {
      templateUrl: '/templates/deck-builder/mage.ejs'
    })
    .when('/paladin', {
      templateUrl: '/templates/deck-builder/paladin.ejs'
    })
    .when('/hunter', {
      templateUrl: '/templates/deck-builder/hunter.ejs'
    })
    .when('/priest', {
      templateUrl: '/templates/deck-builder/priest.ejs'
    })
    .when('/rogue', {
      templateUrl: '/templates/deck-builder/rogue.ejs'
    })
    .when('/shaman', {
      templateUrl: '/templates/deck-builder/shaman.ejs'
    })
    .when('/warlock', {
      templateUrl: '/templates/deck-builder/warlock.ejs'
    })
    .when('/warrior', {
      templateUrl: '/templates/deck-builder/warrior.ejs'
    })
    .when('/selectAClass', {
      templateUrl: '/templates/deck-builder/selectAClass.ejs'
    })
    .otherwise({ redirectTo: '/selectAClass'});
});

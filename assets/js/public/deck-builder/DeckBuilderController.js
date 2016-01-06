angular
  .module('DeckBuilderModule')
    .controller('DeckBuilderController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){
        $scope.filters = {};
        $scope.filters.mana = 'all';

        $scope.filters.classNeutral = 'class';
        $scope.availableMechanics = ['Battlecry',
                                    'Charge',
                                    'Choose One',
                                    'Combo',
                                    'Deathrattle',
                                    'Discover',
                                    'Divine Shield',
                                    'Enrage',
                                    'Freeze',
                                    'Inspire',
                                    'Jousting',
                                    'Overload',
                                    'Secret',
                                    'Silence',
                                    'Spell Damage',
                                    'Stealth',
                                    'Summon',
                                    'Taunt',
                                    'Windfury'];
        $scope.filters.selectedMechanics = [];

        $scope.filterByMana = function(manaCost)
        {
          $scope.filters.mana = manaCost;
          filterCards();
        };

        $scope.filterByClassNeutral = function (classNeutral)
        {
          $scope.filters.classNeutral = classNeutral;
          filterCards();
        };

        function filterCards()
        {
          //$scope filters to db and search.
            //go to db then update cards on the screen including pagination
        }
  }]);

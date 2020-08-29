
(function() {'use strict';
    
    angular.module('myapp', [])
        .controller('mycontroller', mycontroller);

    mycontroller.$inject = ['$scope'];
    function mycontroller($scope) {
        $scope.output = '';
       
        $scope.food_item = '';
        
    $scope.checkLunch = function() {
            if ($scope.food_item.trim().length === 0) {
                $scope.empty = true;}
           else {
                $scope.checked = true;
                $scope.empty = false;
                var arrayfood_itemes = $scope.food_item.split(',');
                var inputconfirm = arrayfood_itemes.filter(function(v) {
                    return v.trim() !== '';
                });

                if (inputconfirm.length <= 3) {
                    $scope.output = 'Enjoy!';}
                 else {
                    $scope.output = 'Too much!';}
            }
         };
    }
})();
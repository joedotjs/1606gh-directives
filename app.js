var app = angular.module('PuppyAdopt', []);

app.controller('MainController', function (Puppies, $scope) {
    $scope.puppies = Puppies;
});
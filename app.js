var app = angular.module('iTunes', []);

app.controller('MainController', function (Songs, $scope) {
    $scope.songs = Songs;
    $scope.tunes = Songs;

    $scope.myScopeFn = function () {
        console.log('Hooray, I was called!');
    };

});
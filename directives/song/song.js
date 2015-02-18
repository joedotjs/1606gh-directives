app.directive('theSong', function () {

    return {
        restrict: 'E',
        templateUrl: 'directives/song/song.html',
        scope: {
          jam: '='
        },
        link: function (scope) {
            console.log(scope);
        }
    };

});
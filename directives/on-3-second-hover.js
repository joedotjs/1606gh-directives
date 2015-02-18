app.directive('onThreeSecondHover', function ($parse) {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var timeout;

            element.on('mouseenter', function () {
                timeout = setTimeout(function () {
                    $parse(attrs.onThreeSecondHover)(scope);
                    scope.$apply();
                }, 3000);
            });

            element.on('mouseleave', function () {
                clearTimeout(timeout);
            });


        }
    };

});
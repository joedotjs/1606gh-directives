app.directive('noLoitering', function () {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var timeout;

            element.on('mouseenter', function () {
                timeout = setTimeout(function () {
                    console.log('Hey you, get out of here, darn kids.');
                }, 3000);
            });

            element.on('mouseleave', function () {
                clearTimeout(timeout);
            });

        }
    };

});
var myangulartry = angular.module('myangulartry',['ngRoute']);




myangulartry.config ([$routeProvider, function($routeProvider){}]);

$routeProvider
.when('/home', {
    templateUrl: 'views/home.html'
})
.when('/Chartcoped',{
    templateUrl: 'views/TimeSeries.html'
    // controller
})
.otherwise({
    redirectTo: '/home'
});



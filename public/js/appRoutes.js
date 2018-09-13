angular.module('appRoutes', [])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		})

		.when('/cervecerias', {
			templateUrl: 'views/cervecerias.html',
			controller: 'CerveceriaCtrl'
		})

		.when('/cervezas', {
			templateUrl: 'views/cervezas.html',
			controller: 'CervezaCtrl'
		});


	$locationProvider.html5Mode(true);

}]);

// Creación del módulo
var rutaApp = angular.module('rutaApp', ['ngRoute']);

// Configuración de las rutas
rutaApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'pages/registro.html',
			controller 	: 'registroController',
		})
		.when('/retosParaHoy', {
			templateUrl : 'pages/retos_hoy.html',
			controller 	: 'retosHoyController'
		})
        .when('/detalle-reto', {
            templateUrl : 'pages/detalle-reto.html',
            controller 	: 'detalleRetoController'
        })
		.when('/contacto', {
			templateUrl : 'pages/contacto.html',
			controller 	: 'contactController'
		})
		.otherwise({
			redirectTo: '/'
		});
});


rutaApp.controller('registroController', function($scope) {
//	$scope.message = 'Hola, Mundo!';
});

rutaApp.controller('retosHoyController', function($scope) {
//	$scope.message = 'Estos son los retos de hoy';
});

rutaApp.controller('detalleRetoController', function($scope) {
//	$scope.message = 'Estos son los retos de hoy';
});

rutaApp.controller('contactController', function($scope) {
	$scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});

$(document).ready(initApp);

function initApp() {
    console.log('asdf');

    $('body').on('click', '.back', function () {
        console.log('asdf');
        history.back();
    });
}
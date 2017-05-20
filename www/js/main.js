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
        .when('/reto-auto', {
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
    $scope.retosIndividuales = [
        {
            path:'#ruta',
            title:'Carrera en la ducha',
            resume:'Controla el tiempo que estás en la ducha',
            description:'Tomar toda la ducha'
        },
        {
            path:'#ruta',
            title:'Come saludable',
            resume:'Reto de la ducha',
            description:'Tomar toda la ducha'
        },
        {
            path:'#ruta',
            title:'Si ya cargo desconectalo',
            resume:'Reto de la ducha',
            description:'Tomar toda la ducha'
        },
        {
            path:'#ruta',
            title:'Reto de la ducha',
            resume:'Reto de la ducha',
            description:'Tomar toda la ducha'
        }
    ];
    $scope.retosGrupales = [
        {
            path:'#ruta',
            title:'Limpia un punto negro',
            resume:'Elige',
            description:'Tomar toda la ducha'
        }
    ];
});

rutaApp.controller('detalleRetoController', function($scope) {
//	$scope.message = 'Estos son los retos de hoy';
});

rutaApp.controller('contactController', function($scope) {
	$scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});

$(document).ready(initApp);

function initApp() {
    $('body').on('click', '.back', function () {
        history.back();
    });
}
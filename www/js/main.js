// Creación del módulo
var rutaApp = angular.module('rutaApp', ['ngRoute']);

// Configuración de las rutas
rutaApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/registro.html',
            controller: 'registroController',
        })
        .when('/retosParaHoy', {
            templateUrl: 'pages/retos_hoy.html',
            controller: 'retosHoyController'
        })
        .when('/detalle-reto', {
            templateUrl: 'pages/detalle-reto.html',
            controller: 'detalleRetoController'
        })
        .when('/puntos-reciclaje', {
            templateUrl: 'pages/punto-reciclaje.html',
            controller: 'puntosController'
        })
        .when('/contacto', {
            templateUrl: 'pages/contacto.html',
            controller: 'contactController'
        })
        .when('/reto-autos', {
            templateUrl : 'pages/reto_autos.html',
            controller 	: 'autoController'
        })
        .when('/reto-energia', {
            templateUrl : 'pages/reto_energia.html',
            controller 	: 'energiaController'
        })
        .when('/reto-calle', {
            templateUrl: 'pages/reto_calle.html',
            controller: 'reto_calle'
        })
        .otherwise({
            redirectTo: '/'
        });
});

rutaApp.controller('registroController', function ($scope) {
    //	$scope.message = 'Hola, Mundo!';
});

rutaApp.controller('retosHoyController', function($scope) {
//	$scope.message = 'Estos son los retos de hoy';
    $scope.retosIndividuales = [
        {
            path:'#detalle-reto',
            title:'Carrera en la ducha',
            resume:'Controla el tiempo que estás en la ducha',
            description:'Tomar toda la ducha'
        },
        {
            path:'#reto-autos',
            title:'Reto autos',
            resume:'Autos',
            description:'Para los autos'
        },
        {
            path:'#puntos-reciclaje',
            title:'Puntos de reciclaje',
            resume:'Ubica los putos de reciclaje más cercanos',
            description:'Conoce los lugares más cercanos'
        },
        {
            path:'#reto-energia',
            title:'Si ya cargo desconectala',
            resume:'Desconecta tu laptop cuando está cargada',
            description:'Tomar toda la ducha'
        },
        {
            path:'#reto-calle',
            title:'Si ya cargo desconectala',
            resume:'Desconecta tu laptop cuando está cargada',
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

rutaApp.controller('detalleRetoController', function ($scope) {
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









rutaApp.controller('reto_calle', function ($scope) {
    var i =0;
    var botella = '../../img/botella.png';
    var botellaX = '../../img/botellaX.png';
    $(".botella img").click(function () {
        if ($(this).attr('src') === botella) {
            $(this).attr('src', botellaX);
            i += 1;
        } else {
            $(this).attr('src', botella);
            i -= 1;
        };
        console.log(i);
    });
});

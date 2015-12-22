
var myApp = angular.module('myApp', ['ngRoute','ngAnimate']);

myApp.config(function ($routeProvider) {

    $routeProvider
        .when('/',{
            controller:'homePageController',
            templateUrl:'templates/homepage/homepage.html'
        }).when('/main-menu',{
            controller:'mainPageController',
            templateUrl:'templates/mainpage/mainpage.html'
        }).
        otherwise('/')
});


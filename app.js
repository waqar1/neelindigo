
var myApp = angular.module('myApp', ['ngRoute','ngAnimate']);

myApp.config(function ($routeProvider) {

    $routeProvider.when('/',{
            controller:'homePageController',
            templateUrl:'templates/homepage/homepage.html'
        }).when('/main-menu',{
            controller:'mainPageController',
            templateUrl:'templates/mainpage/mainpage.html'
        }).when('/type-menu',{
            controller:'menuPageController',
            templateUrl:'templates/menupage/menu.html'
        }).when('/sub-menu',{
            controller:'subMenuController',
            templateUrl:'templates/submenu/submenu.html'
        }).when('/list-menu',{
            controller:'listMenuController',
            templateUrl:'templates/listmenu/listmenu.html'
        }).when('/timer-page',{
            controller:'timerPageController',
            templateUrl:'templates/timerpage/timer.html'
        }).when('/details-page',{
            controller:'resultPageController',
            templateUrl:'templates/resultpage/details.html'
        }).when('/crafts-page',{
            controller:'craftsPageController',
            templateUrl:'templates/crafts/gallery.html'
        }).when('/history-page',{
            controller:'historyPageController',
            templateUrl:'templates/history/gallery.html'
        }).
        otherwise('/');
});



var myApp = angular.module('myApp', ['ngRoute','ngAnimate','ngScrollbars']);

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
        }).when('/interval-page',{
            controller:'intervalPageController',
            templateUrl:'templates/interval/interval.html'
        }).when('/mordents-page',{
            controller:'mordentsPageController',
            templateUrl:'templates/mordents/mordents.html'
        }).
        otherwise('/');
});

myApp.config(function (ScrollBarsProvider) {
    // scrollbar defaults
    ScrollBarsProvider.defaults = {
        autoHideScrollbar: true,
        setHeight: 193,
        scrollInertia: 500,
        axis: 'y',
        advanced: {
            updateOnContentResize: true
        },
        scrollButtons: {
            scrollAmount: 'auto', // scroll amount when button pressed
            enable: true // enable scrolling buttons by default
        }
    };
});



'use strict';

var app = angular.module('testAngularApp',[
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]).constant('FIREBASE_URL', 'https://ming-zhe.firebaseio.com/');

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})


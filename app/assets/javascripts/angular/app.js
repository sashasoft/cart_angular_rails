'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']); 

//Routes
app.config([
  '$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'templates/index.html',
      controller: 'ProductListCtrl'
    })
    .when('/products/new', {
      templateUrl: 'templates/new-product.html',
      controller: 'ProductNewCtrl'
    })
    .when('/products/:id/edit', {
      templateUrl: 'templates/edit-product.html',
      controller: 'ProductEditCtrl'
    })
    .when('/products/:id', {
      templateUrl: 'templates/detail-product.html',
      controller: 'ProductDetailCtrl'
    })    ;
    
    $routeProvider.otherwise({
      redirectTo: '/products',
      templateUrl: 'templates/index.html',
      controller: 'ProductListCtrl'
    });
  }
]);


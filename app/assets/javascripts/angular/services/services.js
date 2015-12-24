'use strict';

var app = angular.module('app');

app.factory('Products', ['$resource',function($resource){
  return $resource('/products', {},{
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' }
  })
}]);

app.factory('Product', ['$resource', function($resource){
  return $resource('/products/:id', {}, {
    show: { method: 'GET' },
    update: { method: 'PUT', params: {id: '@id'} },
    delete: { method: 'DELETE', params: {id: '@id'} }
  });
}]);

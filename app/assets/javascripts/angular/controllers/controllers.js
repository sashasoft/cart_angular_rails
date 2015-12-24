'use strict';

var app = angular.module('app');

app.controller("ProductListCtrl", ['$scope', 'Products', 'Product', function($scope, Products, Product) {
  console.log("ProductListCtrl");

  $scope.products = Products.query();

  $scope.predicate = 'name';
  $scope.reverse = false;

  $scope.order = function(predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };


  $scope.deleteProduct = function (id) {
    if (confirm("Are you sure you want to delete this Product?")){
      console.log(id);
      Product.delete({id: id}, function(){
        $scope.products = Products.query();
      });
    }
  }
}]);

app.controller("ProductNewCtrl", ['$scope', 'Products', '$location', function($scope, Products, $location) {
  console.log("ProductNewCtrl");
  $scope.product = {};
  $scope.save = function () {
      Products.create({product: $scope.product}, function(){
        $location.path('/products');
      });
  }
}]);

app.controller("ProductDetailCtrl", ['$scope', 'Product', '$routeParams', function($scope, Product, $routeParams) {
  console.log("ProductDetailCtrl");
  $scope.product = Product.show({id: $routeParams.id});
}]);

app.controller("ProductEditCtrl", ['$scope', 'Product', '$location', '$routeParams', function($scope, Product, $location, $routeParams) {
  console.log("ProductEditCtrl");
  $scope.product = Product.get({id: $routeParams.id});
  $scope.update = function (){
    Product.update({id: $scope.product.id}, {product: $scope.product}, function(){
      $location.path('#/products/'+$routeParams.id);
    });
  }
}]);

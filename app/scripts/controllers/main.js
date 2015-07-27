'use strict';

/**
 * @ngdoc function
 * @name testappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testappApp
 */
angular.module('testappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1);
    };

  });

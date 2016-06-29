'use strict';


angular.module('app')
  .controller('DemoCtrl', function ($scope, fsApi) {
   
   	$scope.file = null;

   	$scope.upload = function() {

   		debugger;
   		fsApi.post('/',{ file: $scope.file },{ encoding: 'formdata' });
   		
   	} 
});

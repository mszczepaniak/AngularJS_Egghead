var app = angular.module("drinkApp", [])

app.controller("AppCtrl", function($scope){
	$scope.callHome = function(message){
		alert(message);
	}
})

app.directive("phone", function(){
	return {
		scope: {
			dial: "&",
		},
		template: '<input type="text" ng-model="value">' + 
		'<button ng-click="dial({message:value})"> Call home</button>'
	}
})
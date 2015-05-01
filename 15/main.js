var app = angular.module("superApp", [])

app.controller("AppCtrl", function($scope) {
	$scope.loadMoreTweets = function () {
		alert("Loading tweets");
	}
})

app.directive("enter", function() {
	return {
		restrict: "E",

		controller: function ($scope) {
			$scope.abilities = []

			this.addStrength = function() {
				$scope.abilities.push("strength")
			}

			this.addSpeed = function() {
				$scope.abilities.push("speed")
			}

			this.addFlight = function() {
				$scope.abilities.push("flight")
			}

			this.addStrength = function() {
				$scope.abilities.push("strength")
			}
		}

		link: function (scope, element) {
			element.bind("mouseenter", function(){
				console.log(scope.abilities);
			})
		}
	}

app.directive("strength", function() {
	return {
		require: "superhero",
		link: function (scope, element, attrs, superheroCtrl) {
			superheroCtrl.addStrength();
		}
	}
})

app.directive("speed", function() {
	return {
		require: "superhero",
		link: function (scope, element, attrs, superheroCtrl) {
			superheroCtrl.addSpeed();
		}
	}
})

app.directive("flight", function() {
	return {
		require: "superhero",
		link: function (scope, element, attrs, superheroCtrl) {
			superheroCtrl.addFlight();
		}
	}
})	
})

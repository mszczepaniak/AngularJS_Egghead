var app = angular.module("twitterApp", [])

app.controller("AppCtrl", function($scope) {
	$scope.loadMoreTweets = function () {
		alert("Loading tweets");
	}
})

app.directive("enter", function() {
	return function (scope, element, attrs) {
		element.bind("mouseenter", function() {
			scope.$apply("loadMoreTweets()");
		})
	}
})

app.directive("leave", function() {
	return function (scope, element, attrs) {
		element.bind("mouseleave", function() {
			console.log("On mouse leave");
			element.removeClass(attrs.enter);
		})
	}
})
var app = angular.module("behaviorApp", [])
app.directive("enter", function() {
	return function (scope, element, attrs) {
		element.bind("mouseenter", function() {
			console.log("On mouse enter");
			element.addClass(attrs.enter);
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
;(function( window, _, $, angular, undefined )
{
	var module = angular.module( "app" );

	module.directive( "mainBottom", function()
	{
		var scope = {};

		var templateUrl = "/apps/index/main/bottom/main-bottom.html";

		var controller = [ "$scope", "$element", function( $scope, $element )
		{

		}];

		return {
			restrict : "E",
			scope : scope,
			templateUrl : templateUrl,
			replace : true,
			controller : controller
		};
	});

})( window, _, jQuery, angular );

"use strict";
angular.module("app").controller("appCtrl", ['$scope', '$rootScope', '$translate', 'AuthenticationService', function($scope, $rootScope, $translate, AuthenticationService){

	$scope.currentUser = $rootScope.globals.currentUser;

	$scope.logout = function(){
		AuthenticationService.ClearCredentials();
	}
 
}]);

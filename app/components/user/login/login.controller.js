'use strict';

app.controller('loginCtrl', ['$scope', '$location', 'AuthenticationService',  function ($scope, $location, AuthenticationService ) {

	var login = this;  
	login.scope = $scope;
	login.data = {};
	login.model = {};
	login.service = AuthenticationService;
	login.scope.dob = "";

	(function initController() {
      login.service.ClearCredentials();
  })();

	login.scope.submitForm = function(){
 		login.scope.submitted = true;
 		if (login.scope.signinForm.$valid) {
          loginAction();
          login.scope.signinForm.$setPristine();
      } else {
          login.scope.timeout(function() {
              angular.element('.custom-error:first').focus();
          }, 200);
      }		
 	}

 	function stuctureFormData (){
    var data = { };
    data.identifier = login.data.email;
    data.password = login.data.password;
    return data;   
  }

  function loginAction(){
    var formData = stuctureFormData();

    var handleSuccess = function(data, status) {
        login.service.SetCredentials(data);
        $location.path('/');
    };

    var handleError = function(error) {
        alert("Error");
    };

    login.service.loginApi(formData)
        .success(handleSuccess)
        .error(handleError);
  }

}]);
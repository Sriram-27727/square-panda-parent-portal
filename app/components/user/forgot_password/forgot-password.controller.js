'use strict';

app.controller('forgotPassowordCtrl', ['$scope',  function ($scope, $location, AuthenticationService ) {

	var forgot = this;  
	forgot.scope = $scope;
	forgot.data = {};
	forgot.model = {};
	
	forgot.scope.submitForm = function(){
 		forgot.scope.submitted = true;
 		if (forgot.scope.signinForm.$valid) {
          loginAction();
          forgot.scope.signinForm.$setPristine();
      } else {
          forgot.scope.timeout(function() {
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
  		//vm.dataLoading = true;
	    AuthenticationService.loginApi(formData, handleSuccess);

	 	var handleSuccess = function(data, status) {
	       if (response.success) {
                AuthenticationService.SetCredentials(formData.identifier, formData.password);
                $location.path('/');
            } else {
                FlashService.Error(response.message);
                //vm.dataLoading = false;
            }
	    };

	 	
   	}
}]);
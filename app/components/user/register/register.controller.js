'use strict';

app.controller('registerCtrl', ['$scope', '$location', 'AuthenticationService', 'UserService',  function ($scope, $location, AuthenticationService, UserService) {

  var register = this;  
  register.scope = $scope;
  register.data = {};
  register.model = {};
  register.service = UserService;
  register.scope.dob = "";

 	register.scope.submitForm = function(){
 		register.scope.submitted = true;
 		if (register.scope.userForm.$valid) {
          save();
          register.scope.userForm.$setPristine();
      } else {
          register.scope.timeout(function() {
              angular.element('.custom-error:first').focus();
          }, 200);
      }		
 	}

  function stuctureFormData (){
      var data = { };
      data.firstName = register.data.firstName;
      data.lastName = register.data.lastName;
      data.email = register.data.email;
      data.password = register.data.password;
      //data.mobileNumber = register.data.mobileNumber;
      //data.dateofBirth = register.data.dateofBirth;
      //data.gender = register.data.gender;
      data.role = "TEACHER"; //register.data.role
      //data.grade = register.data.grade;
      //data.schoolName = register.data.schoolName;
      return data;   
  }

 	function save(){

    var formData = stuctureFormData();
 		
 		var handleSuccess = function(data) {
        console.log(data);
    };

    var handleError = function(error) {
       console.log(error);
    };

  	
    register.service.Create(formData)
        .success(handleSuccess)
        .error(handleError);
 	}
   	
}]);
'use strict';

describe('Controller: appCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var appCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    appCtrl = $controller('appCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(appCtrl.awesomeThings.length).toBe(3);
  });
});

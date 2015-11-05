blogApp.controller("loginCtrl", function($scope,$location) {

	console.log("hi");
	$scope.Login = function() {
		emailId: $scope.email;
		password: $scope.password;
		console.log($scope.email);
		console.log($scope.password);
	}
	
	$scope.registerpage = function() {
		$scope.email="";
		$scope.password="";
		$location.path("/Register");
	}
	
	console.log("In register Controlller");
	$scope.register = function() {
		firstName: $scope.firstname;
		lastname: $scope.lastname;
		contactNo: $scope.phnumber;
		emailId: $scope.email;
		password: $scope.password;
		console.log($scope.phnumber);
	}
});
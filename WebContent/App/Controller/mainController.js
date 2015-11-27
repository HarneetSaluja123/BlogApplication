blogApp.controller('mainCtrl',['$scope','$location','$modal', function($scope,$location,$modal){
	console.log("in main ctrl");
	$scope.logout = function () {
		$location.path("/Modal");
	};
	$scope.getProfile = function(){
		$location.path("/Profile")
	};
	
	$scope.getAccount = function() {
		$modal.open({
			templateUrl : 'App/views/switchAccountModal.html',
			controller : accountCtrl,
			backdrop : 'static',
			resolve : {}
		});
	};
	
	var accountCtrl = function($scope,$modalInstance){
		console.log("Inside switch account Controller");
		$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
	};
	};
}]);
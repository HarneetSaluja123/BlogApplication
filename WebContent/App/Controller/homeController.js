blogApp.controller('homeCtrl', ['$scope','$location','$route','$modal',
                           		function($scope,$location,$route,$modal){
	/*
	 * $scope.openLogin = function() { $modal.open({ templateUrl:
	 * 'loginForm.html', controller: 'loginCtrl', backdrop: 'static', }); };
	 */
	  $scope.login = function() { $location.path("/Login"); }
}]);
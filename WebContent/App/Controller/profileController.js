blogApp.controller('profileCtrl', [ '$scope', '$modal','$rootScope',
		function($scope, $modal,$rootScope) {
			console.log("in profile controller");

			var editName = function($scope, $modalInstance) {

				$scope.save = function() {
					console.log("data saved");
					$modalInstance.dismiss('cancel');
				};

				$scope.cancel = function() {
					$modalInstance.dismiss('cancel');
				};
			};

			/*
			 * var editEmailCtrl =function($scope,$modalInstance){ $scope.save =
			 * function(){ console.log("saving edited email");
			 * $modalInstance.dismiss('cancel'); }; $scope.cancel = function(){
			 * $modalInstance.dismiss('cancel'); }; };
			 */

			// Functions to invoke Model
			$scope.toggleModal = function() {
				$modal.open({
					templateUrl : 'App/views/editNameModal.html',
					controller : editName,
					backdrop : 'static',
					resolve : {}
				});
			};

			// Some helper functions that will be
			// available in the angular declarations

			// ------------------For Email---------------------------//
			$scope.showtooltip = false;
			$rootScope.value = $scope.user.email;
			/* $scope.value = $scope.user.email; */
			$scope.hideTooltip = function($scope) {

				// When a model is changed, the view will be automatically
				// updated by by AngularJS. In this case it will hide the
				// tooltip.

				$scope.showtooltip = false;
			}

			$scope.toggleTooltip = function(e) {
				e.stopPropagation();
				$scope.showtooltip = !$scope.showtooltip;
			}
			// Password-----------------//
			$scope.showPassword =false;
			$rootScope.password = $scope.user.password;
			
			$scope.hidePassword = function ($scope) {
				$scope.showPassword = false; 
			}
			$scope.tooglePassword = function(e){
				e.stopPropagation();
				$scope.showPassword = !$scope.showPassword;
			}
			
			
			//---------Contact---------//
			$scope.showContact =false;
			$scope.contact = $scope.user.contactno ;
			
			$scope.hideContact = function() {
				console.log("in hideContact");
				$scope.showContact = false;
			}
			
			$scope.toogleContact = function(e){
				e.stopPropagation();
				$scope.showContact = !$scope.showContact;
			}
			
			//----------------------name--------------//
			$scope.fname = $scope.user.firstname ;
			$scope.lname = $scope.user.lastname;
			$scope.firstLast = $scope.user.firstname +" "+ $scope.user.lastname;
			 $scope.showName = false;
			 
			 $scope.hideName = function(){
				 $scope.showName = false;
			 }
			 $scope.toogleName = function(e){
				 e.stopPropagation();
				 $scope.showName = !$scope.showName;
			 }
		}]);
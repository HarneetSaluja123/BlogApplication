blogApp.controller('modelCtrl', ['$scope','$location','$route','$modal','$http','$rootScope','$cookieStore',
                           		function($scope,$location,$route,$modal,$http,$rootScope,$cookieStore){

	console.log("in modal Ctrl");
	/*var loginCtrl = function ($scope, $modalInstance) {
    	console.log("in login controller");
		
	};*/
//
	
	var loginCtrl = function($scope,$location,$http,$window,$modalInstance) {

		console.log("hi");
		$scope.Login = function() {
			emailId: $scope.email;
			password: $scope.password;
			console.log($scope.email);
			console.log($scope.password);
			
			$http.get('JsonFiles/loginData.json').success(function(data) {
				$scope.records = data;
				console.log($scope.records);
				
				if(data.name != null && data.name == $scope.email){
					console.log("valid email Id");
					if(data.password != null && data.password == $scope.password)
						{
						$window.alert("Login Susseccful!!!!!");
						console.log("valid password!");
						$location.path("/Main");
						$modalInstance.dismiss('cancel');
						}
				}else{
					$window.alert("Invalid Login Details !!");
					console.log("Invalid Login Details !!");
					$location.path("/Home");
				}
				/*var jsonData = $scope.records;
				for(var i=0 ; i< jsonData.length ; i++)
					{
					console.log("in for loop");
						if(jsonData[i].name != null && jsonData[i].name == $scope.email){
							if(jsonData[i].password != null && jsonData[i].password == $scope.password)
								{
									console.log("Valid Data");
								}
						}
						else{
							console.log("Invalid data");
						}
					}*/
				/*angular.forEach($scope.records , function(value,key)
				{
					if(value.name == $scope.email)
						{
						console.log("valid email Id");
						}
				});*/
			});
		}
		
		$scope.registerpage = function() {
			$scope.email="";
			$scope.password="";
			$location.path("/Register");
			$modalInstance.dismiss('cancel');
		}
		
		
		$rootScope.register = function() {
			console.log("In register Controlller");
			firstName = $scope.firstname;
			lastname = $scope.lastname;
			contactNo = $scope.phnumber;
			emailId = $scope.email;
			password = $scope.password;
			$scope.userInfo = {
				contactno : $scope.phnumber,
				email : $scope.email,
				password: $scope.password,
				firstname:$scope.firstname,
				lastname:$scope.lastname,
				/*fullName : function(){
					var nameObj = $scope.userInfo;
					return nameObj.firstname +" "+ nameObj.lastname;
				}*/
			};
			$rootScope.user = $scope.userInfo;
			console.log($scope.phnumber);
			$location.path("/Main");
		}
		
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
		
	};
	
	$scope.toggleModal = function() {
		$modal.open({
			templateUrl: 'App/views/test.html',
			controller: loginCtrl,
			backdrop: 'static',
			resolve: {}
		});
	};
	
	 $().ready(function() {
	        $('.jimgMenu ul').kwicks({max: 310, duration: 300, easing: 'easeOutQuad'});
	    });

	    $scope.clickLandScape = function(){
	    	console.log($rootScope.user);
	    	$http.get('JsonFiles/LandScape.json').
	    	success(function(data) {
	    		      $scope.records = data;
	    		      $scope.object = {
	    		    		   jsonData : $scope.records
	    		      };
	    		      $rootScope.landScape =  $scope.object;
	    		      $location.path("/Main");
	    		      return $scope.records;
			});
	    	
	    };
	
}]);


blogApp.controller("loginCtrl", function($scope,$location,$http,$window,$modalStack) {

	console.log("hi");
	$modalStack.dismissAll();
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
					}
			}else{
				$window.alert("Invalid Login Details !!");
				console.log("Invalid Login Details !!");
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
		$modalStack.dismissAll();
	}
	
	console.log("In register Controlller");
	$scope.register = function() {
		firstName: $scope.firstname;
		lastname: $scope.lastname;
		contactNo: $scope.phnumber;
		emailId: $scope.email;
		password: $scope.password;
		$location.path("/Main");
		console.log($scope.phnumber);
	}
	
    $().ready(function() {

        $('.jimgMenu ul').kwicks({max: 310, duration: 300, easing: 'easeOutQuad'});

    });

});
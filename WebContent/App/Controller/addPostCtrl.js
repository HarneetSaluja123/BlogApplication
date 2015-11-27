blogApp.controller('addPostCtrl', function ($scope, $modal, $log,BlogsCategories) {

  $scope.animationsEnabled = true;
  
/*  $scope.likeData ="Like";
  $scope.like = function() {
	$scope.likeData = "Unlike";
};*/
      $scope.toggle = true;
      $scope.toggleCount = 0 ;
      $scope.UnlikeCount = 0;
      
      $scope.$watch('toggle', function(){
          $scope.toggleText = $scope.toggle ? 'Like!' +" " + $scope.toggleCount++ : 'Unlike' +" " + $scope.UnlikeCount++ ;
          
      });

  var ModalInstanceCtrl  = function($scope, $modalInstance) {

	  $scope.blogs = null ;
	  $scope.blogs = BlogsCategories.blogs();
	  
//	  console.log($scope.blogs)
	  $scope.savePost = function (isValid) {
		  var x=document.getElementById("loopDivId");
		  var node = document.createTextNode($scope.message);
		  console.log($scope.blogs)
		  console.log($scope.message)
		   console.log($scope.id)
		  var section = document.createElement("section");
		  var footer = document.createElement("footer");
		  var newDiv = document.createElement("div");
		  var parentDiv = document.createElement("div");
		  newDiv.style.backgroundColor= "white";
		  newDiv.style.marginTop= "18px"; 
		  newDiv.style.marginLeft= "30px"; 
		  newDiv.style.width="600px"; 
		  newDiv.style.height= "auto";
		  newDiv.style.fontSize= "13px";
		  newDiv.fontStyle= "italic";	
		  newDiv.appendChild(node);
		  parentDiv.appendChild(section).appendChild(newDiv).appendChild(node);
		  parentDiv.appendChild(footer);
		  x.insertBefore(parentDiv,x.childNodes[0]);
		  $modalInstance.close($scope.message);
		  
	  };

	  $scope.cancel = function () {
		  $modalInstance.dismiss('cancel');
	  };
	  
  };
  
	$scope.toggleModal = function() {
		$modal.open({
			animation: $scope.animationsEnabled,
			templateUrl : 'App/views/addPost.html',
			controller : ModalInstanceCtrl,
			backdrop : 'static',
			resolve :  {
			}
		
		});
	};
	
	$scope.toggleShareModal = function(){
		$modal.open({
			animation: $scope.animationsEnabled,
			templateUrl : 'App/views/SharePost.html',
			controller : ModalInstanceCtrl,
			backdrop : 'static',
			resolve :  {
			}
		});
	};
	
	
});

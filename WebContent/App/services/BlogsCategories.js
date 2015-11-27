blogApp.service('BlogsCategories', [function() {
 return {
   blogs: function() {
	   types = [{
		   blogTypeId: 1,
		   blogType: 'Art'
	   },{
		   blogTypeId: 2,
		   blogType: 'Technology'
	   },{
		   blogTypeId: 3,
		   blogType: 'Science'
	   },{
		   blogTypeId: 4,
		   blogType: 'Nature'
	   },{
		   blogTypeId: 5,
		   blogType: 'Health'
	   },{
		   blogTypeId: 6
		   ,blogType: 'Business'
	   }];
     return types;
   }
 };
}]);
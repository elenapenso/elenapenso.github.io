(function() {
	var app = angular.module('store',['store-products']);

	app.controller('StoreController', ['$http', function($http){
		var store = this;   /* to recover data from the http request */
		store.products = [];

		$http({ method: 'GET', url: '/products.json' }).success(function(data){
			store.products = data;
		});
	}]);

	app.controller('ReviewController', function(){
		this.review = {};	
		this.addReview = function(product) {			
			product.reviews.push(this.review);
			this.review = {};	
		};
	});

})();
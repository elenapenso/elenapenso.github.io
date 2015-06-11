(function() {
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Hectagonal Rubi',
			price: 2.95,
			description: 'This is a very precious gem',
			canPurchase: false,
			image: '1.png',
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@doe.com",		
				},
				{
					stars: 1,
					body: "This product sucks!",
					author: "tim@hater.com",	
				}	

			]
		},
		{
			name: 'Emerald Drop',
			price: 3,
			description: 'This is a rare to find gem',
			canPurchase: true,
			image: '2.png',
			reviews: [],
		},
		{
			name: 'Jade',
			price: 1.5,
			description: 'This is a special power gem',
			canPurchase: true,
			image: '3.png',
			reviews: [],
		},
		{
			name: 'Green Quartz',
			price: 5.95,
			description: 'This is a special power gem',
			canPurchase: true,
			image: '4.png',
			reviews: [],
		},
		{
			name: 'Zephyr',
			price: 8,
			description: 'This is a special power gem',
			canPurchase: true,
			image: '5.png',
			reviews: [],
		},
		{
			name: 'Triangular Amethyste',
			price: 12.05,
			description: 'This is a nobility gem',
			canPurchase: true,
			image: '6.png',
			reviews: [],
		},
		{
			name: 'Royal Pink Diamond',
			price: 345.20,
			description: 'Crafted in the mines of Salheim',
			canPurchase: true,
			image: '7.png',
			reviews: [],
		}
		];
/*
	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab) {               
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});
*/	
	app.controller('ReviewController', function(){
		this.review = {};	
		this.addReview = function(product) {			
			product.reviews.push(this.review);
			this.review = {};	
		};
	});

	app.directive('productTitle', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-title.html'
		};	
	});

	app.directive('productPanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1;
				this.selectTab = function(setTab) {               
					this.tab = setTab;
				};
				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panels',
		};
	});

})();
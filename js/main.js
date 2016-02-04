angular.module('RestaurantApp',[])
	
angular.module('RestaurantApp')
	.factory('factoryRestInfo', [function() {


// INGREDIENTS

var Ingredients = function(name, cals, vegan, glutenFree, citrusFree) {

	this.name = name,
	this.cals = cals,
	this.vegan = vegan,
	this.glutenFree = glutenFree,
	this.citrusFree = citrusFree

}

		var bread = new Ingredients (

			"French Bread",
			600,
			true,
			false,
			true

			) 

		var potatoes = new Ingredients (

			"fries",
			200,
			true,
			true,
			true

			)

		var escargot = new Ingredients (

			"mollusks",
			200,
			false,
			true,
			true

			)

		var vodka = new Ingredients (

			"Russian Potato Vodka",
			250,
			true,
			true,
			true

			)

		var citrus = new Ingredients (

			"Limes or Lemons",
			10,
			true,
			true,
			false

			)

		var soda = new Ingredients (

			"Ginger Beer",
			120,
			true,
			true,
			true

			)

		var lamb = new Ingredients (

			"Lamb Loin",
			600,
			false,
			true,
			true

			)

		var gravy = new Ingredients (

			"Duck Fat Gravy",
			2000,
			false,
			false,
			true

			)


// DRINKS
var drinkArray = [];
var DrinkItem = function(name, description, price, contents, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.description = description;
	this.price = '$' + price;
	this.contents = contents;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
	drinkArray.push(this)
}

		var moscowMule = new DrinkItem (

			'Moscow Mule',
			'A Moscow Mule, also known as a Vodka buck, is a mule made with a high-quality vodka, a spicy ginger beer, and lime juice, garnished with a slice or wedge of lime. It is usually served in a copper mug.',
			12.00,
			[soda, citrus, vodka],
			true,
			true,
			false

			)


		var margie = new DrinkItem (

			'House Margarita',
			'Mexico\'s favorite exported beverage, now available North of the Border!',
			10.00,
			[vodka, citrus],
			true,
			true,
			true

			)

		var wine = new DrinkItem (

			'House, White, or Red',
			'Enjoy stunning regional wines from our favorite producers in Provence',
			8.50,
			[citrus],
			true,
			true,
			true

			)



// FOOD PLATES


var plateArray = [];
		var FoodPlate = function(name, description, price, contents, vegan, glutenFree, citrusFree) {

			this.name = name;
			this.description = description;
			this.price = '$' + price;
			this.contents = contents;
			this.vegan = vegan;
			this.glutenFree = glutenFree;
			this.citrusFree = citrusFree;
			plateArray.push(this)

		}

		var banhMi = new FoodPlate (

			'Banh Mi Sliders',
			'3 mini sandiwches, made of elegenatly complex flavor layers due to the marriage of French Bread with roasted lamb loin, topped with pickled veggies.',
			14.95,
			[bread, lamb],
			false,
			false,
			true

			)

		var poutine = new FoodPlate (

			'Duck Fat Brisket Poutine',
			'French fries luxourisly covered in a duck fat gravy with tender Brisket',
			18.95,
			[potatoes, gravy],
			false,
			true,
			true

			)

		var escargot = new FoodPlate (

			'Garlic Butter Escargot',
			'5 jumbo garden fresh terrestrial pulmonates, locally harvested and braised in a rich garlic butter sauce.  Served with crusty french bread.',
			12.95,
			[escargot, gravy, citrus, bread],
			false,
			false,
			true

			)

// MENU

var menuArray = []
var Menu = function(drinks, foods) {
	this.drinks = drinks;
	this.foods = foods;
	menuArray.push(this)
}

		var menuArray = new Menu(drinkArray, plateArray)

// ORDERS

// var orderArray = []
// var Order = function(items) {
// 	this.items = items;
// }

// 		var orderArray = new Order(

// 			[drinkArray[0],
// 			plateArray[1],
// 			plateArray[2]]

// 			)

// RESTAURANT INFO

var Restaurant = function(name, address, phone, description, email, owners, menu) {

	this.name = name;
	this.address = address;
	this.phone = phone;
	this.description = description;
	this.email = email;
	this.owners = owners;
	this.menu = menuArray;


}

		var restaurantInfo = new Restaurant (

			'Restaurant de Semain',
			'101 Main Street.  Boulder, CO 80303',
			'303-EAT-HERE',
			'A fusion of Vietnamese and modern French, focusing on bold flavors and exciting drink pairings.  We offer items to consider most dietary restrictions too!!',
			'semain@eat-here.com',
			'Nadya Hill and Phil Lucks',
			menuArray

			)


// CUSTOMER

var Customer = function(vegan, glutenFree, citrusFree){
	this.vegan = vegan
	this.glutenFree = glutenFree
	this.citrusFree = citrusFree
}

	var customerDiet = new Customer( true, false, false )


// TRUTHY-FALSEY LISTS
var trueFalseSetter = [{
				hideDescription : true,
				hideVegan : true,
				hideGlutenFree : true,
				hideCitrusFree	: true,
				hideItemBox: true
		}]

///////////////////////////////

	return {

		restaurant		: restaurantInfo,
		menuArray		: menuArray,
		trueFalseSetter	: trueFalseSetter

	}

	}]);

//////////////////////////////

// Restaurant.prototype.stringify = function() {
// 	return 'Welcome to ' + this.name + '!  We\'re excited to have you.\n  Conveniently located at ' + this.address + '.  Our new menu consists of:\nThese drinks: ' + (drinkArray.map(function(item){return item.name})) + ', and this food: ' + ((plateArray.map(function(item){return item.name}))) + '.'
// }
// console.log(restaurantInfo.stringify());

angular.module('RestaurantApp')
	.controller('controllerRestaurant', ['$scope', 'factoryRestInfo', function($scope, factoryRestInfo) {


		// SCOPES

		$scope.menuComplete = factoryRestInfo.menuArray; 
		$scope.restaurantDeets = factoryRestInfo.restaurant;
		$scope.trueFalseSetter = factoryRestInfo.trueFalseSetter

		// CLICK FUNCTIONS
		// $scope.showToolTip = function() {

		// }


	}]);














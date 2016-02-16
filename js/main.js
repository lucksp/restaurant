angular.module('RestaurantApp',[])
	
angular.module('RestaurantApp')
	.factory('factoryRestInfo', [function() {


// INGREDIENTS

var ingredientArray = [];
var Ingredients = function(name, cals, vegan, glutenFree, citrusFree) {

	this.name = name,
	this.cals = cals,
	this.vegan = vegan,
	this.glutenFree = glutenFree,
	this.citrusFree = citrusFree,
	ingredientArray.push(this)
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
var DrinkItem = function(name, description, price, contents) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.contents = contents;
	this.activeToolTip = false;
	drinkArray.push(this)
}
DrinkItem.prototype.isVegan = function(){
	var vegan = true;

	this.contents.forEach(function (element) {
		if(element.vegan === false) {
			vegan = false
		}
	})
	return vegan
}
DrinkItem.prototype.isGlutenFree = function(){
	var glutenFree = true;

	this.contents.forEach(function (element) {
		if(element.glutenFree === false) {
			glutenFree = false
		}
	})
	return glutenFree
}
DrinkItem.prototype.isCitrusFree = function(){
	var citrusFree = true;

	this.contents.forEach(function (element) {
		if(element.citrusFree === false) {
			citrusFree = false
		}
	})
	return citrusFree
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
			false

			)

		var wine = new DrinkItem (

			'House, White, or Red',
			'Enjoy stunning regional wines from our favorite producers in Provence.',
			8,
			[citrus],
			true,
			true,
			false

			)

// FOOD PLATES


var plateArray = [];
		var FoodPlate = function(name, description, price, contents) {

			this.name = name;
			this.description = description;
			this.price = price;
			this.contents = contents;
			this.activeToolTip = false;
			plateArray.push(this)

		}
FoodPlate.prototype.isVegan = function(){
	var vegan = true;

	this.contents.forEach(function (element) {
		if(element.vegan === false) {
			vegan = false
		}
	})
	return vegan
}
FoodPlate.prototype.isGlutenFree = function(){
	var glutenFree = true;

	this.contents.forEach(function (element) {
		if(element.glutenFree === false) {
			glutenFree = false
		}
	})
	return glutenFree
}
FoodPlate.prototype.isCitrusFree = function(){
	var citrusFree = true;

	this.contents.forEach(function (element) {
		if(element.citrusFree === false) {
			citrusFree = false
		}
	})
	return citrusFree
}


		var banhMi = new FoodPlate (

			'Banh Mi Sliders',
			'3 mini sandiwches, made of elegenatly complex flavor layers due to the marriage of French Bread with roasted lamb loin, topped with pickled veggies.',
			14.95,
			[bread, lamb],
			false,
			true
			)

		var poutine = new FoodPlate (

			'Duck Fat Brisket Poutine',
			'French fries luxourisly covered in a duck fat gravy with tender Brisket.',
			18.95,
			[potatoes, gravy],
			false,
			true

			)

		var escargot = new FoodPlate (

			'Garlic Butter Escargot',
			'5 jumbo garden fresh terrestrial pulmonates, locally harvested and braised in a rich garlic butter sauce.  Served with crusty french bread.',
			12.95,
			[escargot, gravy, citrus, bread],
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
			'A fusion of Vietnamese and modern French, focusing on bold flavors and exciting drink pairings.  We offer items to consider most dietary restrictions too!!\nOrder Online when browsing our menu below.',
			'semain@eat-here.com',
			'Nadya Hill and Phil Lucks',
			menuArray
			)
// CUSTOMER

var custyArray = []
var Customer = function(vegan, glutenFree, citrusFree){
	this.vegan = vegan
	this.glutenFree = glutenFree
	this.citrusFree = citrusFree
	custyArray.push(this)
}

///////////////////////////////

	return {
		restaurant		: restaurantInfo,
		menuArray		: menuArray,
		custyArray  	: custyArray,
		ingredientArray : ingredientArray,
		drinkArray		: drinkArray,
		plateArray		: plateArray
	}

	}]);

//////////////////////////////

// Restaurant.prototype.stringify = function() {
// 	return 'Welcome to ' + this.name + '!  We\'re excited to have you.\n  Conveniently located at ' + this.address + '.  Our new menu consists of:\nThese drinks: ' + (drinkArray.map(function(item){return item.name})) + ', and this food: ' + ((plateArray.map(function(item){return item.name}))) + '.'
// }
// console.log(restaurantInfo.stringify());

angular.module('RestaurantApp')
	.controller('controllerRestaurant', ['$scope', 'factoryRestInfo', function($scope, factoryRestInfo) {

		// FACORY to CONTROLLER SCOPES

		$scope.custyArray = factoryRestInfo.custyArray;
		$scope.menuComplete = factoryRestInfo.menuArray; 
		$scope.restaurantDeets = factoryRestInfo.restaurant;
		$scope.ingredientArray = factoryRestInfo.ingredientArray;
		$scope.drinkArray = factoryRestInfo.drinkArray;
		$scope.plateArray = factoryRestInfo.plateArray

		// SHOW-HIDE FUNCTIONS 

		$scope.userMessage = "Enter Your Info"	
			$scope.messageList = function() {
				$scope.listAppearWhenClicked = !$scope.listAppearWhenClicked;
					if ($scope.listAppearWhenClicked === !true) {
						$scope.userMessage = "Enter Your Info"
					}
					else {
						$scope.userMessage = "Close"
					}
				}

		// ORDER TOTAL FUNCTION

		$scope.rounded = 0
		$scope.orderTotal = 0
		$scope.order = [];
			$scope.addItem = function (item) {
				$scope.order.push(item)
				$scope.orderTotal = $scope.orderTotal+item.price;
				$scope.rounded = $scope.orderTotal.toFixed(2);
			}

		// CUSTOMER INFO & TOOLTIPPER

		$scope.emptyForm = function () {
			$scope.diet = {
			name: "",
			address: "",
			phone: "",
			vegan : "",
			glutenFree : "",
			citrusFree : ""
			}
		}

		$scope.saveCusty = function() {
				$scope.listAppearWhenClicked = !$scope.listAppearWhenClicked;
				$scope.custyArray.push($scope.diet);
				console.log($scope.custyArray)

			for (var i = 0; i < $scope.custyArray.length; i++) {

				for (var j = 0; j < $scope.plateArray.length; j++) {
					if ( $scope.custyArray[i].vegan === true && $scope.plateArray[j].isVegan() === false) {
						$scope.plateArray[j].activeToolTip = true;
					}
					else if ($scope.custyArray[i].glutenFree === true && $scope.plateArray[j].isGlutenFree() === false){
						$scope.plateArray[j].activeToolTip = true;
					}
					else if ($scope.custyArray[i].citrusFree === true && $scope.plateArray[j].isCitrusFree() === false){
						$scope.plateArray[j].activeToolTip = true;
					}
				}
				for (var j = 0; j < $scope.drinkArray.length; j++) {
					if ( $scope.custyArray[i].vegan === true && $scope.drinkArray[j].isVegan() === false) {
						$scope.drinkArray[j].activeToolTip = true;
					}
					else if ($scope.custyArray[i].glutenFree === true && $scope.drinkArray[j].isGlutenFree() === false){
						$scope.drinkArray[j].activeToolTip = true;
					}
					else if ($scope.custyArray[i].citrusFree === true && $scope.drinkArray[j].isCitrusFree() === false){
						$scope.drinkArray[j].activeToolTip = true;
					}
				}
			}
			$scope.emptyForm();
				if ($scope.listAppearWhenClicked === !true) {
					$scope.userMessage = "Enter Your Info"
				}
				else {
					$scope.userMessage = "Close"
				}
		}
			
			$scope.resetForm = function() {
				$scope.custyArray = []
				for (var i = 0; i < $scope.plateArray.length; i++) {
					$scope.plateArray[i].activeToolTip = false;
				}
				for (var j = 0; j < $scope.drinkArray.length; j++) {
					$scope.drinkArray[j].activeToolTip = false;
				}
			}
	}]);


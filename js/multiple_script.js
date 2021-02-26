// Define a constructor function template for restaurants
function Restaurant(name, tables, booked) {
    // Object properties
    this.name = name;
    this.tables = tables;
    this.booked = booked;
    this.checkAvailablity = function() {
        return this.tables - this.booked;
    };
}

// Define to instances of the restaurant and their arguments
var clayRestaurant = new Restaurant('Clayton', 68, 3);
var lemonRestaurant = new Restaurant('Lemon', 56, 15);

// Declare a variable to hold the name of the restaurant and room availability 
var details1 = clayRestaurant.name + ' tables: ';
    // add content to an existing variable----
    details1 += clayRestaurant.checkAvailablity();
// Get the restaurant1 div
var elRestaurant1 = document.getElementById('restaurant1');
// Add the variables created onto the empty div
elRestaurant1.textContent = details1;

var details2 = lemonRestaurant.name + ' tables: ';
    details2 += lemonRestaurant.checkAvailablity();
var elRestaurant2 = document.getElementById('restaurant2');
elRestaurant2.textContent = details2;


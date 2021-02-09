function Restaurant (name, tables, booked){
this.name = name;
    this.tables = tables;
    this.booked = booked;
    this.checkAvailablity = function() {
        return this.tables - this.booked;
    };
}

var yellowRestaurant = new Restaurant('Yellow', 30, 18);
var greenRestaurant = new Restaurant('Green', 52, 15);

var details1 = yellowRestaurant.name + 'tables: ';

details1 += yellowRestaurant.checkAvailablity();

var elRest1 = document.getElementById('rest1');
elRest1.textContent = details1;
add
var details2 = greenRestaurant.name + 'tables: ';
details2 += greenRestaurant.checkAvailablity();

var elRest2 = document.getElementById('rest2');
elRest2.textContent = details2;

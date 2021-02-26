function Restaurant(name, tables, booked){
    this.name = name;
    this.tables = tables;
    this.booked = booked;
    this.checkAvailablity = function(){
        return this.tables - this.booked;
    };
}

var clyatonRestaurant = new Restaurant('Clayton', 128, 25);
var lemonRestaurant = new Restaurant('Lemon', 76, 14 )

console.log(clyatonRestaurant, lemonRestaurant);
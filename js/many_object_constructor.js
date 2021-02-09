function Restaurant(name, tables, booked){
    this.name = name;
    this.tables = tables;
    this.booked = booked;
    this.checkAvailablity = function(){
        return this.tables - this.booked;
    };
}

var yellowRestaurant = new Restaurant('Yellow', 35, 10);
var greenRestaurant = new Restaurant('Green', 50, 35);

console.log(yellowRestaurant, greenRestaurant);

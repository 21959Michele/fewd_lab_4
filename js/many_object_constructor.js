function Restaurant(name, tables, booked){
    this.name = name;
    this.tables = tables;
    this.booked = booked;
    this.checkAvailablity = function(){
        return this.tables - this.booked;
    };
}

var theBankRestaurant = new Restaurant('The Bank', 128, 25);
var wuffRestaurant = new Restaurant('Wuff Restaurant', 76, 14 )

console.log(theBankRestaurant, wuffRestaurant);
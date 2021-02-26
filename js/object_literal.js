var restaurant = {
    // Object properties
    name: 'Clayton',
    tables: 110,
    booked: 25,
    fireplace: true,
    tableTypes: ['single', 'couple', 'group', 'party'],
    checkAvailablity: function() {
        return this.tables - this.booked;
    }
};

var restaurantName = restaurant.name;
var tablesFree = restaurant.checkAvailablity();

var restaurantName = restaurant['name', 'tables'];

console.log(restaurant['name'] + restaurant['tables']);
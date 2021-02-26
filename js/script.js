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

var elName = document.getElementById('restaurantName');
elName.textContent = restaurant.name;

var eltables = document.getElementById('tables');
eltables.textContent = restaurant.checkAvailablity();


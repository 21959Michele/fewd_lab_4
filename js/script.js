var restaurant = {
    // Object properties
    name: 'Yellow',
    tables: 110,
    booked: 25,
    fireplace: true,
    tablesTypes: ['individual', 'couple', 'small group', 'party'],
    checkAvailablity: function() {
        return this.tables - this.booked;
    }
};

var elName = document.getElementById('restaurantName');
elName.textContent = restaurant.name;

var eltables = document.getElementById('tables');
eltables.textContent = restaurant.checkAvailablity();


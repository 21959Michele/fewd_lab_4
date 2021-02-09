var restaurant = new Object();

restaurant.name = 'Yellow';
restaurant.tables = 20;
restaurant.booked = 15;
restaurant.checkAvailablity = function(){
    return this.tables - tables.booked;
};


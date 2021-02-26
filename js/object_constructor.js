var restaurant = new Object();

restaurant.name = 'Calyton';
restaurant.tables = 45;
restaurant.booked = 24;
restaurant.checkAvailablity = function(){
    return this.tables - this.booked;
};


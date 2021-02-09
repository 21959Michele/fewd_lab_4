var restaurant = {
    name : 'Peter',
    tables : 80,
    booked : 67
};

restaurant.fireplace = true;
restaurant.carPark = false;
delete restaurant.booked;

var elName = document.getElementById('restaurantName');
elName.textContent = restaurant.name;

var elFireplace = document.getElementById('fireplace');
elFireplace.className = restaurant.fireplace;

var elCarPark = document.getElementById('carPark');
elCarPark.className = restaurant.carPark;

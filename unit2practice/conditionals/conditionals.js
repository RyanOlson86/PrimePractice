let seatsInCar = 7;
let passengers = 5;
let infants = 1;
let infantSeats = 1;
let fullTank = true;

//check if there is room for everyone
if(seatsInCar >= passengers && infantSeats >= infants) {
    console.log('You have enough room!');
    if( fullTank ){
        console.log('You are ready to hit the road');
    } else{
        console.log('must gas up first!');
    }
} else {
    console.log('There is not enough room for passengers or infants');
}


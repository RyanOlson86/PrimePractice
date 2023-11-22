const seatsInCar = 5;
let passengers = [];
let tankFull = true;

function enoughSeats() {
  console.log("in enoughSeats");
  // check if seatsInCar >= # of passengers
  if (seatsInCar >= passengers.length) {
    return true;
  } else {
    return false;
  }
} // end enoughSeats

function getInCar(nameOfPassenger) {
  console.log("in getInCar", nameOfPassenger);
  // push this new passenger into passenger array
  passengers.push(nameOfPassenger);
  return passengers;
}

function readyForTrip() {
  if (enoughSeats && tankFull) {
    return true;
  } else {
    return false;
  }
}

getInCar("Ryan");
getInCar("Bryon");
getInCar("John");
getInCar("Jenny");

console.log('enough seats?', enoughSeats());
console.log('Ready for tri[p?', readyForTrip());
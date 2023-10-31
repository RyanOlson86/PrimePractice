console.log('js');

let motorcycles = 9;
let cars = 0;
let vehicles = motorcycles + cars;

//can concatenate with comma in console.log only or use +
console.log('bikes: ', motorcycles);
console.log('had to put soft tail in the garage');

motorcycles --;
console.log('bikes: ' + motorcycles);
console.log('cars: ' + cars);
vehicles = motorcycles + cars;
console.log('vehicles: ' + vehicles);

console.log('bought 2 more cars');
cars += 2;
console.log('bikes: ' + motorcycles);
console.log('cars: ' + cars);
vehicles = motorcycles + cars;
console.log('vehicles: ' + vehicles);

console.log('wanted another car');
cars ++;
console.log('bikes: ' + motorcycles);
console.log('cars: ' + cars);
vehicles = motorcycles + cars;
console.log('vehicles: ' + vehicles);

console.log('sold 3 bikes');
motorcycles -= 3;
console.log('bikes: ' + motorcycles);
console.log('cars: ' + cars);
vehicles = motorcycles + cars;
console.log('vehicles: ' + vehicles);


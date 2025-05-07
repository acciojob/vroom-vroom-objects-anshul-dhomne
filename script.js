// Complete the js code
// Car Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// SportsCar Constructor
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor with make and model
  Car.call(this, make, model);

  // Add topSpeed property
  this.topSpeed = topSpeed;
}

// Inherit from Car
SportsCar.prototype = Object.create(Car.prototype);

// Reset constructor reference
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Example usage
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());  // Output: 200

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

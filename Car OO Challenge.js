// Part One
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep.";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

// Part Two
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

// ## **Part Three**
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

// Part Four
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(vehicle) {
        // Check if the input is a valid vehicle object
        if (typeof vehicle !== 'object' || vehicle === null) {
            return 'Only vehicles are allowed in here!';
        }
        // Check if the garage is at capacity
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        //Add vehicle to garage if capacity hasn't been reached.
        this.vehicles.push(vehicle);
        return 'Vehicle added!';
    }
}

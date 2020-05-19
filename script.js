// Object Literals, Pseudo-Classes, and Methods:

// ES6:
 class Person {
     constructor (name, city, age) {
         this.name = name;
         this.city = city;
         this.age = age;
     }
     sayHello() {
        console.log(`Hey, my name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}.`);
     }
 }

let p1 = new Person('Katie', 'Orange', '31');
let p2 = new Person('Andrew', 'Boston', '31');
let p3 = new Person('Vianca', 'Manchester', '31');
let p4 = new Person('Felicia', 'Springfield', '31');
let p5 = new Person('Vicky', 'Trumbull', '30');

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();


// pre-ES6 version:
// function Person (name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }

// Person.prototype.sayHello = function() {
//     console.log(`Hey, my name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}.`);
// }

// let p1 = new Person('Katie', 'Orange', '31');
// let p2 = new Person('Andrew', 'Boston', '31');
// let p3 = new Person('Vianca', 'Manchester', '31');
// let p4 = new Person('Felicia', 'Springfield', '31');
// let p5 = new Person('Vicky', 'Trumbull', '30');

// p1.sayHello();
// p2.sayHello();
// p3.sayHello();
// p4.sayHello();
// p5.sayHello();




// long-handed:
// let person1 = {
//     name: 'Katie',
//     sayHello() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }

// }

// let person2 = {
//     name: 'Andrew',
//     sayHello() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }

// }

// let person3 = {
//     name: 'Vianca',
//     sayHello() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }

// }

// let person4 = {
//     name: 'Felicia',
//     sayHello() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }

// }

// let person5 = {
//     name: 'Vicky',
//     sayHello() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }

// }

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();


// Inheritance:

class Vehicle {
    constructor(manufacturer, wheels) {
        this.manufacturer = manufacturer;
        this.wheels = wheels;
        this.getType();
    }

    getType = () => {
        if (this.wheels > 1) {
            this.type = 'sedan/truck';
        } else {
            this.type = 'motorcycle';
        }
    }

    aboutVehicle = () => console.log(`This vechicle is a ${this.type}, made by ${this.manufacturer}, and has ${this.wheels} wheels.`);
    
}

class Truck extends Vehicle {
    constructor(manufacturer, wheels) {
        super(manufacturer, wheels);
        this.bed = true;
        this.type = 'truck';
        this.steering = 'steering wheel';
    }
    aboutVehicle = () => {
        console.log(`This is a ${this.type}, it has a ${this.steering}, it is made by ${this.manufacturer}, and has ${this.wheels} wheels.`);
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, wheels, size, mpg) {
        super(manufacturer, wheels);
        this.size = size;
        this.mpg = mpg;
        this.bed = false;
        this.steering = 'steering wheel';
        this.type = 'sedan';
    }
    aboutVehicle = () => {
        console.log(`This is a ${this.type}, it has a ${this.steering}, it is ${this.size} and gets ${this.mpg} mpg.  It is made by ${this.manufacturer}, and has ${this.wheels} wheels.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, wheels) {
        super(manufacturer, wheels);
        this.doors = 0;
        this.steering = 'handlebars';
        this.type = 'motorcycle';
    }
    aboutVehicle = () => {
        console.log(`This is a ${this.type}, it has ${this.steering}, it has ${this.doors} doors.  It is made by ${this.manufacturer}, and has ${this.wheels} wheels.`);
    }
}

let newMotorcycle = new Motorcycle('Honda', 2);
console.log(newMotorcycle);
newMotorcycle.aboutVehicle();

let newSedan = new Sedan('Mazda', 4, 'small', '35');
console.log(newSedan);
newSedan.aboutVehicle();

let newTruck = new Truck('Ford', 4);
console.log(newTruck);
newTruck.aboutVehicle();

let newVehicle = new Vehicle('Subaru', 4);
console.log(newVehicle);
newVehicle.aboutVehicle();
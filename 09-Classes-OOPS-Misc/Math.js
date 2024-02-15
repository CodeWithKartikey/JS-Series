// Concept of Object.getOwnPropertyDescriptor

/*
    value: The current value of the property.
    writable: Whether the property can be changed (true means it can).
    enumerable: Whether the property will be listed during enumeration of the object's properties (true means it will).
    configurable: Whether the property descriptor can be changed or if the property can be deleted from the object (true means it can).
*/

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);

console.log(Math.PI);

Math.PI = 5; // You can't change the value of PI because It is a constant value.
console.log(Math.PI);

const chaiType = {
    name: 'Masala Chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai is preparing.");
    }
}

console.log(Object.getOwnPropertyDescriptor(chaiType, "name"));

Object.defineProperty(chaiType, 'name', {
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(chaiType, "name"));

for (let [key, value] of Object.entries(chaiType)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

const car = {
    color: 'blue',
    model: 'Toyota',
    year: 2022
};

const descriptor = Object.getOwnPropertyDescriptor(car, 'color');
console.log(descriptor);

// Making 'color' non-enumerable
Object.defineProperty(car, 'color', {
    enumerable: false
});

// Trying to loop over car's properties - Only 'model' and 'year' will be printed.
for (let key in car) {
    console.log(key);
}

// Trying to delete 'model' property - won't delete the model property of the car.
delete car.model;

// Making 'year' property non-configurable
Object.defineProperty(car, 'year', {
    configurable: false
});

// Trying to delete 'year' property - won't delete the year property of the car.
delete car.year;

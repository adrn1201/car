import Car from "../index"


test('Create an object for the car class and test for the get model method', () => {
    const car = new Car({
        brand: "BMW",
        model: "X5",
        type: "SUV",
        releaseYear: 2022
    });

    expect(car.model).toBe('X5');
});


test('Create an object for the car class and test for the get brand method', () => {
    const car = new Car({
        brand: "BMW",
        model: "X5",
        type: "SUV",
        releaseYear: 2022
    });

    expect(car.brand).toBe('BMW');
});


test('Create an object for the car class and test for the get type method', () => {
    const car = new Car({
        brand: "BMW",
        model: "X5",
        type: "SUV",
        releaseYear: 2022
    });

    expect(car.type).toBe('SUV');
});


test('Create an object for the car class and test for the get releaseYear method', () => {
    const car = new Car({
        brand: "BMW",
        model: "X5",
        type: "SUV",
        releaseYear: 2022
    });

    expect(car.releaseYear).toBe(2022);
});



test('Create an object for the car class and test for the update brand method', () => {
    const car = new Car({
        brand: "BMW",
        model: "X5",
        type: "SUV",
        releaseYear: 2022
    });

    car.updateBrand = "Audi"

    expect(car.brand).toBe("Audi");
});


test('Create an object for the car class and test for the update model method', () => {
    const car = new Car({
        brand: "BMW",
        model: "X5",
        type: "SUV",
        releaseYear: 2022
    });

    car.updateModel = "A4"

    expect(car.model).toBe("A4");
});


test('Create an object for the car class and test for the update type method', () => {
    const car = new Car({
        brand: "BMW",
        model: "X5",
        type: "SUV",
        releaseYear: 2022
    });

    car.updateType = "Sedan"

    expect(car.type).toBe("Sedan");
});


test('Create an object for the car class and test for the update releaseYear method', () => {
    const car = new Car({
        brand: "BMW",
        model: "X5",
        type: "SUV",
        releaseYear: 2022
    });

    car.releaseYear = 2020

    expect(car.releaseYear).toBe(2020);
});




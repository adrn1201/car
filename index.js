"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(details) {
        this.details = details;
    }
    get brand() {
        const { brand } = this.details;
        return brand;
    }
    set updateBrand(newBrand) {
        this.details.brand = newBrand;
    }
    get model() {
        const { model } = this.details;
        return model;
    }
    set updateModel(newModel) {
        this.details.model = newModel;
    }
    get type() {
        const { type } = this.details;
        return type;
    }
    set updateType(newType) {
        this.details.type = newType;
    }
    get releaseYear() {
        const { releaseYear } = this.details;
        return releaseYear;
    }
    set releaseYear(newYear) {
        this.details.releaseYear = newYear;
    }
    get allCarDetails() {
        return `
        Brand is: ${this.details.brand}\n
        Model is: ${this.details.model}\n,
        Type is: ${this.details.type}\n,
        Release Year is: ${this.details.releaseYear}        
        `;
    }
}
exports.default = Car;

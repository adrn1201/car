export type CarDetails = {
    brand: string,
    model: string,
    type: string,
    releaseYear: number
}

export default class Car {
    constructor(private details: CarDetails){}

    get brand(): string {
        const { brand } = this.details
        return brand
    }

    set updateBrand(newBrand: string){
        this.details.brand = newBrand
    }

    get model(): string{
        const { model } = this.details
        return model
    }

    set updateModel(newModel: string){
        this.details.model = newModel
    }

    get type(): string{
        const { type } = this.details
        return type
    }

    set updateType(newType: string){
        this.details.type = newType
    }

    get releaseYear(): number{
        const { releaseYear } = this.details
        return releaseYear
    }

    set releaseYear(newYear: number){
        this.details.releaseYear = newYear
    }
}
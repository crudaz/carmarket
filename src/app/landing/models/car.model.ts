export class Car {
    id: number;
    color: string;
    mark: string;
    type: string;
    transmision: string;
    model: string;
    photo: string;
    year: string;
    price: string;
    toCompare?: boolean;
}

export class CarList {
    cars: Car[];
}
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Car } from '../models';

@Injectable()
export class CarService {
  private carSource = new BehaviorSubject<Car>({
    id: 0,
    color: '',
    mark: '',
    model: '',
    photo: '',
    price: '',
    transmision: '',
    type: '',
    year: ''
  });

  constructor() { }

  setCar(data: Car) {
    this.carSource.next(data);
  }

  getCar(): Observable<any>  {
    return this.carSource.asObservable();
  }
}

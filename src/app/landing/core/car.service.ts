import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Car, CarList } from '../models';

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

  private compareSource = new BehaviorSubject<CarList>({
    cars: []
  });

  constructor() { }

  setCar(data: Car) {
    this.carSource.next(data);
  }

  getCar(): Observable<Car>  {
    return this.carSource.asObservable();
  }

  setList(data) {
    this.compareSource.next(data);
  }

  getList() : Observable<CarList> {
    return this.compareSource.asObservable();
  }


}

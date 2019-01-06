import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Car, CarList } from '../models';

@Injectable()
export class CarService {
  
  private endpoint = "http://localhost:3000/carList";

  constructor(private http: HttpClient) { }

  getCarList(): Observable<CarList[]> {
    return this.http.get<CarList[]>(this.endpoint);
  }

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

  setCar(data: Car) {
    this.carSource.next(data);
  }

  getCar(): Observable<Car>  {
    return this.carSource.asObservable();
  }

  setList(data: any) {
    this.compareSource.next(data);
  }

  getList() : Observable<CarList> {
    return this.compareSource.asObservable();
  }


}

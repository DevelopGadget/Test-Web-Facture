import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Car from '../models/car';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private Http: HttpClient) { }

  getCars(): Observable<Array<Car>> {
    return this.Http.get(environment.api).pipe(
      map(response => (response as any).data)
    );
  }

  postCars(car: Car): Observable<Car> {
    return this.Http.post(environment.api, car).pipe(
      map(response => (response as any).data)
    );
  }
}

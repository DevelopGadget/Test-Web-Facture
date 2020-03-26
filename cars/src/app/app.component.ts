import { Component, OnInit } from '@angular/core';
import Car from './models/car';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CarformComponent } from './components/carform/carform.component';
import { FormGroup } from '@angular/forms';
import { CarService } from './services/car.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  dataSource: MatTableDataSource<Car> = new MatTableDataSource<Car>([]);
  viewMode: boolean = true;
  Loading: boolean = false;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private _service: CarService) { }

  ngOnInit() {
    setTimeout(() => {
      this.Loading = true;
      this._service.getCars().subscribe(this.setCars, this.errorHandler)
    }, 100);
  }

  setCars = (cars: Array<Car>) => {
    this.Loading = false;
    this.dataSource = new MatTableDataSource<Car>(cars);
  }

  errorHandler = (err: HttpErrorResponse) => {
    this.Loading = false;
    if (err.status == 406)
      this.showSnack('Datos no aceptados verfique')
    else if (err.status == 404)
      this.showSnack('Carro no encontrado')
    else
      this.showSnack('Ha ocurrido un error vuelva a intentar')
  }

  open() {
    this.dialog.open(CarformComponent, {
      width: '360px',
      disableClose: true
    }).afterClosed().subscribe(this.saveCar);
  }

  saveCar = (car: FormGroup) => {
    if (car && car.valid) {
      this.Loading = true;
      this._service.postCars(car.value).subscribe(this.saveCarHandler, this.errorHandler);
    }
  }

  saveCarHandler = (car: Car) => {
    this.Loading = false;
    let cars = this.dataSource.data;
    cars.push(car);
    this.dataSource.connect().next(cars);
  }

  showSnack(msg: string) {
    this._snackBar.open(msg, 'Ok', {
      duration: 3000,
      panelClass: ['snack-error']
    });
  }
}

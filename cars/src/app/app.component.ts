import { Component, ViewChild, OnInit } from '@angular/core';
import Car from './models/car';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CarformComponent } from './components/carform/carform.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  dataSource: MatTableDataSource<Car> = new MatTableDataSource<Car>([]);
  viewMode: boolean = true;
  Loading: boolean = false;
  displayedColumns: Array<string> = ['Id', 'Nombre', 'Descripción', 'Marca', 'Modelo', 'Color'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar){}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dialog.open(CarformComponent, {
      width: '360px',
      disableClose: true
    }).afterClosed();
  }

  showSnack(msg: string) {
    this._snackBar.open(msg, 'Ok', {
      duration: 3000,
      panelClass: ['snack-error']
    });
  }
}

import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import Car from 'src/app/models/car';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table-car',
  templateUrl: './table-car.component.html'
})
export class TableCarComponent implements OnInit, OnChanges {

  @Input()
  dataSource: MatTableDataSource<Car>;

  displayedColumns: Array<string> = ['Id', 'Nombre', 'Marca', 'Modelo', 'Color'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataSource && changes.dataSource)
      this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

}

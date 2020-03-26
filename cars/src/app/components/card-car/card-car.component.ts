import { Component, OnInit, Input } from '@angular/core';
import Car from 'src/app/models/car';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
})
export class CardCarComponent implements OnInit {

  @Input()
  dataSource: Array<Car>;

  constructor() { }

  ngOnInit(): void {
  }

}

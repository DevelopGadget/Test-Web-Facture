import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})
export class CarformComponent implements OnInit {

  Form: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required]
    }),
    brand: new FormControl('', {
      validators: [Validators.required]
    }),
    model: new FormControl('', {
      validators: [Validators.required]
    }),
    color: new FormControl('', {
      validators: [Validators.required]
    }),
    url: new FormControl('', {
      validators: [Validators.required, Validators.pattern(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/)]
    }),
    description: new FormControl('', {
      validators: [Validators.required]
    }),
  });

  constructor(public dialogRef: MatDialogRef<CarformComponent>) { }

  ngOnInit(): void {
  }

}

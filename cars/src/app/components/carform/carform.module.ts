import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { CarformComponent } from './carform.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarformComponent],
  imports: [CommonModule, MatDialogModule, MaterialModule, ReactiveFormsModule, FormsModule],
  entryComponents: [CarformComponent],
  exports: [CarformComponent],
})
export class CarformModule { }

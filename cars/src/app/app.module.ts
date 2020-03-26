import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayService } from './services/overlay.service';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoadingModule } from './components/loading/loading.module';
import { HttpClientModule } from '@angular/common/http';
import { CarformModule } from './components/carform/carform.module';
import { TableCarComponent } from './components/table-car/table-car.component';
import { CardCarComponent } from './components/card-car/card-car.component';

@NgModule({
  declarations: [
    AppComponent,
    TableCarComponent,
    CardCarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingModule,
    HttpClientModule,
    CarformModule
  ],
  providers: [OverlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }

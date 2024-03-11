import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './component/cars/cars.component';
import { DetailCarComponent } from './component/detail-car/detail-car.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { AddCarComponent } from './component/add-car/add-car.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { UpdateCarComponent } from './component/update-car/update-car.component';
import { MyFavoritCarsComponent } from './component/my-favorit-cars/my-favorit-cars.component';
import { SearchCarComponent } from './component/search-car/search-car.component';



@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    DetailCarComponent,
    BorderCardDirective,
    AddCarComponent,
    UpdateCarComponent,
    MyFavoritCarsComponent,
    SearchCarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

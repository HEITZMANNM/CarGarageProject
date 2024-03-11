import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './component/cars/cars.component';
import { DetailCarComponent } from './component/detail-car/detail-car.component';
import { AddCarComponent } from './component/add-car/add-car.component';
import { UpdateCarComponent } from './component/update-car/update-car.component';
import { MyFavoritCarsComponent } from './component/my-favorit-cars/my-favorit-cars.component';
import { SearchCarComponent } from './component/search-car/search-car.component';
import { TransactionSearchComponent } from './component/transaction-search/transaction-search.component';

const routes: Routes = [


  
 // {path: '', component: HomeComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'car/:id', component: DetailCarComponent},
  {path: 'addCar', component: AddCarComponent},
  {path: 'updateCar/:id', component: UpdateCarComponent},
  {path: 'favorit', component: MyFavoritCarsComponent},
  {path: 'search', component: SearchCarComponent},
  {path: 'transaction', component: TransactionSearchComponent},
  {path: '**', component: CarsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

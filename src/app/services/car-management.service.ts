import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarManagementService {

  constructor(private http: HttpClient) { }

  private carsUrl = 'assets/cars-list.json';
  carList!: Car[];
  favoritCarList!:Car[];
  foundCars!:Car[];



getCars(): Observable<Car[]> {
  return this.http.get<Car[]>(`http://localhost:8080/cars`).pipe(
        tap((response)=> console.table(response))
      )
}


getCarById(id:number):Observable<Car>
  {
    return this.http.get<Car>(`http://localhost:8080/carById?id=${id}`).pipe(
      tap((response)=> console.table(response))
    )
  }


 addNewCar(newCar: Car)
    {
      return this.http.post(`http://localhost:8080/addCar`, newCar).pipe(
        tap((response)=> console.table(response))
      );
    }

    deleteCar(id:number){
    return this.http.delete(`http://localhost:8080/deleteCar?id=${id}`).pipe(
  tap((response)=> console.table(response)));
  }

  updateCar(car: Car){

    return this.http.put(`http://localhost:8080/updateCar`, car).pipe(
  tap((response)=> console.table(response)));
  }

  getRandomId(carList: Car[]){
    const min =1;
    const max =carList.length;

    return Math.floor(Math.random() * (max - min) + min);
  }

  getMyFavoritCars(): Observable<Car[]> {
    return this.getCars().pipe(
      map(data => {
        this.carList = data;
        this.favoritCarList = this.carList.filter(car => car.fav);
        console.log("valeur dans service favoritlist :" + this.favoritCarList);
        return this.favoritCarList;
      })
    );
  }

  searchCars(searchTerm: string): Observable<Car[]> {

    console.log("valeur Term dans service :" + searchTerm);

  return this.getCars().pipe(
    switchMap(data => {
      this.foundCars = data.filter(car =>
        car.mark.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.engineType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.energie.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.numberOfValves.toString().includes(searchTerm) ||
        car.cylinder.toString().includes(searchTerm) ||
        car.power.toString().includes(searchTerm) ||
        car.length.toString().includes(searchTerm) ||
        car.width.toString().includes(searchTerm) ||
        car.height.toString().includes(searchTerm) ||
        car.weight.toString().includes(searchTerm) ||
        car.maxSpeed.toString().includes(searchTerm) ||
        car.year.toString().includes(searchTerm) ||
        car.price.toString().includes(searchTerm) ||
        car.picture.toLowerCase().includes(searchTerm) ||
        car.note.toString().includes(searchTerm) ||
        car.fav.toString().toLowerCase().includes(searchTerm)
      );
      return of(this.foundCars);
    })
  );
  }

  sendSearchTerm(searchTerm:string){

    if(searchTerm != null && searchTerm !=''){

      return searchTerm;
    }
    else{
     return console.log("Search term invalid")
    }
  }
  
    

}

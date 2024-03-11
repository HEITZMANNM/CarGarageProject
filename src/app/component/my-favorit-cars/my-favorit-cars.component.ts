import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarManagementService } from '../../services/car-management.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-my-favorit-cars',
  templateUrl: './my-favorit-cars.component.html',
  styleUrl: './my-favorit-cars.component.css'
})
export class MyFavoritCarsComponent {

  constructor(private router: Router, private carManagementService: CarManagementService) {}

  carList!: Car[];
  favoritCarList!:Car[];

  ngOnInit(): void {

    this.getFavoritCars();
    
  }

  goToCar(car: Car): void {
    if (car.id != null) {
      this.router.navigate(['/car', car.id]);
    } else {
      console.log("carId invalide");
    }
  }

  getFavoritCars(){

    this.carManagementService.getMyFavoritCars().subscribe(
      data => {
        this.favoritCarList = data;
      },
      error => {
        console.error("Erreur lors de la récupération des voitures favorites :", error);
      }
    );
  
  }

}

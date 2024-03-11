import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { Router } from '@angular/router';
import { CarManagementService } from '../../services/car-management.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private router: Router, private carManagementService: CarManagementService) {}

  carList: Car[] = [];
  randomCar!: Car;

  ngOnInit(): void {

    this.getCars();
    
  }

  goToCar(car: Car): void {
    if (car.id != null) {
      this.router.navigate(['/car', car.id]);
    } else {
      console.log("carId invalide");
    }
  }

  getCars(){

    this.carManagementService.getCars().subscribe(
      data => {this.carList = data}
    )
  }

  goToRandomCar(){

    const randomCarId = this.carManagementService.getRandomId(this.carList);

    console.log("valeur randomId :"+randomCarId);

  this.carManagementService.getCarById(randomCarId).subscribe(
    data => {this.randomCar = data;
      this.goToCar(this.randomCar);
    }
  );
  }
}

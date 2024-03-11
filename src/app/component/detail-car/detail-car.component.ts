import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarManagementService } from '../../services/car-management.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrl: './detail-car.component.css'
})
export class DetailCarComponent implements OnInit{

  car!:Car | undefined;
  carId!:number;
  location: any;

  constructor(private activatedRouter: ActivatedRoute, private router: Router, private carManagementService: CarManagementService){}

  ngOnInit(): void {
    
const carIdString: string|null = this.activatedRouter.snapshot.paramMap.get('id');

if(carIdString != null && carIdString != ''){

  this.carId = parseInt(carIdString);

  this.getCarById(this.carId);

}
  }

goToCars() {

  this.router.navigate(['/cars']);
    }


getCarById(id: number){

  this.carManagementService.getCarById(id).subscribe(
    data => {this.car = data}
  )

}

deleteCarById(id: number){
  this.carManagementService.deleteCar(id).subscribe(
    data => {this.router.navigate(['cars'])}
  )
  }

  updateCar(){
    this.router.navigate(['/updateCar', this.carId]);
  }

  getNoteColorClass(note: number): string {
    if (note >= 8) {
      return '#0d8200';
    } else if (note >= 6) {
      return '#0dba00';
    } else if (note >= 4) {
      return '#ff8200';
    } else {
      return 'red';
    }
  }

  makeItFavorite(){

    if(this.car && this.car.fav){

      this.car.fav = false;
      this.carManagementService.updateCar(this.car).subscribe(
        data => { this.location.reload();});

    }
    else if(this.car && !this.car.fav){

      this.car.fav = true;
      this.carManagementService.updateCar(this.car).subscribe(
        data => { this.location.reload();});

    }
    else{

      console.log("No car found");

    }
  }


}


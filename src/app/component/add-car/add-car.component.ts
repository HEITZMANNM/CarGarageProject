import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarManagementService } from '../../services/car-management.service';
import { Car } from '../../models/car';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {

 

  id: number=0;
  model!: string;
  mark!: string;
  engineType!: string;
  energie!: string;
  numberOfValves!: number;
  cylinder!: number;
  power!: number;
  length!: number;
  width!: number;
  height!: number;
  weight!: number;
  maxSpeed!: number;
  year!: number;
  price!: number;
  picture!: string;
  note!:number;

  newCar!: Car;

  constructor(private carManagementService: CarManagementService, private toastrService: ToastrService, private router: Router){}

 
addNewCar(){

  if (
    this.model != null &&
    this.mark != null &&
    this.engineType != null &&
    this.energie != null &&
    this.numberOfValves != null &&
    this.numberOfValves > 0 &&
    this.cylinder != null &&
    this.cylinder >0 &&
    this.power != null &&
    this.power >0 &&
    this.length != null &&
    this.length >0 &&
    this.width != null &&
    this.width >0 &&
    this.height != null &&
    this.height >0 &&
    this.weight != null &&
    this.weight >0 &&
    this.maxSpeed != null &&
    this.maxSpeed >0 &&
    this.year != null &&
    this.year >1800 &&
    this.price != null &&
    this.picture != null &&
    this.note != null && this.note<=10
    && this.note>=0
  ) {
    this.newCar = new Car(
      this.id, this.model, this.mark, this.engineType, this.energie, this.numberOfValves, this.cylinder,
      this.power, this.length, this.width, this.height, this.weight, this.maxSpeed, this.year, this.price, this.picture, this.note, false
    );  

    this.carManagementService.addNewCar(this.newCar).subscribe(
      data => {this.router.navigate(['cars']);
        
      })
  
      this.toastrService.success('Nouvelle auto entrée au garage !')
}
else if(this.note>10){

  this.toastrService.error('La note doit être comprise entre 0 et 10!')
}
else{
  this.toastrService.error('Veuillez entrer toutes les caractéristiques ou vérifier les champs')
}
 
}
}
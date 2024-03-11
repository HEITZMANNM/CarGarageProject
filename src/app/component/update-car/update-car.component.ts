import { Component } from '@angular/core';
import { Car } from '../../models/car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarManagementService } from '../../services/car-management.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.css'
})
export class UpdateCarComponent {

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
  fav!:boolean;
  carToUpdate!:Car;

  carUpdated!: Car;

  constructor(private activatedRouter: ActivatedRoute, private router: Router, private carManagementService: CarManagementService, private toastrService: ToastrService){}

  ngOnInit(): void {
    
const carIdString: string|null = this.activatedRouter.snapshot.paramMap.get('id');

if(carIdString != null && carIdString != ''){

  this.id = parseInt(carIdString);

  this.getCarById(this.id);

}
  }

  getCarById(id: number){

    this.carManagementService.getCarById(id).subscribe(
      data => {this.carToUpdate = data;
        console.log("Valeur de carToUpdate :"+this.carToUpdate);
        if(this.carToUpdate){
          this.model = this.carToUpdate.model;
          this.mark = this.carToUpdate.mark;
          this.engineType=this.carToUpdate.engineType;
          this.energie = this.carToUpdate.energie;
          this.numberOfValves=this.carToUpdate.numberOfValves;
          this.cylinder=this.carToUpdate.cylinder;
          this.power=this.carToUpdate.power;
          this.length=this.carToUpdate.length;
          this.width=this.carToUpdate.width;
          this.height=this.carToUpdate.height;
          this.weight=this.carToUpdate.weight;
          this.maxSpeed=this.carToUpdate.maxSpeed;
          this.year=this.carToUpdate.year;
          this.price=this.carToUpdate.price;
          this.picture=this.carToUpdate.picture;
          this.note=this.carToUpdate.note;
          this.fav=this.carToUpdate.fav;
        }
      }
    )
  }

  editCar(){

  if (
    this.model != null &&
    this.mark != null &&
    this.engineType != null &&
    this.energie != null &&
    this.numberOfValves != null &&
    this.cylinder != null &&
    this.power != null &&
    this.length != null &&
    this.width != null &&
    this.height != null &&
    this.weight != null &&
    this.maxSpeed != null &&
    this.year != null &&
    this.price != null &&
    this.picture != null &&
    this.note!=null &&
    this.note<=10 &&
    this.fav!=null
  ){
    this.carUpdated = new Car(this.id, this.model, this.mark, this.engineType, this.energie, this.numberOfValves, this.cylinder,
      this.power, this.length, this.width, this.height, this.weight, this.maxSpeed, this.year, this.price, this.picture, this.note, this.fav);
      
    this.carManagementService.updateCar(this.carUpdated).subscribe(
      data =>{
        this.toastrService.success('Car updated')
        this.router.navigate(['cars']); 
      });
  }
  else if (this.note >10){
    this.toastrService.error('La note doit être comprise entre 0 et 10 !')
  }
  else{
    this.toastrService.error('Veuillez entrer toutes les caractéristiques !')
  }
  }

}

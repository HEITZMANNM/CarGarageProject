import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarManagementService } from '../../services/car-management.service';
import { isEmpty } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrl: './search-car.component.css'
})
export class SearchCarComponent implements OnInit{

  constructor(private appComponent :AppComponent, private router: Router, private carManagementService: CarManagementService, private toastrService: ToastrService) {}

  searchTermEnter!:string;
  foundCarList!:Car[];

  ngOnInit(): void {

    //const searchTerm: string|null = this.activatedRouter.snapshot.paramMap.get('searchTerm');

    //console.log("valeur de searchTerm dans ngOnInit de searchpage :"+searchTerm)

   // if(searchTerm != null){
   //   this.getSearchedCar(searchTerm);
   // }
   // else{
    //  console.log("SearchTerm null")
   //   this.router.navigate(['/cars']);

    //}

    this.searchTermEnter = this.appComponent.searchTerm;

    console.log("valeur term dans ngoninit :"+this.searchTermEnter)

    if(this.searchTermEnter != null && this.searchTermEnter !=''){

      this.getSearchedCar(this.searchTermEnter);
    }
    
    
  }

  goToCar(car: Car): void {
    if (car.id != null) {
      this.router.navigate(['/car', car.id]);
    } else {
      console.log("carId invalide");
    }
  }

  getSearchedCar(searchTerm:string){


    this.carManagementService.searchCars(searchTerm).subscribe(
      data => {
        if(data.length != 0){
          console.log("valeur data dans ngonInit :"+data)
          this.foundCarList = data;
        }
        else{
          this.toastrService.error('Aucun véhicule trouvé');
          this.router.navigate(['/cars']);
        }
        
      },
      error => {
        console.error("Erreur lors de la récupération des voitures recherchées :", error);
      }
    );
  
  }

}

import { Component } from '@angular/core';
import { CarManagementService } from './services/car-management.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon-garage-app';

  searchTerm!: string;

  constructor(private router: Router, private carManagementService: CarManagementService){}


  searchCars() {


    if (this.searchTerm != null && this.searchTerm != '') {

      this.router.navigate(['/transaction']);
      

    } else {
      console.log("searchTerm invalide");
    }
  }
}

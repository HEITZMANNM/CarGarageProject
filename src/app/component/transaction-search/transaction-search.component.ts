import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-search',
  templateUrl: './transaction-search.component.html',
  styleUrl: './transaction-search.component.css'
})
export class TransactionSearchComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    
    
    this.router.navigate(['/search']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
OnclickHome: string|any[]|null|undefined;
  
  constructor(
    
    private Route: Router
  ) { }

  ngOnInit(): void {
    
  }
  Logout() {
    localStorage.clear();
    this.Route.navigate([""]);
  }
}
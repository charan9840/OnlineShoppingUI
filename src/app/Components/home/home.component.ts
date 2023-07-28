import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { ProductService } from 'src/app/Service/product.service';
import { UpdateService } from 'src/app/Service/update.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  product: any;
  search: any;

  constructor(
    private productservice: ProductService,
    private updateservice: UpdateService,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {
    this.getallproducts();
    this.authservice.isAdmin();
  }
  getallproducts() {
    this.productservice.getallproducts().subscribe({
      next: (products: any) => {
        this.product = products.value;
        console.log(this.product);
        console.log(products);
      },
      error: (err: any) => {
        alert('Not Found');
      },
    });
  }
  ondelete(id: number) {
    this.updateservice.delete(id).subscribe((response: any) => {
      console.log(response);
      alert(response.message);
      this.getallproducts();
    });
  }

  isAdmin() {
    return this.authservice.isAdmin();
  }
}

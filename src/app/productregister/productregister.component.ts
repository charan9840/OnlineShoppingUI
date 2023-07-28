import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductregisterService } from '../Service/productregister.service';

@Component({
  selector: 'app-productregister',
  templateUrl: './productregister.component.html',
  styleUrls: ['./productregister.component.css']
})
export class ProductregisterComponent implements OnInit {

  form: any;
  submitted = false;
  loading: boolean | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productregisterservice: ProductregisterService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ProductName: ['', Validators.required],
      brand: ['', Validators.required],
      Features: ['', Validators.required],
      Productdescription: ['', Validators.required],
      price: ['', Validators.required],
      imageURL: ['',Validators.required]
    }
    )
  };
  get f() { return this.form.controls; }
  onproductregister() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.productregisterservice.productregister(this.form.value)
      .subscribe({
        next: (detail: any) => {
          console.log(detail);
          alert(detail.message)
          // this.router.navigate(['home']);
        },
        error: (error: any) => {
          alert(error.error.message);
          this.loading = false;
        }
      });
  }
}


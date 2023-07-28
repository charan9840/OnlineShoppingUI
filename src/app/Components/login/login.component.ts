import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any;
  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService

  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      loginId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    this.authService.Login(this.form.value).subscribe(
      {
        next: (Token: any) => {
          localStorage.setItem('AuthToken', Token);
          console.log(Token);
          if (Token)
            this.router.navigate(['home']);
            
        },
        error: (err: any) => {
          alert("Failed");
          console.log(this.form.value);
        }
      }
    );
  }

}

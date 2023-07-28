import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { RegisterService } from 'src/app/Service/register.service';

@Component({
    selector: 'app-registeration',
    templateUrl: './registeration.component.html',
    styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

    form: any;
    loading = false;
    submitted = false;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private registerservice: RegisterService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            Email: ['', Validators.required],
            loginId: ['', Validators.required],
            contactNumber: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            Conformpassword: ['', [Validators.required, Validators.minLength(6)]]

        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.registerservice.register(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    alert("User Added Successfully");
                    this.router.navigate(['']);
                },
                error: (error: any) => {
                    alert("user already exist");
                    this.loading = false;
                }
            });
    }
}

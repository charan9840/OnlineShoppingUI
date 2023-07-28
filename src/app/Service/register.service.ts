import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Models/login';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  baseURl = environment.API_URL;

  public register(register: any): Observable<string> {
    console.log(register);
    return this.http.post(
      `${this.baseURl}/api/User/Register`,
      register,
      { responseType: 'text' }
    );
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductregisterService {
  constructor(private http: HttpClient) {}

  baseURl = environment.API_URL;
  token: any = localStorage.getItem('AuthToken');

  public productregister(productregister: any): Observable<any> {
    return this.http.post(
      `${this.baseURl}/api/Product/AddProduct/Admin`,
      productregister,
      {
        headers: new HttpHeaders().set('Authorization', `bearer ${this.token}`),
      }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  baseURl = environment.API_URL;

  public getallproducts(): Observable<any> {
    return this.http.get(`${this.baseURl}/api/Product/GetAllProducts/user`);
  }
  public getbyId(Id: number): Observable<any> {
    return this.http.get(`${this.baseURl}/api/Product/GetById/user?Id=` + Id);
  }
}

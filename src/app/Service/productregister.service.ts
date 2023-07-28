import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductregisterService {
  constructor(private http: HttpClient) {}

  baseURl = environment.API_URL;

  public productregister(productregister: any): Observable<any> {
    return this.http.post(
      `${this.baseURl}/api/Product/AddProduct/Admin`,
      productregister,
      { responseType: 'text' }
    );
  }
}

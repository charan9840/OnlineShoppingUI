import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  constructor(private http: HttpClient) {}
  baseURL = environment.API_URL;
  token: any = localStorage.getItem('AuthToken');

  public update(update: any, id: number): Observable<any> {
    console.log(update);
    return this.http.put(
      `${this.baseURL}/api/Product/UpdateProduct/Admin?Id=${id}`,
      update,
      {
        headers: new HttpHeaders().set('Authorization', `bearer ${this.token}`),

      }
    );
  }
  public delete(id: number): Observable<any> {
    return this.http.delete(
      `${this.baseURL}/api/Product/DeleteProduct/Admin?Id=${id}`,
      {
        headers: new HttpHeaders().set('Authorization', `bearer ${this.token}`),
        
      }
    );
  }
}

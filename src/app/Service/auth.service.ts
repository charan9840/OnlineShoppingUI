import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  baseURl = environment.API_URL;

  public Login(login: Login): Observable<string> {
    var temp = this.http.post(`${this.baseURl}/api/Auth/Login`, login, {
      responseType: 'text',
    });
    console.log(temp);
    return temp;
  }
  public getAuthStatus() {
    let result: any = localStorage.getItem('AuthToken');

    if (result == null) {
      return false;
    } else {
      return true;
    }
  }

  role = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

  isAdmin() {
    let result: any = localStorage.getItem('AuthToken');
    if (result == null) return false;
    let jwt = new JwtHelperService();
    let DecodedToken = jwt.decodeToken(result);
    let userRole = DecodedToken[this.role];
    // console.log(role);
    if (userRole == 'admin') {
      return true;
    }
    return false;
  }
}

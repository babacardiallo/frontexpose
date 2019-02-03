import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private host: string = 'http://localhost:8080';
  private jwtToken = null;
  private roles: Array<any>;

  constructor(private  http: HttpClient) {
  }

  login(user) {
    return this.http.post(this.host + '/login', user, {observe: 'response'});
  }

  saveToken(jwt: string) {
    localStorage.setItem('tokenspringba', jwt);
    const jwthelper = new JwtHelper();
    this.roles = jwthelper.decodeToken(jwt).roles;
  }

  loadToken() {
    this.jwtToken = localStorage.getItem('tokenspringba');
  }

  registrer(donne) {
    return this.http.post(this.host + '/registrer', donne, {observe: 'response'});
  }
  creationouvier(ouvrier) {
    if (this.jwtToken == null) {this.loadToken(); }
    return this.http.post(this.host + '/ouvriers/add', ouvrier, {headers: new HttpHeaders({'authorization': this.jwtToken})});
  }
  isLogin() {
      if (localStorage.getItem('tokenspringba') != null) {
          return true;
      } else {
          return false;
      }
  }
  isremove() {
     return false;
  }

  isAdmin() {
    for (const r of this.roles) {
       if (r.authority === 'ADMIN') {
           return true;
       }

       return false;
    }
  }

  isSecretaire() {
    const jwtT = localStorage.getItem('tokenspringba');
    if (jwtT === null) {
        return false;
    } else {
      const jwthelper = new JwtHelper();
      const role = jwthelper.decodeToken(jwtT).roles;
      for (const r of role) {
        if (r.authority === 'SECRETAIRE') {
          return true;
        } else {
          return false;
        }
      }
    }
  }

}

import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate(): Observable<boolean> | Promise<boolean> | boolean  {
    return new Promise(
        (resolve, reject) => {
            if (localStorage.getItem('tokenspringba') != null) {
              resolve(true);
             } else {
              this.router.navigate(['/auth', 'signin']);
              resolve(false);
            }
        }
    );
  }

  constructor(private router: Router) { }

}

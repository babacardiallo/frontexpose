import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router, RouterModule} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../Model/User.model';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    hide = 1;


    mode: number = 0;

    user: User;

    signInForm: FormGroup;
    errorMessage: string;


    constructor( private authservice: AuthService, private router: Router, private formBuilder: FormBuilder, private App: AppComponent) { }


  ngOnInit() {
      this.initForm();
      this.App.ismode = false;
  }
    initForm() {

        this.signInForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
        });
    }

  onLogin() {
      const username = this.signInForm.get('username').value;
      const password = this.signInForm.get('password').value;
      this.user = new User(username, password);
      console.log(this.user);
      this.authservice.login(this.user)
        .subscribe(resp => {
            const jwt = resp.headers.get('Authorization');
            console.log("token=>", jwt);
            this.authservice.saveToken(jwt);
            localStorage.setItem('usernamespringba', username);
            this.router.navigate(['etudiant']);

        },
             err => {
                 this.mode = 1;

                 this.errorMessage = 'Donnees invalides';
             });
  }

  getColor() {
        if (this.mode === 1) {
            return 'red';
        }
  }

}

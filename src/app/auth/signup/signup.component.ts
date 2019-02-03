import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../Model/User.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Regist} from '../../Model/Regist.model';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    hide = 1;

    regist: Regist;

    signUpForm: FormGroup;

    errorMessage: string;
    mode: number = 0;

    user: User;

  constructor(private authservice: AuthService, private router: Router, private formBuilder: FormBuilder, private App: AppComponent) { }

  ngOnInit() {
      this.initForm();
      this.App.ismode = false;
  }

    initForm() {

        this.signUpForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
            repassword: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    }
  onRegistrer() {

      const username = this.signUpForm.get('username').value;
      const password = this.signUpForm.get('password').value;
      const repassword = this.signUpForm.get('repassword').value;
      this.regist = new Regist(username, password, repassword);
      this.user = new User(username, password);

      this.authservice.registrer(this.regist)
          .subscribe(resp => {
                this.authservice.login(this.user)
                    .subscribe(respo => {
                            const jwt = respo.headers.get('Authorization');
                            this.authservice.saveToken(jwt);
                            localStorage.setItem('usernamespringba', username);
                            if (this.authservice.isAdmin() === true) {
                              this.router.navigateByUrl('accueil/admin');
                            } else {
                              this.router.navigateByUrl('accueil/secretaire');

                            }
                      },
                        error => {
                            this.errorMessage = 'probleme lors de la tentative de connection';
                        });
              },
              err => {
                  if (err.status = 500) {
                      this.errorMessage = 'Utilisateur existe deja';
                  }
              });
     }

}

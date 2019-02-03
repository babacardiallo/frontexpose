import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Ouvrier} from '../Model/Ouvrier.model';
import {AppComponent} from '../app.component';


  export interface Metier {
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'app-creation-ouvrier',
  templateUrl: './creation-ouvrier.component.html',
  styleUrls: ['./creation-ouvrier.component.scss']
})
export class CreationOuvrierComponent implements OnInit {


  creationForm: FormGroup;
  errorMessage: string;
  ouvrier: Ouvrier;
  prenom: string;
  nom: string;


  metier: Metier[] = [
    {value: 'Mechanicien', viewValue: 'Mechanicien'},
    {value: 'Menuisier Bois', viewValue: 'Menuisier Bois'},
    {value: 'Menuisier Aluminium', viewValue: 'Menuisier Aluminium'},
    {value: 'Menuisier Metallique', viewValue: 'Menuisier Metallique'},
    {value: 'Tailleur', viewValue: 'Tailleur'}

  ];

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  constructor(private router: Router, private formBuilder: FormBuilder, private authservice: AuthService, private App: AppComponent) { }

  ngOnInit() {
    this.initForm();
    this.App.ismode = true;
  }

  initForm() {

    this.creationForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      sexe: ['', [Validators.required]],
      age: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      metier: ['', [Validators.required]],
      addresse: ['', [Validators.required]]
    });
  }


  onCreation() {
    this.nom = this.creationForm.get('nom').value;
    this.prenom = this.creationForm.get('prenom').value;
    this.prenom = this.prenom + ' ' +  this.nom;
    const sexe = this.creationForm.get('sexe').value;
    const age = this.creationForm.get('age').value;
    const telephone = this.creationForm.get('telephone').value;
    const metier = this.creationForm.get('metier').value;
    const addresse = this.creationForm.get('addresse').value;
    const username = localStorage.getItem('usernamespringba');
    this.ouvrier = new Ouvrier(username, this.nom, this.prenom, telephone, sexe, age, '', metier, '', '', true, addresse);
    console.log(this.ouvrier);
    this.authservice.creationouvier(this.ouvrier)
        .subscribe(resp => {
           this.router.navigateByUrl('accueil');
        }, error => {
                this.errorMessage = 'insertion echouee';
            }
        );
  }

}

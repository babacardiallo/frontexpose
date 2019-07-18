import { Component, OnInit } from '@angular/core';
import {EtudiantService} from "../../services/etudiant.service";
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  headElements = [];

  public ispost = false;

  public ajouterForm: FormGroup;

  public nom;

  public prenom;

  public email;

  public etudiant;

  constructor(public etudiantService: EtudiantService, public authservice: AuthService, public dialog: MatDialog, private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit() {
    if(this.authservice.isAdmin()===true){
      this.headElements = ['ID', 'Prenom', 'Nom', 'Email', 'Action'];
    }
    else{
      this.headElements = ['ID', 'Prenom', 'Nom', 'Email'];
    }
    this.initForm();
    this.etudiantService.getList().subscribe(response =>{
      this.etudiantService.lisEtudiants = response;
      console.log( this.etudiantService.lisEtudiants);
    },
       error1 => {
           console.log(error1);
       })
  }

  initForm() {

    this.ajouterForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],

    });

  }

  SaveEtudiant(){
   this.etudiantService.saveEtudiant(this.ajouterForm.value).subscribe(response => {
     this.etudiantService.lisEtudiants.push(response);
   },
      error1 => {
         console.log(error1);
      })
  }
  deleteEtudiant(el){
    this.etudiantService.removeEtudiant(el).subscribe(response =>{
       console.log(response);
       this.etudiantService.lisEtudiants.splice(this.etudiantService.lisEtudiants.indexOf(el), 1);
    },
      error1 => {
        console.log(error1);
      });
  }


  EditEtudiant(el){
    this.ispost=true;
    this.nom = el.nom;
    this.prenom = el.prenom;
    this.email = el.email;
    this.etudiant = el;
  }

  UpdateEtudiant(){
    const data = {
      "id": this.etudiant.id,
      "nom": this.nom,
      "prenom": this.prenom,
      "email": this.email
    }
    this.etudiantService.updateEtudiant(data).subscribe(response => {
        console.log(response);
        this.etudiantService.lisEtudiants.splice(this.etudiantService.lisEtudiants.indexOf(this.etudiant), 1);
        this.etudiantService.lisEtudiants.push(response);
        this.getSortdata(this.etudiantService.lisEtudiants);
        this.ispost = false;
      },
      error1 => {
        console.log(error1);
      });
  }

  getSortdata(data) {
    data.sort((a, b) => {
      return a.id - b.id
    });
  }

  logOut(){
    this.router.navigate(['auth/signin']);
    localStorage.removeItem("tokenspringba");
    localStorage.removeItem("usernamespringba");
  }







}


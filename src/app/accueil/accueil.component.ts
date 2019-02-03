import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {



  constructor(public App: AppComponent) { }

  ngOnInit() {

  }

}

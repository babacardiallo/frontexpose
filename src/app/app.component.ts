import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public ismode: boolean;

  constructor(public authservice: AuthService) {  }
  title = 'Aadio';
  ngOnInit() {
    this.ismode = false;
  }
}

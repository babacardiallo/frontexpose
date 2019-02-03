import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../services/auth-guard.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authservice: AuthService) { }

  ngOnInit() {
  }
}

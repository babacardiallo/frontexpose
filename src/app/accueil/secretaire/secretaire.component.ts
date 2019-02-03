import { Component, OnInit } from '@angular/core';
import { FullscreenService } from './fullscreen.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-secretaire',
  templateUrl: './secretaire.component.html',
  styleUrls: ['./secretaire.component.scss']
})
export class SecretaireComponent implements OnInit {

  fullscreen$: Observable <boolean>;

  constructor(private fullscreenService: FullscreenService) { }

  ngOnInit() {
    this.fullscreen$ = this.fullscreenService.fullscreen$;
  }

}

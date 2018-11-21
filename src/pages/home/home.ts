import { Component } from '@angular/core';
import { AppareilPage } from '../appareil/appareil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  appareilPage = AppareilPage;
}

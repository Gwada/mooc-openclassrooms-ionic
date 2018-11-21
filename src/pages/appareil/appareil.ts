import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { Appareil } from '../../models/Appareils';
import { AppareilsServices } from '../../services/appareils.service';

@Component({
  selector: 'page-appareil',
  templateUrl: 'appareil.html',
})
export class AppareilPage {

  appareilsList: Appareil[];
  constructor(private modalCtrl: ModalController,
              private appareilsService: AppareilsServices) {
  }

  ionViewWillEnter() {
    this.appareilsList = this.appareilsService.appareilsList.slice();
  }

  onLoadAppareil(index: number) {
    let modal = this.modalCtrl.create(SingleAppareilPage, {index: index});
    modal.present();
  }

}

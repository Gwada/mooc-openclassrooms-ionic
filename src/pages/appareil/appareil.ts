import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { Appareil } from '../../models/Appareils';
import { AppareilsServices } from '../../services/appareils.service';
import { AppareilFormPage } from './appareil-form/appareil-form';

@Component({
  selector: 'page-appareil',
  templateUrl: 'appareil.html',
})
export class AppareilPage {

  appareilsList: Appareil[];
  appareilFormPage = AppareilFormPage;

  constructor(private modalCtrl: ModalController,
              private appareilsService: AppareilsServices,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.appareilsList = this.appareilsService.appareilsList.slice();
  }

  onLoadAppareil(index: number) {
    let modal = this.modalCtrl.create(SingleAppareilPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController, MenuController, ToastController, LoadingController } from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { Appareil } from '../../models/Appareils';
import { AppareilsServices } from '../../services/appareils.service';
import { AppareilFormPage } from './appareil-form/appareil-form';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-appareil',
  templateUrl: 'appareil.html',
})
export class AppareilPage implements OnInit, OnDestroy
{

  appareilsList: Appareil[];
  appareilsSubscription: Subscription;
  appareilFormPage = AppareilFormPage;

  constructor(private modalCtrl: ModalController,
              private appareilsService: AppareilsServices,
              private menuCtrl: MenuController,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) { }

  ngOnInit()
  {
    this.appareilsSubscription = this.appareilsService.appareils$.subscribe(
      (appareils: Appareil[]) => {
        this.appareilsList = appareils;
      }
    );
    this.appareilsService.emitAppareils();
  }

  onSaveList() {
    let loader = this.loadingCtrl.create(
      {
        content: 'Sauvegarde en cours...'
      }
    );

    loader.present();
    this.appareilsService.saveData().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create(
          {
            message: 'Données sauvegardées !',
            duration: 3000,
            position: 'bottom'
          }
        ).present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl.create(
          {
            message: error,
            duration: 10000,
            position: 'bottom'
          }
        ).present();
      }
    );
  }

  onFetchList() {
    let loader = this.loadingCtrl.create(
      {
        content: 'Récuperation en cours...'
      }
    );

    loader.present();
    this.appareilsService.retrieveData().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create(
          {
            message: 'Données récupérées !',
            duration: 3000,
            position: 'bottom'
          }
        ).present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl.create(
          {
            message: error,
            duration: 5000,
            position: 'bottom'
          }
        ).present();
      }
    );
  }

  onLoadAppareil(index: number)
  {
    let modal = this.modalCtrl.create(SingleAppareilPage, {index: index});

    modal.present();
  }

  onToggleMenu()
  {
    this.menuCtrl.open();
  }

  ngOnDestroy()
  {
    this.appareilsSubscription.unsubscribe();
  }
}

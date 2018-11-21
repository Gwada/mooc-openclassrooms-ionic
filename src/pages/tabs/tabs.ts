import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppareilPage } from '../appareil/appareil';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  appareilsPage = AppareilPage;
  settingsPage = SettingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

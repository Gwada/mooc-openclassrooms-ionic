import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from '../pages/options/options';
import { AuthPage } from '../pages/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp
{
  tabsPage: any = TabsPage;
  optionsPage: any = OptionsPage;
  authPage: any = AuthPage;

  isAuth: boolean;

  @ViewChild('content') content: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController)
  {
    platform.ready().then(
      () => {
        var config = {
          apiKey: "AIzaSyD_kA-xUsbPXH-WMiyWNE0j5IQbax-vGHk",
          authDomain: "mooc-openclassrooms-angular.firebaseapp.com",
          databaseURL: "https://mooc-openclassrooms-angular.firebaseio.com",
          projectId: "mooc-openclassrooms-angular",
          storageBucket: "mooc-openclassrooms-angular.appspot.com",
          messagingSenderId: "695058728448"
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged(
          (user) => {
            if ((this.isAuth = user ? true : false))
              this.content.setRoot(TabsPage);
            else
              this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        );

        statusBar.styleDefault();
        splashScreen.hide();
      }
    );
  }

  onNavigate(page: any, data?: {})
  {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onDisconnect()
  {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

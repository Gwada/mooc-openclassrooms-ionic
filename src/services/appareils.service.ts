import { Appareil } from "../models/Appareils";
import { Subject } from "rxjs/Subject";
import * as firebase from 'firebase';

export class AppareilsServices
{
  appareils$ = new Subject<Appareil[]>();
  appareilsList: Appareil[] = [];

  emitAppareils() {
    this.appareils$.next(this.appareilsList.slice());
  }

  saveData() {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('appareils').set(this.appareilsList).then(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        )
      }
    );
  }

  retrieveData() {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('appareils').once('value').then(
          (data) => {
            this.appareilsList = data.val();
            this.emitAppareils();
            resolve('Chargement des appareils terminé');
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  addAppareil(appareil: Appareil) {
    this.appareilsList.push(appareil);
    this.emitAppareils();
  }
  
}
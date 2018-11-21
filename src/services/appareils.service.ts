import { Appareil } from "../models/Appareils";

export class AppareilsServices {
    appareilsList: Appareil[] = [
        {
          name: 'Machine à laver',
          description: [
            'Volume: 6 litres',
            'Temps de lavage: 2 heures',
            'Consommation: 173kWh/an'
          ],
          isOn: true
        },
        {
          name: 'Télévision',
          description: [
            'Dimensions: 40 pouces',
            'Consommation: 22kWh/an'
          ],
          isOn: true
        },
        {
          name: 'Ordinateur',
          description: [
            'Marque: fait maison',
            'Consommation: 500kWh/an'
          ],
          isOn: false
        }
    ];
}
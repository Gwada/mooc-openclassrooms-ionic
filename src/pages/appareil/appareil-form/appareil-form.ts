import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AppareilsServices } from '../../../services/appareils.service';
import { Appareil } from '../../../models/Appareils';
import { NavController } from 'ionic-angular';

@Component(
  {
    selector: 'page-appareil-form',
    templateUrl: 'appareil-form.html',
  }
)
export class AppareilFormPage implements OnInit
{ 

  appareilForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private appareilService: AppareilsServices,
              private navCtrl: NavController) {}

  ngOnInit(): void
  {
    this.initForm();
  }

  initForm()
  {
    this.appareilForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      description: this.formBuilder.array([])
    });
  }

  getDescriptionArray()
  {
    return this.appareilForm.get('description') as FormArray;
  }

  onAddDescription() {
    let newControl = this.formBuilder.control('');
    this.getDescriptionArray().controls.push(newControl);
  }

  onRemoveDescription(index: number) {
    this.getDescriptionArray().removeAt(index);
  }

  onSubmitForm() {
    let appareil = new Appareil(this.appareilForm.get('name').value);
    for (let control of this.getDescriptionArray().controls) {
      appareil.description.push(control.value);
    }
    this.appareilService.addAppareil(appareil);
    this.navCtrl.pop();
  }
}

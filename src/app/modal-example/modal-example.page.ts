import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'modal-page',
  templateUrl: 'modal-example.page.html',
  styleUrls: ['modal-example.page.scss']
})
export class ModalExamplePage {

  constructor(public modalController: ModalController) {}
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  }


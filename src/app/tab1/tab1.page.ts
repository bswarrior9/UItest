import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { ModalController } from '@ionic/angular';
import { ModalExamplePage } from '../modal-example/modal-example.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(public modalController: ModalController) {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalExamplePage,
    });
    return await modal.present();
  }
}


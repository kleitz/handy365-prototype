import { Component } from '@angular/core';

import { NavController, NavParams, MenuController } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  fotos: string[];
  types: string[];
  items: Array<{title: string, note: number, foto: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.types = [
      'Plumber',
      'Electrician',
      'Air Conditioner Repair',
      'Painter',
      'General Handyman',
      'Gardener',
      'Pool Cleaner',
      'Car Electrician',
      'Mechanic',
      'Locksmith',
      'Carpenter',
      'Computer Technician'
      ];

    this.fotos = [
      'assets/img/plumber_.jpg',
      'assets/img/electrician_.jpg',
      'assets/img/acrepair_.jpg',
      'assets/img/painter_.jpg',
      'assets/img/handyman_.jpg',
      'assets/img/gardener_.jpg',
      'assets/img/pool_.jpg',
      'assets/img/elec_car_.jpg',
      'assets/img/mechanic_.jpg',
      'assets/img/lock_.jpg',
      'assets/img/Carpenter_.jpg',
      'assets/img/computer_.jpg'
    ];

    this.items = [];
    for(let i = 1; i < 10; i++) {
      this.items.push({
        title: this.types[i],
        note: i,
        foto: this.fotos[i],
      });
    }
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(true, 'menu1');
  }


  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}

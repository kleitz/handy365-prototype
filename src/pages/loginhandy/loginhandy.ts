import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MapPage } from '../map/map';
import { FindWorkPage } from '../find-work/find-work';


/*
  Generated class for the Loginhandy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loginhandy',
  templateUrl: 'loginhandy.html'
})
export class LoginhandyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginhandyPage');
  }

  // Attempt to login in through our User service
  doLogin() {
    // this.navCtrl.push(ListPage);
    // setRoot(page, params, opts)
    // this.navCtrl.setRoot(MapPage);
    this.navCtrl.push(FindWorkPage);

  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MapPage } from '../map/map';


/*
  Generated class for the FindWork page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-find-work',
  templateUrl: 'find-work.html'
})
export class FindWorkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindWorkPage');
  }

  gotomap(){
  	this.navCtrl.push(MapPage);
  }

}

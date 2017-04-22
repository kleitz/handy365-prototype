import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MapPage } from '../map/map';
import { FindWorkPage } from '../find-work/find-work';



/*
  Generated class for the Signuphandy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signuphandy',
  templateUrl: 'signuphandy.html'
})
export class SignuphandyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignuphandyPage');
  }

  doSignup(){
    this.navCtrl.push(FindWorkPage);
  }



}

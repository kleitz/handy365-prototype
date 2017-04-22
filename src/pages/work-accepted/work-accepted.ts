import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FindWorkPage } from '../find-work/find-work';

/*
  Generated class for the WorkAccepted page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-work-accepted',
  templateUrl: 'work-accepted.html'
})
export class WorkAcceptedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkAcceptedPage');
  }

  call(){
  	alert('call the user to his/her phone');
  }

  message(){
  	alert('open message app to contact the user');
  }

  finish(){
  	// alert('finish proccess and back to 1st page');
  	this.navCtrl.setRoot(FindWorkPage);
  }

}



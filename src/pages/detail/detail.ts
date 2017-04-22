import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { SendHirePage } from '../send-hire/send-hire';


/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

	selectedItem: any;
  pet: string = "puppies";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {

  	this.selectedItem = navParams.get('item');
  	console.log(this.selectedItem);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    // this.showToastWithCloseButton();
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'This handy could arrive in aprox 13 minutes to your location.',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  hire(){
    // alert('link doesn´t work yet...')
    this.navCtrl.push(SendHirePage);
  }

}

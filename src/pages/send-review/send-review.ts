import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { ListPage } from '../list/list';
import { ThanksPage } from '../thanks/thanks';


/*
  Generated class for the SendReview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-send-review',
  templateUrl: 'send-review.html'
})
export class SendReviewPage {
  rate: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendReviewPage');
  }

  gotofinish(){
  	this.navCtrl.push(ThanksPage);
  }

  onModelChange($event){
    // alert(this.rate);
  }

}

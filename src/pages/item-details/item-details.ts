import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { DetailPage } from '../detail/detail';



@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  items: Array<{id:number , name: string, profilePic: string, about: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


    this.items = [
      {
      	 "id": 1,
         "name": "Ellie Doe",
         "profilePic": "assets/img/1.jpg",
         "about": "1,2 km away"
       },
       {	
       	 "id": 2,
         "name": "Eva Hill",
         "profilePic": "assets/img/2.jpg",
         "about": "1,7 km away"
       },
       {
       	 "id": 4,
         "name": "George Doe",
         "profilePic": "assets/img/4.jpg",
         "about": "2,2 km away"
       },
       {
       	 "id": 5,
         "name": "Robert Lee",
         "profilePic": "assets/img/5.jpg",
         "about": "2,8 km away"
       },
       {
          "id": 3,
         "name": "Donald Ham",
         "profilePic": "assets/img/3.jpg",
         "about": "1,9 km away"
       },
       {
       	 "id": 6,
         "name": "Molly Mouse",
         "profilePic": "assets/img/6.jpg",
         "about": "3,2 km away"
       },
       {
       	 "id": 7,
         "name": "Paul Puppy",
         "profilePic": "assets/img/7.jpg",
         "about": "3,5 km away"
       }
     ];


  }


  handyTapped(event, item) {
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }

  // openItem(){

  // }


}

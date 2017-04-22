import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { WorkAcceptedPage } from '../work-accepted/work-accepted';
import { FindWorkPage } from '../find-work/find-work';


import {
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsLatLng,
 CameraPosition,
 GoogleMapsMarkerOptions,
 GoogleMapsMarker
} from 'ionic-native';

/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})



export class MapPage {
 
    map: GoogleMap;
 
    constructor(public navCtrl: NavController, public platform: Platform) {
        platform.ready().then(() => {
            this.loadMap();
        });
    }
 
    loadMap(){
 
        let location = new GoogleMapsLatLng(-34.9290,138.6010);
 
        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'tilt': 30,
            'zoom': 15,
            'bearing': 50
          }
        });

        // let marker = new GoogleMapsMarker({
        //   position: location,
        //   map: map,
        // });
 
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            // console.log('Map is ready!');
            // alert('map is ready');
        });
 
    }

    accept(){
      this.navCtrl.setRoot(WorkAcceptedPage);
    }

    decline(){
       this.navCtrl.setRoot(FindWorkPage);
    }
}



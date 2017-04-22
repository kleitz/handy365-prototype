import { Component } from '@angular/core';
import {AboutPage} from '../about/about';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  aboutPage = AboutPage;
  constructor() {

  }
}

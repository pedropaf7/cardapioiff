import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav:Nav;
  pages:Array<{title: string, component: string, openTab?: any}>;
  rootPage = 'breakfast'

  constructor(public navCtrl: NavController) {
    this.pages = [

    ]

  }

}

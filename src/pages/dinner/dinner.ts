import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dinner',
  templateUrl: 'dinner.html',
})
export class DinnerPage {
  @ViewChild('slider') slider: Slides;
  week = "0";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  selectedTab(sld){
    this.slider.slideTo(sld);
  }

  moveTab($event){
    this.week = $event._snapIndex.toString();
  }

}

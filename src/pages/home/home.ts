import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: string}>;
  rootPage = 'CardapioPage'

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Cardápio IF Fuminense', component: 'CardapioPage'},
      { title: 'Sugestões & Críticas', component: 'SugestaoPage'},
      { title: 'Staff', component: 'StaffPage'},
      { title: 'Sobre', component: 'SobrePage'},
    ];
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }
}

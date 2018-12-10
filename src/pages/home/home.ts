import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title:string, component:string}>;
  rootPage = 'CardapioPage';

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Cardápio IFF', component: 'CardapioPage' },
      { title: 'Críticas & Sugestões', component: 'SugestaoPage' },
      { title: 'Sobre', component: 'SobrePage' },
      { title: 'Staff', component: 'StaffPage' },
    ];
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }

}

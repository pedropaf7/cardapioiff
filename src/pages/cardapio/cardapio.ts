import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {
  tab1 = 'BreakfastPage';
  tab2 = 'LunchPage';
  tab3 = 'SnackPage';
  tab4 = 'DinnerPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

}

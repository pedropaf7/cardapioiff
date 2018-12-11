import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'


@IonicPage()
@Component({
  selector: 'page-staff',
  templateUrl: 'staff.html',
})
export class StaffPage {
  public cadastro: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public alertCtrl: AlertController) {
    this.cadastro = fb.group({
      user: new FormControl(null, Validators.compose([Validators.required])),
      senha: new FormControl(null,Validators.compose([Validators.required, Validators.minLength(3)]))
  });

  }

  entrar = () =>{
    let {user, senha} = this.cadastro.value;
    if(user === 'admin' && senha === 'iff'){
       this.navCtrl.push("CadastroFoodPage");
    }
    else{
      const alert = this.alertCtrl.create({
        title: "ERROR ¬¬", subTitle: 'Você errou o usuário ou a senha! :(', buttons: ['OK']
      });
      alert.present();
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffPage');
  }

}

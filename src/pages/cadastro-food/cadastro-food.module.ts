import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroFoodPage } from './cadastro-food';

@NgModule({
  declarations: [
    CadastroFoodPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroFoodPage),
  ],
})
export class CadastroFoodPageModule {}

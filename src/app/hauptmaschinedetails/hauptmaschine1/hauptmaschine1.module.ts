import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hauptmaschine1PageRoutingModule } from './hauptmaschine1-routing.module';

import { Hauptmaschine1Page } from './hauptmaschine1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hauptmaschine1PageRoutingModule
  ],
  declarations: [Hauptmaschine1Page]
})
export class Hauptmaschine1PageModule {}

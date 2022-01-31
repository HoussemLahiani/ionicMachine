import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hauptmaschine4PageRoutingModule } from './hauptmaschine4-routing.module';

import { Hauptmaschine4Page } from './hauptmaschine4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hauptmaschine4PageRoutingModule
  ],
  declarations: [Hauptmaschine4Page]
})
export class Hauptmaschine4PageModule {}

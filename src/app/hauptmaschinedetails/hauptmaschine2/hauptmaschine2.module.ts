import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hauptmaschine2PageRoutingModule } from './hauptmaschine2-routing.module';

import { Hauptmaschine2Page } from './hauptmaschine2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hauptmaschine2PageRoutingModule
  ],
  declarations: [Hauptmaschine2Page]
})
export class Hauptmaschine2PageModule {}

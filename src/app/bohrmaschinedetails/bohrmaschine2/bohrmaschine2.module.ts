import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bohrmaschine2PageRoutingModule } from './bohrmaschine2-routing.module';

import { Bohrmaschine2Page } from './bohrmaschine2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bohrmaschine2PageRoutingModule
  ],
  declarations: [Bohrmaschine2Page]
})
export class Bohrmaschine2PageModule {}

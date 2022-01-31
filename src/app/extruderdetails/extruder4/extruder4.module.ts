import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Extruder4PageRoutingModule } from './extruder4-routing.module';

import { Extruder4Page } from './extruder4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Extruder4PageRoutingModule
  ],
  declarations: [Extruder4Page]
})
export class Extruder4PageModule {}

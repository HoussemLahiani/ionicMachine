import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Extruder2PageRoutingModule } from './extruder2-routing.module';

import { Extruder2Page } from './extruder2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Extruder2PageRoutingModule
  ],
  declarations: [Extruder2Page]
})
export class Extruder2PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Extruder3PageRoutingModule } from './extruder3-routing.module';

import { Extruder3Page } from './extruder3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Extruder3PageRoutingModule
  ],
  declarations: [Extruder3Page]
})
export class Extruder3PageModule {}

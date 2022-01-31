import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Extruder1PageRoutingModule } from './extruder1-routing.module';

import { Extruder1Page } from './extruder1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Extruder1PageRoutingModule
  ],
  declarations: [Extruder1Page]
})
export class Extruder1PageModule {}

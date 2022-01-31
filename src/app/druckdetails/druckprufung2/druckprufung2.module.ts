import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Druckprufung2PageRoutingModule } from './druckprufung2-routing.module';

import { Druckprufung2Page } from './druckprufung2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Druckprufung2PageRoutingModule
  ],
  declarations: [Druckprufung2Page]
})
export class Druckprufung2PageModule {}

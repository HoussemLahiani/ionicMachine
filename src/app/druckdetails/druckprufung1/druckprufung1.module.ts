import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Druckprufung1PageRoutingModule } from './druckprufung1-routing.module';

import { Druckprufung1Page } from './druckprufung1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Druckprufung1PageRoutingModule
  ],
  declarations: [Druckprufung1Page]
})
export class Druckprufung1PageModule {}

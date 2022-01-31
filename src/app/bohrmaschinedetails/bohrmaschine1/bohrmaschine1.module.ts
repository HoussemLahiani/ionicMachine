import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bohrmaschine1PageRoutingModule } from './bohrmaschine1-routing.module';

import { Bohrmaschine1Page } from './bohrmaschine1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bohrmaschine1PageRoutingModule
  ],
  declarations: [Bohrmaschine1Page]
})
export class Bohrmaschine1PageModule {}

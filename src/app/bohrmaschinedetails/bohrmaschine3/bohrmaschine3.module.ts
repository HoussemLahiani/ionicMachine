import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bohrmaschine3PageRoutingModule } from './bohrmaschine3-routing.module';

import { Bohrmaschine3Page } from './bohrmaschine3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bohrmaschine3PageRoutingModule
  ],
  declarations: [Bohrmaschine3Page]
})
export class Bohrmaschine3PageModule {}

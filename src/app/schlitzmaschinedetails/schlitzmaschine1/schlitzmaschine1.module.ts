import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Schlitzmaschine1PageRoutingModule } from './schlitzmaschine1-routing.module';

import { Schlitzmaschine1Page } from './schlitzmaschine1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Schlitzmaschine1PageRoutingModule
  ],
  declarations: [Schlitzmaschine1Page]
})
export class Schlitzmaschine1PageModule {}

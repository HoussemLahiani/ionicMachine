import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoisPageRoutingModule } from './mois-routing.module';

import { MoisPage } from './mois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoisPageRoutingModule
  ],
  declarations: [MoisPage]
})
export class MoisPageModule {}

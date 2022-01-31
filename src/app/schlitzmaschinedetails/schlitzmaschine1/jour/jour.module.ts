import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourPageRoutingModule } from './jour-routing.module';

import { JourPage } from './jour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourPageRoutingModule
  ],
  declarations: [JourPage]
})
export class JourPageModule {}

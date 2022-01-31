import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DruckdetailsPageRoutingModule } from './druckdetails-routing.module';

import { DruckdetailsPage } from './druckdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DruckdetailsPageRoutingModule
  ],
  declarations: [DruckdetailsPage]
})
export class DruckdetailsPageModule {}

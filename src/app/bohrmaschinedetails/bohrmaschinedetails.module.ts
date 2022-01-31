import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BohrmaschinedetailsPageRoutingModule } from './bohrmaschinedetails-routing.module';

import { BohrmaschinedetailsPage } from './bohrmaschinedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BohrmaschinedetailsPageRoutingModule
  ],
  declarations: [BohrmaschinedetailsPage]
})
export class BohrmaschinedetailsPageModule {}

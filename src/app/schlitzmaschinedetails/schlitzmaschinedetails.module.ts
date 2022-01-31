import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchlitzmaschinedetailsPageRoutingModule } from './schlitzmaschinedetails-routing.module';

import { SchlitzmaschinedetailsPage } from './schlitzmaschinedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchlitzmaschinedetailsPageRoutingModule
  ],
  declarations: [SchlitzmaschinedetailsPage]
})
export class SchlitzmaschinedetailsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HauptmaschinedetailsPageRoutingModule } from './hauptmaschinedetails-routing.module';

import { HauptmaschinedetailsPage } from './hauptmaschinedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HauptmaschinedetailsPageRoutingModule
  ],
  declarations: [HauptmaschinedetailsPage]
})
export class HauptmaschinedetailsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtruderdetailsPageRoutingModule } from './extruderdetails-routing.module';

import { ExtruderdetailsPage } from './extruderdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtruderdetailsPageRoutingModule
  ],
  declarations: [ExtruderdetailsPage]
})
export class ExtruderdetailsPageModule {}

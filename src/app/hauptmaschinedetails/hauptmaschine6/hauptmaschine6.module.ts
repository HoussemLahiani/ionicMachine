import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hauptmaschine6PageRoutingModule } from './hauptmaschine6-routing.module';

import { Hauptmaschine6Page } from './hauptmaschine6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hauptmaschine6PageRoutingModule
  ],
  declarations: [Hauptmaschine6Page]
})
export class Hauptmaschine6PageModule {}

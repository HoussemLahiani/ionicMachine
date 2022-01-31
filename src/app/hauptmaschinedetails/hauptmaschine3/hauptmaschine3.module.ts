import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hauptmaschine3PageRoutingModule } from './hauptmaschine3-routing.module';

import { Hauptmaschine3Page } from './hauptmaschine3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hauptmaschine3PageRoutingModule
  ],
  declarations: [Hauptmaschine3Page]
})
export class Hauptmaschine3PageModule {}

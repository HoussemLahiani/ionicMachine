import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hauptmaschine5PageRoutingModule } from './hauptmaschine5-routing.module';

import { Hauptmaschine5Page } from './hauptmaschine5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hauptmaschine5PageRoutingModule
  ],
  declarations: [Hauptmaschine5Page]
})
export class Hauptmaschine5PageModule {}

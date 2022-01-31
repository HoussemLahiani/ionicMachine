import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemainePageRoutingModule } from './semaine-routing.module';

import { SemainePage } from './semaine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemainePageRoutingModule
  ],
  declarations: [SemainePage]
})
export class SemainePageModule {}

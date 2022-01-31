import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoisPage } from './mois.page';

const routes: Routes = [
  {
    path: '',
    component: MoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoisPageRoutingModule {}

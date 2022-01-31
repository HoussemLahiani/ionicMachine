import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bohrmaschine2Page } from './bohrmaschine2.page';

const routes: Routes = [
  {
    path: '',
    component: Bohrmaschine2Page
  },
  {
    path: 'jour',
    loadChildren: () => import('./jour/jour.module').then( m => m.JourPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bohrmaschine2PageRoutingModule {}

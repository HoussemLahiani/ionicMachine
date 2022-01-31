import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Schlitzmaschine1Page } from './schlitzmaschine1.page';

const routes: Routes = [
  {
    path: '',
    component: Schlitzmaschine1Page
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
export class Schlitzmaschine1PageRoutingModule {}

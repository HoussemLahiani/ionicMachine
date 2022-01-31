import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bohrmaschine1Page } from './bohrmaschine1.page';

const routes: Routes = [
  {
    path: '',
    component: Bohrmaschine1Page
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
export class Bohrmaschine1PageRoutingModule {}

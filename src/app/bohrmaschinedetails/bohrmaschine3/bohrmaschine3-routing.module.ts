import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bohrmaschine3Page } from './bohrmaschine3.page';

const routes: Routes = [
  {
    path: '',
    component: Bohrmaschine3Page
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
export class Bohrmaschine3PageRoutingModule {}

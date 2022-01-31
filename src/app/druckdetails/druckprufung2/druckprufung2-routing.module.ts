import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Druckprufung2Page } from './druckprufung2.page';

const routes: Routes = [
  {
    path: '',
    component: Druckprufung2Page
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
export class Druckprufung2PageRoutingModule {}

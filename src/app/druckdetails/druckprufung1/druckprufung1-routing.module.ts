import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Druckprufung1Page } from './druckprufung1.page';

const routes: Routes = [
  {
    path: '',
    component: Druckprufung1Page
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
export class Druckprufung1PageRoutingModule {}

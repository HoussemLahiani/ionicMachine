import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DruckdetailsPage } from './druckdetails.page';

const routes: Routes = [
  {
    path: '',
    component: DruckdetailsPage
  },
  {
    path: 'druckprufung1',
    loadChildren: () => import('./druckprufung1/druckprufung1.module').then( m => m.Druckprufung1PageModule)
  },
  {
    path: 'druckprufung2',
    loadChildren: () => import('./druckprufung2/druckprufung2.module').then( m => m.Druckprufung2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DruckdetailsPageRoutingModule {}

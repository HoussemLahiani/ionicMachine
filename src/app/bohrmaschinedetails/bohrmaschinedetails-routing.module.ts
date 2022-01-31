import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BohrmaschinedetailsPage } from './bohrmaschinedetails.page';

const routes: Routes = [
  {
    path: '',
    component: BohrmaschinedetailsPage
  },
  {
    path: 'bohrmaschine1',
    loadChildren: () => import('./bohrmaschine1/bohrmaschine1.module').then( m => m.Bohrmaschine1PageModule)
  },
  {
    path: 'bohrmaschine2',
    loadChildren: () => import('./bohrmaschine2/bohrmaschine2.module').then( m => m.Bohrmaschine2PageModule)
  },
  {
    path: 'bohrmaschine3',
    loadChildren: () => import('./bohrmaschine3/bohrmaschine3.module').then( m => m.Bohrmaschine3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BohrmaschinedetailsPageRoutingModule {}

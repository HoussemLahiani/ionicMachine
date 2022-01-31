import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchlitzmaschinedetailsPage } from './schlitzmaschinedetails.page';

const routes: Routes = [
  {
    path: '',
    component: SchlitzmaschinedetailsPage
  },
  {
    path: 'schlitzmaschine1',
    loadChildren: () => import('./schlitzmaschine1/schlitzmaschine1.module').then( m => m.Schlitzmaschine1PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchlitzmaschinedetailsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtruderdetailsPage } from './extruderdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ExtruderdetailsPage
  },
  {
    path: 'extruder1',
    loadChildren: () => import('./extruder1/extruder1.module').then( m => m.Extruder1PageModule)
  },
  {
    path: 'extruder2',
    loadChildren: () => import('./extruder2/extruder2.module').then( m => m.Extruder2PageModule)
  },
  {
    path: 'extruder3',
    loadChildren: () => import('./extruder3/extruder3.module').then( m => m.Extruder3PageModule)
  },
  {
    path: 'extruder4',
    loadChildren: () => import('./extruder4/extruder4.module').then( m => m.Extruder4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtruderdetailsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Extruder1Page } from './extruder1.page';

const routes: Routes = [
  {
    path: '',
    component: Extruder1Page
  },
  {
    path: 'jour',
    loadChildren: () => import('./jour/jour.module').then( m => m.JourPageModule)
  },
  {
    path: 'semaine',
    loadChildren: () => import('./semaine/semaine.module').then( m => m.SemainePageModule)
  },
  {
    path: 'mois',
    loadChildren: () => import('./mois/mois.module').then( m => m.MoisPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Extruder1PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Extruder4Page } from './extruder4.page';

const routes: Routes = [
  {
    path: '',
    component: Extruder4Page
  },
  {
    path: 'jour',
    loadChildren: () => import('./jour/jour.module').then( m => m.JourPageModule)
  },
  {
    path: 'mois',
    loadChildren: () => import('./mois/mois.module').then( m => m.MoisPageModule)
  },
  {
    path: 'semaine',
    loadChildren: () => import('./semaine/semaine.module').then( m => m.SemainePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Extruder4PageRoutingModule {}

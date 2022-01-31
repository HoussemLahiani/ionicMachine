import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hauptmaschine1Page } from './hauptmaschine1.page';

const routes: Routes = [
  {
    path: '',
    component: Hauptmaschine1Page
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
export class Hauptmaschine1PageRoutingModule {}

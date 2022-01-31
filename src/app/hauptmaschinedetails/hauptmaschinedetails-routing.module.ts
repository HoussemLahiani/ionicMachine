import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HauptmaschinedetailsPage } from './hauptmaschinedetails.page';

const routes: Routes = [
  {
    path: '',
    component: HauptmaschinedetailsPage
  },
  {
    path: 'hauptmaschine1',
    loadChildren: () => import('./hauptmaschine1/hauptmaschine1.module').then( m => m.Hauptmaschine1PageModule)
  },
  {
    path: 'hauptmaschine2',
    loadChildren: () => import('./hauptmaschine2/hauptmaschine2.module').then( m => m.Hauptmaschine2PageModule)
  },
  {
    path: 'hauptmaschine3',
    loadChildren: () => import('./hauptmaschine3/hauptmaschine3.module').then( m => m.Hauptmaschine3PageModule)
  },
  {
    path: 'hauptmaschine4',
    loadChildren: () => import('./hauptmaschine4/hauptmaschine4.module').then( m => m.Hauptmaschine4PageModule)
  },
  {
    path: 'hauptmaschine5',
    loadChildren: () => import('./hauptmaschine5/hauptmaschine5.module').then( m => m.Hauptmaschine5PageModule)
  },
  {
    path: 'hauptmaschine6',
    loadChildren: () => import('./hauptmaschine6/hauptmaschine6.module').then( m => m.Hauptmaschine6PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HauptmaschinedetailsPageRoutingModule {}

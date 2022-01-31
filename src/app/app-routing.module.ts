import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'machines',
    loadChildren: () => import('./machines/machines.module').then( m => m.MachinesPageModule)
  },
  {
    path: 'extruderdetails',
    loadChildren: () => import('./extruderdetails/extruderdetails.module').then( m => m.ExtruderdetailsPageModule)
  },
  {
    path: 'hauptmaschinedetails',
    loadChildren: () => import('./hauptmaschinedetails/hauptmaschinedetails.module').then( m => m.HauptmaschinedetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bohrmaschinedetails',
    loadChildren: () => import('./bohrmaschinedetails/bohrmaschinedetails.module').then( m => m.BohrmaschinedetailsPageModule)
  },  
  {
    path: 'schlitzmaschinedetails',
    loadChildren: () => import('./schlitzmaschinedetails/schlitzmaschinedetails.module').then( m => m.SchlitzmaschinedetailsPageModule)
  },   {
    path: 'druckdetails',
    loadChildren: () => import('./druckdetails/druckdetails.module').then( m => m.DruckdetailsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemainePage } from './semaine.page';

const routes: Routes = [
  {
    path: '',
    component: SemainePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemainePageRoutingModule {}

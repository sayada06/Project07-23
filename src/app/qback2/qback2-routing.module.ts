import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qback2Page } from './qback2.page';

const routes: Routes = [
  {
    path: '',
    component: Qback2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qback2PageRoutingModule {}

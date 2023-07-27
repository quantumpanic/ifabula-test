import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HashFunctionPage } from './hash-function.page';

const routes: Routes = [
  {
    path: '',
    component: HashFunctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HashFunctionPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpReqPage } from './http-req.page';

const routes: Routes = [
  {
    path: '',
    component: HttpReqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpReqPageRoutingModule {}

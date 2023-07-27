import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpReqPageRoutingModule } from './http-req-routing.module';

import { HttpReqPage } from './http-req.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpReqPageRoutingModule
  ],
  declarations: [HttpReqPage]
})
export class HttpReqPageModule {}

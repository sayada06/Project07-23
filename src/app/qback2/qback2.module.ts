import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qback2PageRoutingModule } from './qback2-routing.module';

import { Qback2Page } from './qback2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Qback2PageRoutingModule
  ],
  declarations: [Qback2Page]
})
export class Qback2PageModule {}

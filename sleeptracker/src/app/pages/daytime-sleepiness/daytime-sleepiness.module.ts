import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaytimeSleepinessPageRoutingModule } from './daytime-sleepiness-routing.module';

import { DaytimeSleepinessPage } from './daytime-sleepiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaytimeSleepinessPageRoutingModule
  ],
  declarations: [DaytimeSleepinessPage]
})
export class DaytimeSleepinessPageModule {}

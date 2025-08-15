import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunZoneRoutingModule } from './fun-zone-routing.module';
import { FunZoneComponent } from './fun-zone.component';
import { TickTacToeComponent } from './tick-tac-toe/tick-tac-toe.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FunZoneComponent,
    TickTacToeComponent,
  ],
  imports: [
    CommonModule,
    FunZoneRoutingModule,
    SharedModule
  ]
})
export class FunZoneModule { }

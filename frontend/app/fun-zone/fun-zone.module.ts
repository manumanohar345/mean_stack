import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunZoneRoutingModule } from './fun-zone-routing.module';
import { FunZoneComponent } from './fun-zone.component';
import { TickTacToeComponent } from './tick-tac-toe/tick-tac-toe.component';


@NgModule({
  declarations: [
    FunZoneComponent,
    TickTacToeComponent
  ],
  imports: [
    CommonModule,
    FunZoneRoutingModule
  ]
})
export class FunZoneModule { }

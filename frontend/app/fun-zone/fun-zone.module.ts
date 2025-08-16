import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunZoneRoutingModule } from './fun-zone-routing.module';
import { FunZoneComponent } from './fun-zone.component';
import { TickTacToeComponent } from './tick-tac-toe/tick-tac-toe.component';
import { SharedModule } from '../shared/shared.module';
import { InventoryComponent } from '../inventory/inventory.component';
import { InventoryModule } from '../inventory/inventory.module';


@NgModule({
  declarations: [
    FunZoneComponent,
    TickTacToeComponent,
    // InventoryComponent
  ],
  imports: [
    CommonModule,
    FunZoneRoutingModule,
    SharedModule,
    InventoryModule
  ]
})
export class FunZoneModule { }

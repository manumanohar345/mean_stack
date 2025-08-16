import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { InventoryListComponent } from './inventory-list/inventory-list.component';


@NgModule({
  declarations: [
    InventoryComponent,
    InventoryListComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    InventoryComponent 
  ]
})
export class InventoryModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunZoneComponent } from './fun-zone.component';
import { TickTacToeComponent } from './tick-tac-toe/tick-tac-toe.component';

const routes: Routes = [{ path: '', component: FunZoneComponent }, { path: 'tick-tac-toe', component: TickTacToeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunZoneRoutingModule { }

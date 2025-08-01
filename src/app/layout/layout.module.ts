import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    MainLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    MainLayoutComponent,
    AuthLayoutComponent,
  ]
})
export class LayoutModule { }

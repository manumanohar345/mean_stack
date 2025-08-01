import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }

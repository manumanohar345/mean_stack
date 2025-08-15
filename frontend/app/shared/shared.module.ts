import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { TodoComponent } from '../todo/todo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    TodoComponent
  ]
})
export class SharedModule { }

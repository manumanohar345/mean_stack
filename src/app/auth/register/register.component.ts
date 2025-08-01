import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email = '';
  password = '';
  registered = false;

  onRegister(event: Event) {
    event.preventDefault();
    this.registered = true;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  loggedIn = false;

  onLogin(event: Event) {
    event.preventDefault();
    // Here you would call your backend login API
    this.loggedIn = true;
  }
}

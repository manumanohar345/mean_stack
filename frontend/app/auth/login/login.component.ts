import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  loggedIn = false;
  errorMessage = '';
  constructor(private router: Router,private http:HttpClient) {  }
   onLogin(event: Event) {
  event.preventDefault();

  this.http.post<any>('http://localhost:5000/api/login', {
    email: this.email,
    password: this.password
  }).subscribe({
    next: (res) => {
      this.loggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      this.errorMessage = '';
      this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      this.loggedIn = false;
      this.errorMessage = err.error?.message || 'Login failed';
    }
  });
}

}

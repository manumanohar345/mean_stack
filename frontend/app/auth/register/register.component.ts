import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email = '';
  password = '';
  registered = false;
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';
  constructor(private http: HttpClient, private router: Router) { }
  onRegister(event: Event) {
    event.preventDefault();

    // Client-side validation
    if (!this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'All fields are required';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.http.post<any>('http://localhost:5000/api/register', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        this.successMessage = res.message || 'Registration successful';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 1000);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Registration failed';
        this.successMessage = '';
      }
    });
  }
}

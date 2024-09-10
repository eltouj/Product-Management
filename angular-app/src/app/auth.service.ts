import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'jwt_token';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): void {
    this.http.post<any>('http://127.0.0.1:8000/login', { username, password }).subscribe({
      next: (response) => {
        localStorage.setItem(this.JWT_TOKEN, response.token);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login error:', error);
      }
    });
  }

  logout(): void {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.JWT_TOKEN);
  }

  getToken(): string | null {
    return localStorage.getItem(this.JWT_TOKEN);
  }
}

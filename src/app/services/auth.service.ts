import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  private isAuthenticated: boolean = false;

  login(user: string, password: string) {
    if (user === "cacau" && password === "show") {
      this.isAuthenticated = true;
      this.router.navigate(["/produtos"])
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fg:FormGroup
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.fg=new FormGroup({
      email:new FormControl("",[
        Validators.email,
        Validators.required
      ]),
      password:new FormControl("",[
        Validators.required
      ])
    })
  }

  login() {
    this.http.post<any>('http://127.0.0.1:8085/api/auth/signin', this.fg.value).subscribe(
      response => {
        this.authService.storeTokens({
          token: response.token,
          refreshToken: response.refreshToken,
          userId: response.id,
          role: response.role
        });
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

  logout() {
    this.authService.clearTokens();
    this.router.navigate(['/login']);
  }
}
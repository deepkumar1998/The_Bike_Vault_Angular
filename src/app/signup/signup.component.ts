import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  fg:FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.fg=new FormGroup({

      email:new FormControl("",[
        Validators.email,
        Validators.required
      ]),
      password:new FormControl("",[
        Validators.required
      ]),
      firstName:new FormControl("",[
        Validators.required
      ]),
      lastName:new FormControl("",[
        Validators.required
      ])
    })
  }

  signup() {
    this.http.post<any>('http://127.0.0.1:8085/api/auth/signup', this.fg.value).subscribe(
      ()=> {
        
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

 
}

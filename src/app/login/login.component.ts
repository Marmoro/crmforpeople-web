import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

export enum states {
  ENTER_EMAIL,
  ENTER_OTP,
  VERIFIED
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  states = states;
  formState = states.ENTER_EMAIL;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.formState = states.ENTER_EMAIL;
  }

  onEnterEmail() {
    this.formState = states.ENTER_OTP;
    this.login(this.email);
  }

  onEnterOTP() {
    this.formState = states.ENTER_OTP;
    this.verify(this.email, this.password)
  }

  login(email: string) {
    this.authService.login(email).subscribe(
      (next: any) => {
        if (next.password) {
          console.log(next.password);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  verify(email: string, password: string) {
    this.authService.verify(email, password).subscribe(
      (next: any) => {
        if (next.message !== 'success') {
          this.formState = states.ENTER_OTP;
          this.password = '';
        }
        this.router.navigate(['home']);
      },
      error => {
        console.log(error);
      }
    );
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  loginStatus: any;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.isAuthenticated().subscribe((next) => {
      console.log(next);
      this.loginStatus = next;
    }, error => { }))
  }

  onLogOut() {
    this.authService.logOut().subscribe(
      next => { console.log(next); },
      error => { console.log(error); }
    )

    window.location.reload();
  }

}

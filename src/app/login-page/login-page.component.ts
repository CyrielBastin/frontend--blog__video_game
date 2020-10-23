import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  invalid_login = false

  constructor (
    private auth_service: AuthService,
    private router: Router,
    private user_service: UserService
  ) {}

  ngOnInit(): void
  {}

  onFormSubmit (form: NgForm)
  {
    this.auth_service
        .login(form.value)
        .subscribe(token => {
          this.auth_service.saveUserInfos(token)
          this.goToHome()
        })
  }

  goToHome ()
  {
    this.router.navigate(['/'])
  }
}

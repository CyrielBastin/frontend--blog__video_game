import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidator } from '../services/form-validator.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  signup_error = false

  constructor (
    private user_service: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onFormSubmit (form: NgForm)
  {
    if (!FormValidator.isSignUpFormValid(form)) {
      this.signup_error = true
      return
    }

    this.user_service
        .getOneByUsername(form.value['username'])
        .subscribe(
          (datas) => { this.signup_error = true }
        )
    const user = this.user_service.createUserFromForm(form)

    this.user_service
        .register(user)
        .subscribe(
          (response) => { this.goToHome() }
        )
  }

  goToHome () {
    this.router.navigate(['/'])
  }
}

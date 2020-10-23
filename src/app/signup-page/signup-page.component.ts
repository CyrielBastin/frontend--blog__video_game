import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor (
    private user_service: UserService,
    private router: Router
  ) {}

  ngOnInit(): void
  {
  }

  onFormSubmit (form: NgForm)
  {
    const user = this.user_service.createUserFromForm(form)

    this.user_service.register(user).subscribe(response => this.goToHome())
  }

  goToHome () {
    this.router.navigate(['/'])
  }
}

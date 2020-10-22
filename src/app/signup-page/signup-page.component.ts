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
    let user = new User()
    user.id = 0
    user.username = form.value['username']
    user.password = form.value['password']
    user.email = form.value['email']
    user.avatar = form.value['avatar']
    user.role = 1

    this.user_service.register(user).subscribe(response => this.goToHome())
  }

  goToHome () {
    this.router.navigate(['/'])
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor (
    private user_service: UserService,
    private router: Router
  ) {}

  ngOnInit(): void
  {}

  onFormSubmit (form: NgForm)
  {
    this.user_service.login(form.value).subscribe(response => console.log(response))
  }

  goToHome ()
  {
    this.router.navigate(['/'])
  }
}

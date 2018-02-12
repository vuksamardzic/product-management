import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;

  constructor(private router: Router) { }

  login(loginForm: NgForm): void {
    if ( loginForm && loginForm.valid ) {
      const username = loginForm.form.value.username;
      const password = loginForm.form.value.password;

      this.router.navigate(['/products']);
    } else {
      this.errorMessage = 'Please enter username and password!'
    }
  }

  ngOnInit() {
  }

}

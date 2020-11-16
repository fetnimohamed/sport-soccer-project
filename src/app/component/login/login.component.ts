import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;
  login: any = {};
  loginForm: FormGroup;
  constructor(private formBluider: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBluider.group({
      email: [''],
      pwd: ['']
    }
    )
    this.users = [{ email: "email@email.com", pwd: "123" },
    { email: "med@email.com", pwd: "123" }]

  }

  loginSubmit() {
    alert("button clicked");
    console.log(this.login.email);
  }

  loginVerif(user: any) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === user.email) {
        return "0";
      }

    }
    return "1";
  }
}
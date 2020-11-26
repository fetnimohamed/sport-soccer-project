import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ok } from 'assert';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;
  login: any = {};
  loginForm: FormGroup;
  constructor(private formBluider: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBluider.group({
      email: [''],
      pwd: ['']
    }
    )
    this.userService.getAllUsers().subscribe(
      data=>{
        this.users=data
      }
    )
  }

  loginSubmit() {
    console.log(this.login.email);
    this.userService.login(this.login).subscribe(
      data => {
        console.log('data', data);
        
        if (data.message === 'ok') {
          localStorage.setItem('conctedUser',JSON.stringify(data.user));
          console.log('ok',data.user);
          if (data.user.role==='admin') {
            this.router.navigate(['Admin'])
          } else {
            this.router.navigate([''])
          }
        } else {
          console.log('dddd');
          // alert('error 404')
        }
      }
    )

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
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/comparePwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm :FormGroup;
  constructor(private fromBuilder: FormBuilder,
    private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.fromBuilder.group({
      firstName: ['', Validators.minLength(5)],
      lastName: [''],
      email: ['', Validators.email],
      pwd: ['', [Validators.minLength(8), Validators.maxLength(12)]],
      cnfPwd: [''],
      tel: ['',[Validators.minLength(8),Validators.maxLength(8)]]
    },{
      validator:MustMatch('pwd','cnfPwd')
    })
  }
  signup(user:any){
    this.userService.addUser(user).subscribe(
      ()=>{
        console.log('added');
        
      }
    )
    this.router.navigate(['Admin']);
  }

}

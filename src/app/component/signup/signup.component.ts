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
  message:string;
signupForm :FormGroup;
  imagePreview:any;
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
      tel: ['',[Validators.minLength(8),Validators.maxLength(8)]],
      avatar:['']
    },{
      validator:MustMatch('pwd','cnfPwd')
    })
  }
  signup(user:any){
    let domain = user.email.substring(user.email.lastIndexOf("@") + 1);
    user.role = (domain === "admin.com")?'admin': 'user';
    console.log(user);
    
    this.userService.addUser(user, this.signupForm.value.avatar).subscribe(
      (data)=>{
        console.log('data',data.message);
        if (data.message ==='User validation failed') {
          this.message='user exists !!!'
        } else {
          this.router.navigate(['Admin']);
          console.log('new');
        }
      }
    )
    
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[2];
    console.log(file);
    
    this.signupForm.patchValue({ avatar: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
}

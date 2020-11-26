import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
date:Date;
conctedUser:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.date=new Date();
    this.conctedUser=JSON.parse(localStorage.getItem('conctedUser'));
  }
  goToContact(){
    this.router.navigate(['contact']);

  }

logout(){
  localStorage.removeItem('conctedUser');
  location.reload();

  }
}

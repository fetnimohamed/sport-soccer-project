import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
date:Date;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.date=new Date();
  }
  goToContact(){
    this.router.navigate(['contact']);

  }
}

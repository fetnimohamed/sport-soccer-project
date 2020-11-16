import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() lastMatch:any;
  constructor() { }

  ngOnInit(): void {
this.lastMatch={id:1,score:"4-5",equipe1:"FCB",equipe2:"Inter"};
  }

}

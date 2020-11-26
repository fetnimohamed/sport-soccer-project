import { getCurrencySymbol } from '@angular/common';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() match:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 result(a:number ,b:number){
   if (Number(a) <Number(b)) {
     return "loss";
   }else if (Number(b)<Number(a)) {
     return "win";
   } else {
     return "draw";
   }
 } 
  colorResult(x: string) {
    switch (x) {
      case "win": return 'green';
      case "loss": return 'yellow';
      case "draw": return 'blue';
    }
  }
  matchDetails(){
this.router.navigate([`match-details/${this.match.idR}`])
  }

}

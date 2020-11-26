import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
user:any;
id:any;
  constructor(
    private userSerice:UserService,
    private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
this.id=this.activatedroute.snapshot.paramMap.get('id');
    this.userSerice.getUserById(this.id).subscribe(
      data=>{
        this.user=data.user;
      }
    )
  }

}

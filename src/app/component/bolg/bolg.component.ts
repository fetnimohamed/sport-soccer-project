import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-bolg',
  templateUrl: './bolg.component.html',
  styleUrls: ['./bolg.component.css']
})
export class BolgComponent implements OnInit {
blogs:any;
  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    this.playerService.getplayers().subscribe(
      data=>{
        this.blogs=data;
      }
    )
  }

}

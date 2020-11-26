import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
@Input() player:any;
team:any;
  constructor(private teamService:TeamService) { }

  ngOnInit(): void {
    // this.teamService.getTeamById(this.player.idT).subscribe(
    //   (data)=>{
    //     this.team=data;
    //   }
    // )
  }

}

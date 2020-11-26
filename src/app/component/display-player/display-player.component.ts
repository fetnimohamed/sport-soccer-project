import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  id:any;
  player:any;
  constructor(private activatedRoute:ActivatedRoute,
    private playerService:PlayerService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getplayerById(this.id).subscribe(
      data => {
        this.player = data.player
       

      }
    )
  }

}

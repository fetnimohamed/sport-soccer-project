import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any;
  players: any;
  player: any;
  matches: any;
  constructor(private matchService: MatchService,
    private playerservice: PlayerService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllMatches();
    this.getplayer();
    this.getUsers();

  }
  getUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data.users;
      }
    )
  }
  displayPlayer(id: number) {
    
    this.router.navigate([`diplay-player/${id}`]);
  }
  editPlayer(id: number) {
    this.router.navigate([`Edit-player/${id}`]);
  }
  deletePlayer(id: number) {
    this.playerservice.deletePlayer(id).subscribe(
      () => {
        console.log("del");
        this.getplayer();
      }
    )
  }
  diplayMatch(id: number) {
    this.router.navigate([`match-details/${id}`])
  }
  editMatch(id: number) {
    this.router.navigate([`Add-match/${id}`]);
  }
  getAllMatches() {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data.matches;
      });
  }
  deleteMatch(id: string) {
    console.log(id);
    this.matchService.deleteMatch(id).subscribe(
      () => {
        this.getAllMatches();


      }
    )
  }
  getplayer() {
    this.playerservice.getplayers().subscribe(
      data => {
        this.players = data.players;
      }
    )
  }
  diplayUser(id: number) {
    this.router.navigate([`diplayUser/${id}`]);
  }
  deleteUser(id:string){
    console.log("sss",id);
    this.userService.deleteUser(id).subscribe(
      ()=>{
        console.log('deleted!!');
        this.getUsers();
      }
    )
  }
}



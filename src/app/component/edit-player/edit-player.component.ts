import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  id:any;
  editPlayer:any;
  editPlayersForm:FormGroup;
  constructor(private formbuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private playerService : PlayerService,
    private router:Router) { }

  ngOnInit(): void {
    this.editPlayer=this.formbuilder.group(
      {name:[''],
      position:[''],
        birthday:[''],
        description:['']

      }
    );
this.id=this.activatedRoute.snapshot.paramMap.get('id');
if (this.id) {
  this.playerService.getplayerById(this.id).subscribe(
    data=>{
      this.editPlayer=data;
    }
  )
}else{
  this.editPlayer={};
}
  }
  editP() {
    if (this.id) {
      this.playerService.editPlayer(this.editPlayer).subscribe(
        () => {
          this.router.navigate(['Admin']);
        }
      );
    } else {
      this.playerService.addPlayer(this.editPlayer).subscribe(
        ()=>{ 
          console.log('added by the boss');
          this.router.navigate(['Admin']);
        }
      );
    }
   
  }
  butonValue(){
    if (this.id) {
      return "edit Value";
    }else{
      return "add player";
    }
  }
}

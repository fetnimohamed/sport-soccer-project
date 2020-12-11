import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  id: any;
  teams:any;
  imagePreview:any;
  editPlayer: any;
  editPlayersForm: FormGroup;
  constructor(private formbuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router,
    private teamService :TeamService) { }

  ngOnInit(): void {
this.teamService.getAllTeams().subscribe(
  data=>{
this.teams=data.teams
console.log('teams',this.teams);

  })
    this.editPlayersForm = this.formbuilder.group(
      {
        name: [''],
        position: [''],
        birthday: [''],
        description: [''],
        image:[''],
        teamId:['']

      }
    );
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.playerService.getplayerById(this.id).subscribe(
        data => {
          this.editPlayer = data.player;
        }
      )
    } else {
      this.editPlayer = {};
      
    }
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.editPlayersForm.patchValue({ image: file });
    this.editPlayersForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }
  
  editP() {
    if (this.id) {
      this.playerService.editPlayer(this.editPlayer).subscribe(
        () => {
          this.router.navigate(['Admin']);
        }
      );
    } else {
      this.playerService.addPlayer(this.editPlayer, this.editPlayersForm.value.image).subscribe(
        () => {
          console.log('added by the boss');
          this.router.navigate(['Admin']);
        }
      );
    }

  }
  butonValue() {
    if (this.id) {
      return "edit Value";
    } else {
      return "add player";
    }
  }
}

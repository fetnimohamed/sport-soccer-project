import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
team:any={};
addTeamFrom:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private teamService:TeamService) { }

  ngOnInit(): void {
    this.addTeamFrom=this.formBuilder.group({
      name:[''],
      country:['']
    })
  }
  addTeam(){
  console.log(this.team);
  this.teamService.addTeam(this.team).subscribe(
    ()=>{
      console.log('team added !!');
      
    }
  )
}
}

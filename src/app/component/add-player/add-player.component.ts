import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
playersForm:FormGroup;
id:any;

constructor( private formBuilder:FormBuilder,
  private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.playersForm=this.formBuilder.group({
      name:['',Validators.minLength(3)],
      pos:[''],
      bith:['',Validators.minLength(3)],
      dis:['']
    })
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
  }
player(player:any){

}
}

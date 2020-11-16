import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  editMatch: any = {};
  matchEditForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editMatch = this.formBuilder.group({
      scoreOne: [''],
      scoreTwo: [''],
      equipeOne: [''],
      equipeTwo: ['']

    })
  }
  toEdit() {
    console.log('match to be Added', this.editMatch);
    
  }
}
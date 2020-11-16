import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  id: any;
  matchAdd: any = {};
  matchForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private matchService: MatchService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.matchService.getMatchById(this.id).subscribe(
        data=>{
          this.matchAdd=data;
        }
      );
    } else {
      this.matchAdd = {};
      this.matchForm = this.formBuilder.group({
        scoreOne: [''],
        scoreTwo: [''],
        equipeOne: [''],
        equipeTwo: ['']

      });
    }
  }
  match() {
    if (this.id) {
      this.matchService.editMatch(this.matchAdd).subscribe(
        () => {
          console.log('edited successfully!!');
          this.router.navigate(['Admin'])
        }
      )
    } else {
      console.log('match to be Added', this.matchAdd);
      this.matchService.addMatch(this.matchAdd).subscribe(
        () => {
          console.log('done!!')
        }
      );
      this.router.navigate(['matches']);
    }
  }
}


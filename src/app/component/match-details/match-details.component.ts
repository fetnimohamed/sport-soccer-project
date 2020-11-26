import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchDetailsService } from 'src/app/services/match-details.service';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
  id: any;
  details: any;
  match: any;
  constructor(private activatedRoute: ActivatedRoute,
    private matchDetailService: MatchDetailsService,
    private matchService: MatchService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.matchDetailService.getDetailsById(this.id).subscribe(
      datta => {
        this.details = datta;
        console.log('done', this.details.idMatch);
        this.matchService.getMatchById(this.details.idMatch).subscribe(
          data => {
            this.match = data;
            console.log('rrrrrrrr', this.match);

          }
        );

      }

    );
    
  }
  diplayDetails(side: number) {
    let detail = ``;
    if (side === 1) {
      for (let i = 0; i < this.details.playersOne.length; i++) {
        detail += `<li>${this.details.playersOne[i]}(${this.details.timeOne[i]})</li>`
      } return detail;
    } else if (side === 2) {
      for (let i = 0; i < this.details.playersTwo.length; i++) {
        detail += `<li>${this.details.playersTwo[i]}(${this.details.timeTwo[i]})</li>`
      }
      return detail;

    }
  }

}

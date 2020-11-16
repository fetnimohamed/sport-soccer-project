import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {
@Input () blog :any;
  constructor() { }

  ngOnInit(): void {
  }

}

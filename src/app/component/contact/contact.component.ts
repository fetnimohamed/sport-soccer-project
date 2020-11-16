import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contact:any={ };

contactForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      tel:[''],
      msg:['']
    })
    
  }
  contactSubmit(){
    alert("button clicked");
    console.log(this.contact);
  }

}

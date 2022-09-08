import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  onclick() {
    console.log("login done successfully........",this.model); 
  } 
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatevalidation',
  templateUrl: './templatevalidation.component.html',
  styleUrls: ['./templatevalidation.component.css']
})
export class TemplatevalidationComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  onclick() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}

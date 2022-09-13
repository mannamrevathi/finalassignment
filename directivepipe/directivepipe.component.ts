import { Component, OnInit } from '@angular/core';
import { Iemployee } from 'src/employee/employee';

@Component({
  selector: 'app-directivepipe',
  templateUrl: './directivepipe.component.html',
  styleUrls: ['./directivepipe.component.css']
})
export class DirectivepipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  empList:Iemployee[]=
  [
    {"id":1 ,"firstname":"revathi" ,"lastname":"mannam" ,"salary":15000, "dob":"1/2/89" ,"email":"rev@gmail.com","Action":""},
    {"id":2 ,"firstname":"vasu" ,"lastname":"rayidi" ,"salary":10000, "dob":"1/05/2017" ,"email":"vas@gmail.com","Action":""},
    {"id":3 ,"firstname":"kohil" ,"lastname":"rayidi" ,"salary":25000, "dob":"03/2/2022" ,"email":"kohil@gmail.com","Action":""},
    {"id":4 ,"firstname":"nilima" ,"lastname":"Mannam" ,"salary":15000, "dob":"03/02/2000" ,"email":"nilima@gmail.com","Action":""},
  
  ]
}

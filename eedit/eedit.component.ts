import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iemployee } from 'src/employee/employee';

@Component({
  selector: 'app-eedit',
  templateUrl: './eedit.component.html',
  styleUrls: ['./eedit.component.css']
})
export class EeditComponent implements OnInit {
  model:any={};
  model2:any={};
  edit= false;
  ShowEdit=false;
  myValue:any;

  constructor() { }

  ngOnInit(): void {
    this.model = new FormGroup({
      'id': new FormControl(this.model.id, Validators.required),
      'firstname': new FormControl(this.model.firstname,[
        Validators.required,
        Validators.minLength(4),
      ]),
      'lastname': new FormControl(this.model.lastname,[
        Validators.required,
        Validators.minLength(4),
      ]),
      'dob': new FormControl(this.model.dob),
      'salary': new FormControl(this.model.salary, Validators.required),
      'email': new FormControl(this.model.email, Validators.required)
    });
  }
  employees:Iemployee[]=
[
  {"id":1 ,"firstname":"revathi" ,"lastname":"mannam" ,"salary":15000, "dob":"1/2/89" ,"email":"rev@gmail.com","Action":""},
  {"id":2 ,"firstname":"vasu" ,"lastname":"rayidi" ,"salary":10000, "dob":"1/05/2017" ,"email":"vas@gmail.com","Action":""},
  {"id":3 ,"firstname":"kohil" ,"lastname":"rayidi" ,"salary":25000, "dob":"03/2/2022" ,"email":"kohil@gmail.com","Action":""},

]

  editEmployee(i:any){
    console.log("hii i am from edit",i)
    this.edit=true;
    this.ShowEdit=false;
    this.model2.id=this.employees[i].id;
    this.model2.firstname=this.employees[i].firstname;
    this.model2.lastname=this.employees[i].lastname;
    this.model2.salary=this.employees[i].salary;
    this.model2.dob=this.employees[i].dob;
    this.model2.email=this.employees[i].email;
    this.myValue=i;

  }
updateEmployee(){
  console.log("hii i am from update")
    this.ShowEdit=true;
    this.edit = false;
    let k = this.myValue;
    for(let i=0;i<this.employees.length;i++){
      if(i==k)
      {
        this.employees[i]= this.model2;
        this.model2 = {};
      }
    }
  }

}
  


  
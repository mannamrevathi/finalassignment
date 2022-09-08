import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      
      FullName: [''],
      Address: [''],
      City: [''],
      Email: [''],
      Phoneno: [''],
      password: [''],
      Conformpassword: [''],
      terms:false,
  });
  }
  get f(){
    return this.registerForm.controls;
   } 
   onSubmit() {
    
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value)) 
   console.log("login done.." ,this.registerForm.controls)
  }
  
  onclick() {
    
  }

}

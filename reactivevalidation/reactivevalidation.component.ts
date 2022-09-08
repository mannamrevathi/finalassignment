import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivevalidation',
  templateUrl: './reactivevalidation.component.html',
  styleUrls: ['./reactivevalidation.component.css']
})
export class ReactivevalidationComponent implements OnInit {
  reactiveForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      
      FullName: ['',Validators.required],
      Address: ['',Validators.required],
      City: ['',Validators.required],
      Email: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Phoneno:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      Confirmpassword: ['', Validators.required],
      terms:true
    },
      { 
        validator: this.MustMatch('password', 'Confirmpassword'),
     
      }
       
  );
  
}

get f(){
  return this.reactiveForm.controls;
 }
 MustMatch(password:any, Confirmpassword:any){
  return(formGroup:FormGroup)=>{
    const passwordcontrol=formGroup.controls[password];
    const ConfirmpasswordControl=formGroup.controls[Confirmpassword];

    if(password.errors && !Confirmpassword.errors.MustMatch){
      return;
    }
    if(passwordcontrol.value !== ConfirmpasswordControl.value){
      passwordcontrol.setErrors({MustMatch:true});
    }
    else{
      ConfirmpasswordControl.setErrors(null);
    }
  }
 }
 


 onSubmit() {
  
      //console.log(this.reactiveForm.value); 
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reactiveForm.value))

  }
  
 
onclick() {
  
}
}

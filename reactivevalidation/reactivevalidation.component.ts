import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivevalidation',
  templateUrl: './reactivevalidation.component.html',
  styleUrls: ['./reactivevalidation.component.css']
})
export class ReactivevalidationComponent implements OnInit {
  reactiveForm!: FormGroup;
  submitted:boolean = false;
  constructor(private formBuilder: FormBuilder) { 
    this.reactiveForm = this.formBuilder.group({
      FullName: ['',Validators.required],
      Address: ['',Validators.required],
      City: ['',Validators.required],
      Email: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Phoneno:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password:new FormControl(null,[Validators.required]),
     confirmpassword:new FormControl(null,[Validators.required])
},
{
validators:this.MustMatch('password','confirmpassword')
})
}
get f(){
return this.reactiveForm.controls
}
MustMatch(password:string,matchingpassword:string){
return(formGroup:FormGroup)=>{
const control=formGroup.controls[password];
const matchingcontrol=formGroup.controls[matchingpassword];
if (matchingcontrol.errors && !matchingcontrol.errors.MustMatch){
  return
}
if (control.value!==matchingcontrol.value){
  matchingcontrol.setErrors({MustMatch:true})
}
else{
  matchingcontrol.setErrors(null)
}
}
}
onSubmit(){
this.submitted=true;
if(this.reactiveForm.invalid){
return
}
else{
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reactiveForm.value))
}
}

ngOnInit(): void {
}

}

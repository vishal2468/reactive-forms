import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValdator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  registrationForm!: FormGroup;
  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      userName:["Vishal",[Validators.required,Validators.minLength(3),forbiddenNameValdator] ],
      password:[''],
      confirmPassword:[''],
      email:[''],
      subscribe:true,
      address:this.fb.group({
        city:[''],
        pincode:[''],
        state:['']
      })
    },{validator: PasswordValidator})

    this.registrationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
      const email=this.registrationForm.get('email');
      if(checkedValue){
        email?.setValidators(Validators.required);
      }
      else{
        email?.clearValidators()
      }
    })
  }

  constructor(private fb : FormBuilder){}

  get userName(){
    return this.registrationForm.get('userName')
  }

  loadApiData() {
    this.registrationForm.setValue({
      "userName":"Vishal",
      "password":"pass123",
      "confirmPassword":"pass123",
      "address":{
        "city":"RNC",
        "pincode":"835001",
        "state":"JH"
      }
    })
  }
  title = 'reactive-forms';
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb : FormBuilder){}

  registrationForm=this.fb.group({
    userName:["Vishal"],
    password:[''],
    confirmPassword:[''],
    address:this.fb.group({
      city:[''],
      pincode:[''],
      state:['']
    })
  })

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

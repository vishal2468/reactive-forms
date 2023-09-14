import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl('')
    })
  });
}

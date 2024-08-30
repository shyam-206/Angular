import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';
  @ViewChild('registerForm') form : NgForm 

  OnFormSubmitted(){
    console.log(this.form)
    // console.log(this.form.value.firstname)
    // console.log(this.form.value.lastname)
    // console.log(this.form.value.email)
    // console.log(this.form.value.dob)
    // console.log(this.form.value.phoneNumber)
    console.log(this.form.value.gender)
  } 
}

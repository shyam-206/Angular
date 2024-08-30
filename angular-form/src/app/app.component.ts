import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';

  firstname : string = ''
  lastname  : string = ''
  dob : Date;
  Email : string = ''
  gender: string = '';
  country: string = '';
  city: string = '';
  region: string = '';
  postal: string = '';
  userName: string = '';
  IsAgreed: boolean = false;


  @ViewChild('registerForm') form : NgForm 

  genders = [
    { id : 'check-male', value : 'male' , display : 'Male'},
    { id : 'check-female', value : 'female' , display : 'Female'},
    { id : 'check-other', value : 'other' , display : 'Prefer not to say'}
  ]

  defaultGender: string = 'male';
  defaultCountry: string = 'India';

  OnFormSubmitted(){
    console.log(this.form)
  
    this.firstname = this.form.value.firstname
    this.lastname = this.form.value.lastname
    this.Email = this.form.value.Email
    this.dob = this.form.value.dob
    this.userName = this.form.value.username
    this.country = this.form.value.address.country
    this.city = this.form.value.city
    this.region = this.form.value.address.region
    this.postal = this.form.value.address.postal
    
    
    this.form.reset()
    this.form.form.patchValue({
      gender : 'male',
      address : {
        country : "India"
      }
    })

    this.IsAgreed = true
  } 

  GenerateUsername(){

    let username = ''

    if(this.firstname.length > 3){
      username += this.firstname.slice(0,3)
    }else{
      username += this.firstname
    }

    if(this.lastname.length > 3){
      username += this.lastname.slice(0,3)
    }else{
      username += this.lastname
    }

    let dateTime = new Date(this.dob)
    username += dateTime.getFullYear()

    username.toLowerCase()

    
    //set value 
    // this.form.setValue({
    //   firstname : this.form.value.firstname,
    //   lastname : this.form.value.lastname,
    //   email : this.form.value.email,
    //   phoneNumber : this.form.value.phoneNumber,
    //   dob : this.form.value.dob,
    //   gender : this.form.value.gender,
    //   username : username,
    //   address : {
    //     street1 : this.form.value.address.street1,
    //     street2 : this.form.value.address.street2,
    //     country : this.form.value.address.country,
    //     city : this.form.value.address.city,
    //     region : this.form.value.address.region,
    //     postalCode : this.form.value.address.postalCode
    //   }
    // })  


    //patch value -
    this.form.form.patchValue({
      username : username,
    })
  }
}

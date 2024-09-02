import { Component ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  
  defaultCountry: string = 'India';
  defaultGender: string = 'male';

  firstname : string = ''
  lastname  : string = ''
  dob : Date;
  Email : string = ''
  gender: string = this.defaultGender;
  country: string = this.defaultCountry;
  city: string = '';
  region: string = '';
  postal: string = '';
  userName: string = '';
  IsAgreed: boolean = false;
  isSubmitted : boolean = false

  submittedData = {
    firstname: '',
    lastname: '',
    dob: null,
    Email: '',
    gender: '',
    country: '',
    city: '',
    region: '',
    postal: '',
    userName: '',
    IsAgreed: false
  };

  @ViewChild('registerForm') form : NgForm 

  genders = [
    { id : 'check-male', value : 'male' , display : 'Male'},
    { id : 'check-female', value : 'female' , display : 'Female'},
    { id : 'check-other', value : 'other' , display : 'Prefer not to say'}
  ]


  OnFormSubmitted(){
    console.log(this.form)
  
    this.submittedData = {
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      Email: this.form.value.email,
      dob: this.form.value.dob,
      userName: this.form.value.username,
      country: this.form.value.address.country,
      city: this.form.value.address.city,
      region: this.form.value.address.region,
      postal: this.form.value.address.postal,
      gender: this.form.value.gender,
      IsAgreed: this.form.value.agreement
    };
    
    
    
    //for the set value after the submited value of the after default
    
    this.isSubmitted = true
    
    this.form.reset()

    this.form.form.patchValue({
      gender : this.defaultGender,
      address : {
        country : this.defaultCountry
      }
      
    })



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

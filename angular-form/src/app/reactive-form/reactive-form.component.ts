import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from './validators/noSpaceAllowed.validators';
import { first } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  formStatus: string = '';
  formdata: any = {};
  address : any = {}

  isSubmitted : boolean = false

  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        CustomValidators.noSpaceAllowed,
      ]),
      username: new FormControl(
        null,
        Validators.required,
        CustomValidators.checkUserName
      ),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      //formGroup is used to store the key value as object
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('India', Validators.required),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required),
      }),
      //FormArray used to store to element
      skills: new FormArray([new FormControl(null, Validators.required)]),
      experience: new FormArray([]),
    });

    this.reactiveForm.statusChanges.subscribe((status) => {
      console.log(status);
      this.formStatus = status;
    });
  }

  onSubmitForm() {
    console.log(this.reactiveForm);

    this.formdata = this.reactiveForm.value;
    console.log(this.formdata.firstname, this.formdata.lastname)

    this.isSubmitted = true

    this.reactiveForm.reset()

    // this.reactiveForm.reset({
    //   firstname: null,
    //   lastname: null,
    //   email: null,
    //   username: null,
    //   dob: null,
    //   gender: 'male',
    //   address: {
    //     street: null,
    //     country: 'India',
    //     city: null,
    //     region: null,
    //     postal: null,
    //   },
    //   skills: [null],
    //   experience: [],
    // });

    this.reactiveForm.patchValue({
      gender : 'male',
      address : {
        country : 'India'
      }
    })
  }

  //add the form control dynamically
  AddSkill() {
    (<FormArray>this.reactiveForm.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }

  DeleteSkill(index: number) {
    const controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }

  // for the get experience
  get experience(): FormArray {
    return this.reactiveForm.get('experience') as FormArray;
  }

  addExperience() {
    this.experience.push(
      new FormGroup({
        company: new FormControl(null),
        position: new FormControl(null),
        totalExp: new FormControl(null),
        start: new FormControl(null),
        end: new FormControl(null),
      })
    );
  }

  removeExperience(index: number) {
    this.experience.removeAt(index);
  }

  GenerateUsername() {
    let username = '';
    const fName: string = this.reactiveForm.get('firstname').value;
    const lName: string = this.reactiveForm.get('lastname').value;
    const dob: string = this.reactiveForm.get('dob').value;
    console.log(fName, lName, dob);
    if (fName.length >= 3) {
      username += fName.slice(0, 3);
    } else {
      username += fName;
    }

    if (lName.length >= 3) {
      username += lName.slice(0, 3);
    } else {
      username += lName;
    }

    let datetime = new Date(dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    //console.log(username);

    // this.reactiveForm.setValue({
    //   firstname: this.reactiveForm.get('firstname').value,
    //   lastname: this.reactiveForm.get('lastname').value,
    //   email: this.reactiveForm.get('email').value,
    //   username: username,
    //   dob: this.reactiveForm.get('dob').value,
    //   gender: this.reactiveForm.get('gender').value,
    //   address: {
    //     street: this.reactiveForm.get('address.street').value,
    //     country: this.reactiveForm.get('address.country').value,
    //     city: this.reactiveForm.get('address.city').value,
    //     region: this.reactiveForm.get('address.region').value,
    //     postal: this.reactiveForm.get('address.postal').value
    //   },
    //   skills: this.reactiveForm.get('skills').value,
    //   experience: this.reactiveForm.get('experience').value
    // })

    //this.reactiveForm.get('username').setValue(username);

    this.reactiveForm.patchValue({
      username: username,
      address: {
        country : 'India'
      },
    });
  }
}

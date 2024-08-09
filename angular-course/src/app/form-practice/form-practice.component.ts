import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { noSpace } from '../validators/nospace.validators';


@Component({
  selector: 'form-practice',
  templateUrl: './form-practice.component.html',
  styleUrls: ['./form-practice.component.css']
})
export class FormPracticeComponent {

  form : any

  constructor(fb : FormBuilder){
    this.form = fb.group({
      username : ['',[Validators.required,Validators.minLength(5),noSpace.noSpaceValidations]],
      password : ['',Validators.required]
    })
  }

  get fc (){
    return this.form.controls
  }

  onSubmitData(f : NgForm){
    console.log(f.value)
  }


}

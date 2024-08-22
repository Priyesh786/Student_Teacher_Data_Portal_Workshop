import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  myForm !: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email : ['', [Validators.required, Validators.email]],
      add : ['', [Validators.required]],
      
    })
  }
}

import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  myForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackBar: MatSnackBar, private route: Router){
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email : ['', [Validators.required, Validators.email]],
      address : ['', [Validators.required]],
      role: ['', Validators.required]
    })
  }
  onSubmit(){
    if(this.myForm.valid) {
      const data = this.myForm.value;
      
      if(data.role == 'Student') {
        this.userService.addStudents(data).subscribe({
          next: (res:any)=>{
            console.log("Student successfully added");
            const snackBarRef=this.snackBar.open('Student successfully added', 'Close', {
              duration: 3000,
            });
            snackBarRef.afterDismissed().subscribe(() => {
              this.route.navigate(['student']);
            });
          }, error :(e:any)=>{
            console.log("Error",e);
            this.snackBar.open('Error adding student', 'Close', {
              duration: 3000,
            });
          }
        })
      }
      else if(data.role == 'Teacher') {
        this.userService.addTeachers(data).subscribe({
          next: (res:any)=>{
            console.log("Teacher successfully added");
            const snackBarRef=this.snackBar.open('Teacher successfully added', 'Close', {
              duration: 3000,
            });
            snackBarRef.afterDismissed().subscribe(() => {
              this.route.navigate(['student']);
            });
          }, error :(e:any)=>{
            console.log("Error",e);
            this.snackBar.open('Error adding teacher', 'Close', {
              duration: 3000,
            });
          }
        })
      }
     // window.location.href=('student');

    } else {
      console.log('Form is invalid.')
    }
 }
}

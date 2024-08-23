import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {
  studentsList: any[] = [];

  constructor(private httpService: UserService) { }
  ngOnInit(): void {
    this.httpService.getStudents().subscribe({
      next: (res: any) => {
        this.studentsList = res;
      }, error: (e:any) => {
        console.log("error", e);
      }
   })
  }
  deleteStudent(id:number):void {
    this.httpService.deleteStudents(id).subscribe({
      next : (res:any) => {
        console.log("Student successfully deleted.");
        window.location.href = 'student/student-details'
      }, error : (e:any)=>{
        console.log("Error in deleting", e);
      }
    })
  }
}

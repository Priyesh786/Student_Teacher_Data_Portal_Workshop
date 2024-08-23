import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  studentsList: any[] = [];
  searchData: string = '';
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
        this.ngOnInit();
      }, error : (e:any)=>{
        console.log("Error in deleting", e);
      }
    })
  }
}


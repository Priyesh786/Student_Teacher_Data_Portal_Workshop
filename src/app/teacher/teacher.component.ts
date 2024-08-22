import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  teachersList: any[] = [];

  constructor(private httpService: UserService) { }
  ngOnInit(): void {
    this.httpService.getTeachers().subscribe({
      next: (res: any) => {
        this.teachersList = res;
      }, error: (e:any) => {
        console.log("error", e);
      }
   })
  }
  deleteTeacher(id:number):void {
    this.httpService.deleteTeachers(id).subscribe({
      next : (res:any) => {
        console.log("Teacher successfully deleted.");
        window.location.href = 'home/teacher'
      }, error : (e:any)=>{
        console.log("Error in deleting", e);
      }
    })
  }
}

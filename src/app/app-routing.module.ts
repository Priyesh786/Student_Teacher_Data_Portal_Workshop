import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
  },
  {
    path: 'teacher',
    component: TeacherComponent,
    children : [
      {
        path: 'teacher-details',
        component: TeacherDetailsComponent
      }
    ]
  },
  {
    path: 'student',
    component: StudentComponent,
    children : [
      {
       path: 'student-details',
       component: StudentDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';



const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
  },
  {
    path: 'teacher',
    component: TeacherComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

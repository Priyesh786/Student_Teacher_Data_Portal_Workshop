import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  apiURL1 = "http://localhost:3000/users";
  apiURL2 = "http://localhost:3001/users";

  constructor(private http: HttpClient) { }

  getStudents() : any {
    return this.http.get(this.apiURL1);
  }
  getTeachers() : any {
    return this.http.get(this.apiURL2);
  }
  addStudents(user: any): Observable<any> {
    return this.http.post(this.apiURL1, user);
  }
  addTeachers(user: any): Observable<any> {
    return this.http.post(this.apiURL2, user);
  }

}

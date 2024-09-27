import { Injectable } from '@angular/core';
import {userList} from "../Shared/mockStudent.data";
import {Observable, of} from "rxjs";
import {User} from "../Shared/Models/user";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: User[] = userList;
  constructor() { }
  getStudents(): Observable< User[] >{
    return of(userList);

  }

  //Add a new user
  addStudent(newStudent:User) : Observable<User[]>{
    this.students.push(newStudent)
    return of(this.students);
  }
//Update an Existing user
  updateStudent(updatedStudent: User): Observable<User[]> {
    const index = this.students.findIndex(user => user.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
    return of(this.students);
  }
//Delete: Remove a user by ID
  deleteStudent(studentId: number): Observable<User[]> {
    this.students = this.students.filter(user => user.id !== studentId);
    return of(this.students);
  }
//Get student by ID
  getStudentById(studentId: number): Observable<User | undefined> {
    const student = this.students.find(user => user.id === studentId);
    return of(student);
  }
}

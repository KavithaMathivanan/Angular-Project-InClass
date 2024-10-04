import { Component,OnInit } from '@angular/core';
import {User} from "../Shared/Models/user"
import {NgFor} from "@angular/common";
import {StudentDetailComponent} from "../student-detail/student-detail.component";
import {StudentService} from "../Services/student.service";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor, StudentDetailComponent, RouterLink],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  userList: User[] = [];
  displayedColumn:string[] = ['id', 'firstName', 'lastName', 'department', 'isAdmin']
  constructor(private studentService: StudentService) {

  }
  ngOnInit() {
   this.studentService.getStudents().subscribe(
     {next: (data: User[]) => this.userList=data,
     error:err => console.error("Error Fetching Students", err),
     complete:() => console.log("student details fetched")}
   );

   }
  selectedStudent?: User;
  selectStudent(student: User):void{
    this.selectedStudent = student;
  }
}

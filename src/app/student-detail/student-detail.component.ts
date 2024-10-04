import { Component, Input, OnInit } from '@angular/core';
import {NgIf} from "@angular/common";
import {User} from '../Shared/Models/user';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../Services/student.service";

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent implements OnInit{
student: User | undefined;
userList: User[] = [];
currentIndex: number = 0;
constructor(
  private route: ActivatedRoute,
  private studentService: StudentService,
  private router: Router
) {}

 ngOnInit() : void{
  this.studentService.getStudents().subscribe(users => {
    this.userList = users;

    this.route.paramMap.subscribe(params=> {
      const id = Number(params.get('id'));
      if(id){
        this.currentIndex = this.userList.findIndex(user => user.id === id);
        this.student = this.userList[this.currentIndex];
      }

    })
  })
 }
 goBackward():void{
  if(this.currentIndex < this.userList.length -1){
    this.currentIndex--;
    this.router.navigate(['/students', this.userList[this.currentIndex].id])
  }
 }
 goForward(): void{
  if(this.currentIndex > 0){
    this.currentIndex++;
    this.router.navigate(['/students', this.userList[this.currentIndex].id])
  }
 }
 goBack(): void{
  this.router.navigate(['/students'])
 }

}

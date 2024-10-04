import {Component, OnInit} from '@angular/core';
import {User} from "../Shared/Models/user";
import {StudentService} from "../Services/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {setThrowInvalidWriteToSignalError} from "@angular/core/primitives/signals";


@Component({
  selector: 'app-modify-student',
  standalone: true,
  imports: [FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './modify-student.component.html',
  styleUrl: './modify-student.component.css'
})
export class ModifyStudentComponent implements OnInit{
studentForm: FormGroup;
student: User | undefined;

constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private studentService: StudentService,
  private router: Router
) {
  this.studentForm = this.fb.group({
    id:['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    department: [''],
isAdmin: [false]
});
}
ngOnInit():void  {
  const id = this.route.snapshot.paramMap.get('id');
  if(id){
    this.studentService.getStudentById(+id).subscribe(student => {
      if(student){
        this.student = student;
        this.studentForm.patchValue(student);
      }
    })
  }
}

onSubmit(): void{
  const student: User = this.studentForm.value;
  if(student.id){
    this.studentService.updateStudent(student);
  }

  this.router.navigate(['/students']);
}

onDelete(): void{
  const id = this.studentForm.get('id')?.value;
  if(id){
    this.studentService.deleteStudent(id);
    this.router.navigate(['/students']);
  }
}

navigateToStudentList(): void{
  this.router.navigate(['/students'])
}
}

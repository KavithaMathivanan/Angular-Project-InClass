import { Component, Input } from '@angular/core';
import {NgIf} from "@angular/common";
import {User} from '../Shared/Models/user';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent {
  @Input() student?:User;
}

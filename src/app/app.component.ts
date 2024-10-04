import { Component } from '@angular/core';
import {NgForOf, JsonPipe} from "@angular/common";
import {RouterLinkActive, RouterLink, RouterOutlet} from '@angular/router';
import {User} from "./Shared/Models/user";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentService} from "./Services/student.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, StudentListComponent, StudentDetailComponent, RouterLinkActive, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Student Management System';

}

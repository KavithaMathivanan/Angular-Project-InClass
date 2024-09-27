import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./Shared/Models/user";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentService} from "./Services/student.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentListComponent, StudentDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Project';

}

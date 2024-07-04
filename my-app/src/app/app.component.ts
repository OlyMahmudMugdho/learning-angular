import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstCompComponent} from "./first-comp/first-comp.component";
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}

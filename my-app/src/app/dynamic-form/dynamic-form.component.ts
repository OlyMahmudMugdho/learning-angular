import { Component } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormModel} from "../models/form.model";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButton],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})


export class DynamicFormComponent {
  placeholder: FormModel = {
    name: 'your name',
    email : "email@example.com",
    age: 23
  }

  name: string = "";
  email: string = "";
  age?: number;
}

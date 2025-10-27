import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";

@Component({
  selector: 'app-root',
  imports: [Login, Signup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Yash, Learning Angular!';
  protected readonly what_to_become = 'A best Programmer';

}

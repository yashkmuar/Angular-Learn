import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { Profile } from "./profile/profile";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Login, Signup, Profile],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = 'Yash, Learning Angular!';
  protected readonly what_to_become = 'A best Programmer';

  Handle_Click_Event(){
    alert("Button Clicked!!");
    this.otherfunction();
  }

  otherfunction(){
    console.log("Other Function Called");
  }
}

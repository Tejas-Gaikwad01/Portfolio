import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = 'Tejas Gaikwad';
  tagline = 'Software Developer • ASP.NET Core • .NET MAUI • C# • Angular • REST APIs';
  resumePath = 'assets/TEJAS_GAIKWAD_Resume_Resume.pdf';

  // Direct values for contact info
  phoneNumber = '+91 93227 23291';
  email = 'tejas.gaikwad20177@gmail.com';
}

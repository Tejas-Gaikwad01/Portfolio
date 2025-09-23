

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = 'Tejas Gaikwad';
  tagline = 'Software Developer • C++  •Java • .NET • Angular';
  resumePath = 'assets/TEJAS_GAIKWAD_Resume_Resume.pdf';

  showNumber = false;

  toggleNumber() {
    this.showNumber = !this.showNumber;
  }
}

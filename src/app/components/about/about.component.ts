import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  bio = `I am a Jr. Software Developer focused on ASP.NET Core and Angular. I enjoy building reliable systems like virtual file systems and backup apps, and learning secure authentication flows.`;

  experience = [
    {
      role: 'Jr. Software Developer',
      company: 'Smartnet Software Pvt Ltd',
      location: 'Magarpatta, Hadapsar, Pune',
      duration: 'May 2025 – Present',
      description: 'Working on full-stack development using ASP.NET Core and Angular.',
      // Option 1: Clearbit (works for many companies automatically)
      logoUrl: 'assets/smartnet-logo.png'
      // Option 2: Local asset — place file in src/assets/ and use:
      // logoUrl: 'assets/smartnet-logo.png'
    }
  ];

  education = [
    {
      degree: 'Master of Computer Science',
      institute: 'Modern College Shivajinagar, Pune',
      year: '2024',
      CGPA: '8.5'
    }
  ];

  goals = [
    'Secure a full-time role as a Software Engineer',
    'Contribute to backend & systems-level projects',
    'Improve full-stack and AI/ML skills'
  ];

  // Fallback if logo URL fails to load
  onLogoError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
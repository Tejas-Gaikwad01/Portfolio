import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  bio = `I am a Software Developer Intern focused on C++, .NET and Angular. I enjoy building reliable systems like virtual file systems and backup apps, and learning secure authentication flows.`;
   experience = [
    {
      role: 'Software Developer Intern',
      company: 'Smartnet Software Pvt Ltd',
      Location: 'Magarpatta Hadapsar',
      duration: 'May 2025 - Present',
      description: 'Working on full-stack development using ASP.NET and Angular.'
    }
  ];
  
  education = [
    { 
      degree: 'Master of Computer Science', 
      institute: 'Modern College Shivajinagar Pune', 
      year: '2024', 
      CGPA: '8.5' 
    }
  ];
  goals = [
    'Secure a full-time role as a Software Engineer',
    'Contribute to backend + systems projects',
    'Improve full-stack and Artificial Inteligience skills'
  ];

  // 🎨 Gradient backgrounds for cards
  gradients = [
    'linear-gradient(135deg, #240f3aee 0%, #2574fc14 100%)', // purple → blue
    'linear-gradient(135deg, #ff512f 0%, #dd2476 100%)', // orange → pink
    'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'  // teal → green
  ];
}

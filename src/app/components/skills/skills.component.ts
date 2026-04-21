import { Component } from '@angular/core';

interface Skill { name: string; }
interface SkillGroup { cat: string; icon: string; skills: Skill[]; }

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      cat: 'Languages',
      icon: '💻',
      skills: [
        { name: 'C#' },
        { name: 'C++' },
        { name: 'Java' },
        { name: 'Python' }
      ]
    },
    {
      cat: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'Angular' },
        { name: '.NET MAUI' },
        { name: 'HTML / CSS' },
        { name: 'JavaScript' }
        
      ]
    },
    {
      cat: 'Backend & APIs',
      icon: '⚙️',
      skills: [
        { name: 'ASP.NET Core' },
        { name: 'Web APIs (REST)' },
        { name: 'Entity Framework' },
        { name: 'SQL Server' },
        { name: 'SQLite' }
      ]
    },
    {
      cat: 'Cloud & Tools',
      icon: '☁️',
      skills: [
        { name: 'Azure Cloud' },
        { name: 'Git / GitHub' },
        { name: 'Postman' }
      ]
    }
  ];
}
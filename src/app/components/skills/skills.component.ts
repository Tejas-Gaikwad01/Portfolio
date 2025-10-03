import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillGroups = [
    { cat: 'Languages', skills: [
      { name: 'C# / ASP.NET', level: 82 },
      { name: 'C++', level: 88 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 70 }
    ]},
    { cat: 'Frontend', skills: [
      { name: 'Angular', level: 76 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'JavaScript', level: 70 }
    ]},
    { cat: 'Tools & DB', skills: [
      { name: 'Git', level: 78 },
      { name: 'SQL Server', level: 72 },
      {name:'Postman',level:80}
    ]}
  ];
}

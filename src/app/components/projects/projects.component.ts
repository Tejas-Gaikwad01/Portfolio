import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent 
{
   projects = [
    {
      title: 'Customized Virtual File System',
      description: 'C virtual file system with create, read, write, delete, and metadata operations.',
      technologies: ['C', 'OOP', 'Data Structures'],
      image: 'assets/projects/vfs.png',
      link: 'https://github.com/Tejas-Gaikwad01/Customized-Virtual-File-System-CVFS-'
    },
    {
      title: 'Duplicate File Remover',
      description: 'Python script to detect and remove duplicate files using MD5 hashing.',
      technologies: ['Python', 'File Handling', 'MD5 Hash'],
      image: 'assets/projects/duplicate_files.png',
      link: 'https://github.com/Tejas-Gaikwad01/Duplicate-File-Removing-Script'
    }
  ];
}

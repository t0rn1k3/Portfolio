import { Component, Input, OnInit } from '@angular/core';
import { ProjectsInterface } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {


  // @ts-ignore
  @Input() Projects;


  constructor() {}

  ngOnInit(): void {
  }

}

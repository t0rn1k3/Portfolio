import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {

  @Input() Projects! : {name: string, codeUrl : string, pageUrl : string, imagePath : string}
  @Input() Projects2! : {name: string, codeUrl : string, pageUrl : string, imagePath : string}
  @Input() Projects3! : {name: string, codeUrl : string, pageUrl : string, imagePath : string}
  @Input() Projects4! : {name: string, codeUrl : string, pageUrl : string, imagePath : string}

  constructor() {}

  ngOnInit(): void {
  }

}

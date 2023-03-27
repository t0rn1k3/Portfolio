import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{

  skills = [
    {
      name : 'HTML',
      imagePath : './assets/icons/html.png'
    },
    {
      name : 'CSS',
      imagePath : './assets/icons/css-3.png'
    },
    {
      name : 'SCSS',
      imagePath : './assets/icons/scss.png'
    },
    {
      name : 'Bootstrap',
      imagePath : './assets/icons/bootstrap.png'
    },
    {
      name : 'JavaScript',
      imagePath : './assets/icons/javascript.png'
    },
    {
      name : 'TypeScript',
      imagePath : './assets/icons/typescript.png'
    },
    {
      name : 'Angular',
      imagePath : './assets/icons/angular.png'
    },
    {
      name : 'React.js',
      imagePath : './assets/icons/react.png'
    },
    {
      name : 'Redux',
      imagePath : './assets/icons/redux.png'
    },
    {
      name : 'PHP',
      imagePath : './assets/icons/php.png'
    },
    {
      name : 'WordPress',
      imagePath : './assets/icons/wordpress.png'
    },
    {
      name : 'Flutter',
      imagePath : './assets/icons/Flutter.png'
    },
    {
      name : 'Adobe-Photoshop',
      imagePath : './assets/icons/adobe-photoshop.png'
    },
    {
      name : 'Adobe-Illustrator',
      imagePath : './assets/icons/adobe-illustrator.png'
    },
    {
      name : 'Figma',
      imagePath : './assets/icons/figma.png'
    },
    {
      name : 'MC Office',
      imagePath : './assets/icons/Microsoft_Office.png'
    },
  ]


  constructor(){}


  ngOnInit(): void {
    
  }


  visible : boolean = false


  isShown : boolean = true;


  onShowSkill(){
    this.isShown = !this.isShown;
    this.visible = !this.visible
  }
}

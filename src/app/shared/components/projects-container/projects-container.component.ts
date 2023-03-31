import { Component, OnInit } from '@angular/core';
import { ProjectsInterface } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.scss']
})
export class ProjectsContainerComponent implements OnInit {


// @ts-ignore
  Projects : ProjectsInterface = []

  
  jsProjects = [
    {
      name : "Bookmark",
      codeUrl : "https://github.com/t0rn1k3/bookmark",
      pageUrl : 'https://t0rn1k3.github.io/bookmark/',
      imagePath : './assets/images/bookmark.PNG',
    },
    {
      name : "Movie-api",
      codeUrl : "https://github.com/t0rn1k3/movie-app",
      pageUrl : 'https://allmovies-app-api.netlify.app/',
      imagePath : './assets/images/movie.PNG',
    },
    {
      name : "Mp3 player",
      codeUrl : "https://github.com/t0rn1k3/mp3-player",
      pageUrl : 'https://t0rn1k3.github.io/mp3-player/',
      imagePath : './assets/images/mp3.PNG',
    },
    {
      name : "Redberry",
      codeUrl : "https://github.com/t0rn1k3/redberry-app",
      pageUrl : 'https://redberry-application.netlify.app/',
      imagePath : './assets/images/redberry.PNG',
    },
    {
      name : "Quizz",
      codeUrl : "https://github.com/t0rn1k3/quiz-game",
      pageUrl : 'https://t0rn1k3.github.io/quiz-game/',
      imagePath : './assets/images/quizz.PNG',
    },
    {
      name : "Form validation",
      codeUrl : "https://github.com/t0rn1k3/form-validation",
      pageUrl : 'https://t0rn1k3.github.io/form-validation/',
      imagePath : './assets/images/form.PNG',
    },
    {
      name : "Hangman",
      codeUrl : "https://github.com/t0rn1k3/HangMan",
      pageUrl : 'https://t0rn1k3.github.io/HangMan/',
      imagePath : './assets/images/hangman.PNG',
    },
  ]

  reactProjects = [
    {
      name : "Mipove.ge",
      codeUrl : "https://github.com/t0rn1k3/mipove",
      pageUrl : 'https://t0rn1k3.github.io/HangMan/',
      imagePath : './assets/images/mipove.PNG',
    }
  ]

  angularProjects = [
    {
      name : "Calculator",
      codeUrl : "https://github.com/t0rn1k3/calculator",
      pageUrl : 'https://t0rn1k3.github.io/calculator/',
      imagePath : './assets/images/calc.PNG',
    }
  ]

  phpProjects = [
    {
      name : "Github-api",
      codeUrl : "https://github.com/t0rn1k3/github-api",
      pageUrl : '',
      imagePath : './assets/images/github_api.PNG',
    }
  ]






  constructor() {}

  ngOnInit(): void {
  }



}

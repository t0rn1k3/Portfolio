import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    
  }

  
  // onLanguageChange(lang : string){
  //   this.translate.use(lang)
  //   console.log('works')
  // }

  options = [
    {
      option : 'en',
      value: 'en'
    },
    {
      option : 'ge',
      value : 'ge'
    }
  ]




}

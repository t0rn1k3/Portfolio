import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  visible : boolean = false


  isShown : boolean = true;

  constructor(){}

  ngOnInit(): void {
    
  }


  onShowSkill(){
    this.isShown = !this.isShown;
    this.visible = !this.visible
  }
}

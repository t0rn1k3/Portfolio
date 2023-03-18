import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  
  socIcons = [
    {
      text : 'Tornike Burjanadze',
      linkTo : 'https://www.linkedin.com/in/tornike-burjanadze-30a936229/',
      iconPath : './assets/icons/linkedin.png',
      imagePath : './assets/images/linkdn_img.jpg',
    },
    {
      text : 't0rn1k3',
      linkTo : 'https://github.com/t0rn1k3',
      iconPath : './assets/icons/github.png',
      imagePath : './assets/images/github_img.jpg',
    },
    {
      text : 'Tornike Burjanadze',
      linkTo : 'https://www.facebook.com/tornike.burjanadze.547',
      iconPath : './assets/icons/facebook.png',
      imagePath : './assets/images/fb_img.jpg',
    },
    {
      text : 'tornikebb',
      linkTo : 'https://www.instagram.com/tornikebb/',
      iconPath : './assets/icons/instagram.png',
      imagePath : './assets/images/inst_img.jpg',
    },
   
  ]
}

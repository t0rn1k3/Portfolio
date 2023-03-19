import { Component } from '@angular/core';
import {Event, RouterEvent, Router} from '@angular/router';
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  routeUrl: string = '';

  constructor(private router: Router) {
    router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      this.routeUrl = e.url;
    });
  }
}

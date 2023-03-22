import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'src/assets/i18n'

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  data: any = {}

  constructor( private http : HttpClient ) { }

  use(lang : string) : Promise<{}> {
    return new Promise<{}>(resolve => {
      const langPath = `src/assets/i18n/${lang || 'en'}`;

      this.http.get(langPath).subscribe(
        response =>  {
          this.data = response || {};
          resolve(this.data)
        },
        err => {
          this.data = {};
          resolve(this.data);
        }
      )
    })
  }
}

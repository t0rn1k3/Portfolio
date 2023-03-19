import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = 'https://mailthis.to/tornikeburjanadze2@gmail.com';

  constructor(
    private http : HttpClient
  ) { }

  sendMessage(input : any) {
    return this.http.post(this.url, input, {responseType : 'text'}).pipe(
      map(
        (response)=> {
          if (response) {
            return response;
          }
          return
        },
        (error : any) => {
          return error
        }
      )
    )
  }



}

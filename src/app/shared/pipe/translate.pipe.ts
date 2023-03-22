import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({ name : 'translate', pure: false }) 
export class translatePipe implements PipeTransform {
    constructor( private translate : TranslateService ){   }

    transform(value: any, args?: any): any{
        return null
    }
}
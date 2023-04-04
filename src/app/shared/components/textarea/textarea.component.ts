import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {

  @Input() placeHolder! : string;
  @Input() rows! : string;
  @Input() cols! : string;

}

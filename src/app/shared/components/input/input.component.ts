import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{

  @Input() type = 'text';
  @Input() placeHolder! : string ;
  @Input() icon! :  string ;
  @Input() labelText : string = '';
  @Input() control! : FormControl;
  @Input() isDirty = false;

  constructor() {}

  ngOnInit(): void {

  }

  onChange(){
    this.isDirty = true;
  }

  errorMessage() {
    if(this.control.hasError('required')){
      return 'This field is required *'
    }
    if(this.control.hasError('invalidEmailFormat')){
      return 'Email format is invalid'
    }
    if(this.control.hasError('minlength')) {
      return 'Minimun 2 symbols *'
    }
    return '';
  }
}

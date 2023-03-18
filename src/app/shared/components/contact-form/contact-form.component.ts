import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,  Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { EmailValidator } from '../../validators/email.validators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

public contactForm = this.formBuilder.group({
  fName : ["", [Validators.required]],
  lName : ["", [Validators.required]], 
  email: ["", [Validators.required, EmailValidator.validateFormat]]
})

loader = false;

constructor(
  private formBuilder : FormBuilder
){}

ngOnInit(): void {
  
}
}

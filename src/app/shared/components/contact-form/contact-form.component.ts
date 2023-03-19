import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,  Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { EmailService } from '../../services/email.service';
import { EmailValidator } from '../../validators/email.validators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  FormData! : FormGroup

public contactForm = this.formBuilder.group({
  fName : ["", [Validators.required]],
  lName : ["", [Validators.required]], 
  email: ["", [Validators.required, EmailValidator.validateFormat]]
})

submitted = false;
loader = false;

constructor(
  private formBuilder : FormBuilder,
  private contact : EmailService
){}

ngOnInit(): void {
  
}

onSubmit(contactForm : any){
  this.submitted = true
  if(this.contactForm.invalid){
    return;
  }
  this.loader = true;
  console.log(contactForm.value)
  this.contact.sendMessage(FormData)
  .subscribe(response => {
    location.href = ''
    console.log(response)
  }, error => {
    console.warn(error.responseText)
    console.log({error})
  }
  )
}

}

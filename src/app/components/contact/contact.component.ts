import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactFormGroup!: FormGroup;
  formSubmitAttempt: boolean = false;

  constructor(private _fb: FormBuilder, private _toastr:ToastrService) {
  }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.contactFormGroup = this._fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }
  getRequiredError(control: string) {
    if (this.contactFormGroup.controls[control].touched && this.contactFormGroup.controls[control].hasError('required') || (this.formSubmitAttempt && this.contactFormGroup.controls[control].hasError('required'))) {
      return true;
    }
    return false;
  }
  onSubmit() {
    this.formSubmitAttempt = true;
    if(this.contactFormGroup.valid){
      this._toastr.success("Thanx for Messaging !!!",this.contactFormGroup.value.name);
    }
  }
}

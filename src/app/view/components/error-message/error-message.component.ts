import { Component, Input, OnInit } from '@angular/core';
import { ValidationService } from 'src/helper/validation.service';

@Component({
  selector: 'mat-error[app-error-message]',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input() formControlField: any;

  constructor(

  ) { }

  ngOnInit(): void {
  }

  get errorMessage() {
    for (let propertyName in this.formControlField.errors) {
      if (
        this.formControlField.invalid && (this.formControlField.dirty || this.formControlField.touched) && 
        this.formControlField.errors.hasOwnProperty(propertyName)
      ) {
        return ValidationService.getValidatorErrorMessage(
          propertyName,
          this.formControlField.errors[propertyName]
        );
      }
    }

    return null;
  }

}

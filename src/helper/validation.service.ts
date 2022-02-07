import { Injectable } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";


@Injectable({
    providedIn: 'root'
})
export class ValidationService {
    constructor() {}

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config: any = {
            'required': 'This field is required.',
            'alphabetOnly': 'Only alphabet is allowed.',
        }
        return config[validatorName];
    }

    static tutorialName(control: FormControl) {
        if (control.value && control.value.match(/^[a-zA-Z ]*$/)) {
            return null;
        } else {
            return { 'alphabetOnly': true }
        }
    }
}
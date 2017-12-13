import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable()
export class FormControlValidatin {

    form: FormGroup;

    setFormulario(formulario: FormGroup) {
        this.form = formulario;
    }

    isFieldValid(field: string) {
        return !this.form.get(field).valid
            && this.form.get(field).touched;
    }

    displayFieldCss(field: string) {
        return {
            // 'has-error': this.isFieldValid(field),
            // 'has-feedback': this.isFieldValid(field),
            'text-danger': this.isFieldValid(field),
            'is-invalid': this.isFieldValid(field)
        };
    }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                console.log('passei');
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

}
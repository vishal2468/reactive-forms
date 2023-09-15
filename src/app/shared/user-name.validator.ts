import { AbstractControl } from "@angular/forms";

export function forbiddenNameValdator(control: AbstractControl): { [key: string]: any } | null {
    const forbidden = /admin/.test(control.value);
    console.log(control.value)
    return forbidden ? { 'forbiddenName': { value: control.value } } : null;

}
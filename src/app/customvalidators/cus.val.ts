import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function usernameValidator(control: AbstractControl):{[key: string]: any} | null{
//     const forbidden = /admin/.test(control.value);
//     return forbidden?{'forbiddenName':{value:control.value}}:null;
// }

///by using above code we can detect only "admin" value
//to overcome that use factory method isss arrow method

export function usernameValidator(forbiddenName:RegExp):ValidatorFn{
    return (control: AbstractControl):{[key: string]: any} | null => {
        const forbidden = forbiddenName.test(control.value);
        return forbidden?{'forbiddenName':{value:control.value}}:null;
    }
}


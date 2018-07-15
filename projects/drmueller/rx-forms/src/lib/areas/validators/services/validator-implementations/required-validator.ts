import { AbstractControl, ValidatorFn } from '@angular/forms';

import { IValidator, IValidatorFunctionResult } from '..';

export class RequiredValidator implements IValidator {
  public static key = 'required';

  public createFunc(): ValidatorFn {
    return (c: AbstractControl): IValidatorFunctionResult => {
      let result: any = null;
      if (this.checkIfValueIsEmptyNullorUndefined(c.value)) {
        result = {};
        result[this.key] = true;
      }

      return result;
    };
  }

  public get defaultErrorMessage(): string {
    return 'Value is required.';
  }

  public initialize() {
  }

  public get key(): string {
    return RequiredValidator.key;
  }

  private checkIfValueIsEmptyNullorUndefined(value: any): boolean {
    if (!value) {
      return true;
    }

    if (value === '') {
      return true;
    }

    return false;
  }
}

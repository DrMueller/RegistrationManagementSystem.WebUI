import { FormGroup } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';


import { FormValidationService } from '../../form-validation';
import { IFormWatchingBuilder, IRxFormBuilder } from '../interfaces';

export class FormWatchingBuilder implements IFormWatchingBuilder {
  private debounceMilliseconds = 0;

  constructor(
    private formGroup: FormGroup,
    private formValidationService: FormValidationService,
    private formBuildingService: IRxFormBuilder) {
  }

  withDebounceTime(debounceMilliseconds: number): IFormWatchingBuilder {
    this.debounceMilliseconds = debounceMilliseconds;
    return this;
  }

  buildFormWatcher(): IRxFormBuilder {
    this.formGroup.valueChanges.pipe(
      debounceTime(this.debounceMilliseconds)
    ).subscribe(() => {
      this.formValidationService.validate();
    });

    return this.formBuildingService;
  }

  // buildFormWatcher(): IRxFormBuilder {
  //   this.formGroup.valueChanges.subscribe(() => {
  //     this.formValidationService.validate();
  //   });

  //   return this.formBuildingService;
  // }
}

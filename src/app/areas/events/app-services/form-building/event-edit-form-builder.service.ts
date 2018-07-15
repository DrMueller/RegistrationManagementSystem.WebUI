import { Injectable } from '@angular/core';

import {
  FormValidationService, FormWithValidation, RxFormBuilder, ValidatorFactoryService
} from 'projects/drmueller/rx-forms/src/public_api';

@Injectable()
export class EventEditFormBuilderService {

  constructor(
    private formValidationService: FormValidationService,
    private formBuilder: RxFormBuilder,
    private validatorFactory: ValidatorFactoryService
  ) { }

  public buildForm(): FormWithValidation {
    return this.formBuilder.startBuildingFormGroup(this.formValidationService)
      .withControl('eventName')
      .withModelBinding('eventName')
      .withValidation(this.validatorFactory.required())
      .buildValidationKeyErrorMap()
      .buildControl()
      .withFormValidationWatcher()
      .withDebounceTime(500)
      .buildFormWatcher()
      .buildForm();
  }
}

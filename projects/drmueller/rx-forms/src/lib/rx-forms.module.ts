import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormValidationService } from './areas/form-validation';
import { RxFormBuilder } from './areas/form-building';
import { ValidatorFactoryService } from './areas/validators';
import { ValidatorProviderFactory } from './areas/validators/provisioning';

import * as comp from './areas/form-validation/components';

import {
  MatInputModule,
  MatFormFieldModule,
} from '@angular/material';


@NgModule({
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    comp.FormValidationErrorDisplayComponent,
    comp.FormControlWithValidationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [
    comp.FormValidationErrorDisplayComponent,
    comp.FormControlWithValidationComponent
  ]
})

export class RxFormsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: RxFormsModule,
      providers: [
        ValidatorProviderFactory.ValidatorProviders,
        RxFormBuilder,
        FormValidationService,
        ValidatorFactoryService
      ]
    };
  }
}

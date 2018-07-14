import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../infrastructure/shell/material';

import * as components from './components';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [
    components.HelloComponent,
    components.HomeComponent
  ]
})

export class HomeModule { }

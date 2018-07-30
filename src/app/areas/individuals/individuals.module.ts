import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualsRoutingModule } from './individuals-routing.module';
import { IndividualsComponent } from './components/individuals/individuals.component';
import { IndividualEditComponent } from './components/individual-edit/individual-edit.component';
import { IndividualsOverviewComponent } from './components/individuals-overview/individuals-overview.component';

@NgModule({
  imports: [
    CommonModule,
    IndividualsRoutingModule
  ],
  declarations: [IndividualsComponent, IndividualEditComponent, IndividualsOverviewComponent]
})
export class IndividualsModule { }

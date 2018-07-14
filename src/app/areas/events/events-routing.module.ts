import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as components from './components';

const routes: Routes = [
  {
    path: '',
    component: components.EventsComponent,
    children: [
      {
        path: '', redirectTo: 'overview', pathMatch: 'full'
      },
      {
        path: 'overview',
        component: components.EventsOverviewComponent
      },
      {
        path: ':eventId',
        component: components.EventEditComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }

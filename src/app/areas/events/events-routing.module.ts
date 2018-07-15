import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as components from './components';
import * as resolvers from './app-services/resolvers';

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
        component: components.EventEditComponent,
        resolve: { eventEditDto: resolvers.EventEditResolver }
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }


import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsOverviewComponent } from './events-overview.component';

describe('EventsOverviewComponent', () => {
  let component: EventsOverviewComponent;
  let fixture: ComponentFixture<EventsOverviewComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

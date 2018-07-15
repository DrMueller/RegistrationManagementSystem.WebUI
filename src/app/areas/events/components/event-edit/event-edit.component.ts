import { Component, OnInit } from '@angular/core';

import { EventEditFormBuilderService } from '../../app-services/form-building';
import { FormWithValidation } from 'projects/drmueller/rx-forms/src/lib';
import { ActivatedRoute } from '@angular/router';
import { EventEditService, EventsNavigationService } from '../../app-services';
import { EventEditDto } from '../../dtos';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})

export class EventEditComponent implements OnInit {
  public dataForm: FormWithValidation;
  private _eventEditDto: EventEditDto;

  public constructor(
    private route: ActivatedRoute,
    private formBuilder: EventEditFormBuilderService,
    private eventEditService: EventEditService,
    private eventsNavigationService: EventsNavigationService
  ) { }

  public ngOnInit() {
    this.dataForm = this.formBuilder.buildForm();

    this.route.data.subscribe(data => {
      this._eventEditDto = <EventEditDto>data['eventEditDto'];
      this.dataForm.setControlDataFromModel(this._eventEditDto);
    });
  }

  public async saveEventAsync(): Promise<void> {
    this.dataForm.setModelFromControls(this._eventEditDto);
    await this.eventEditService.saveAsync(this._eventEditDto);
    this.eventsNavigationService.navigateToOverview();
  }

  public cancelEditing(): void {
    this.eventsNavigationService.navigateToOverview();
  }
}

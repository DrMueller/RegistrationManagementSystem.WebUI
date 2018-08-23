import { Component, OnInit } from '@angular/core';

import { AppNavigationEntry } from '../../models';
import { AppNavigationEntryFactoryService } from '../../services';

import { AnimationServant } from './servants';

import { EnvironmentService } from 'src/app/infrastructure/core-services/environment';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss'],
  animations: AnimationServant.getAnimations()
})

export class AppNavigationComponent implements OnInit {
  public appNavigationEntries: AppNavigationEntry[] = [];
  public isSidebarOpen = false;

  public constructor(
    private appNavigationEntriesFactory: AppNavigationEntryFactoryService,
    private environmentService: EnvironmentService) {
  }

  public get appDescription(): string {
    return this.environmentService.appInfo.appDescription;
  }

  public sidebarOpenChanged(isOpen: boolean): void {
    this.isSidebarOpen = isOpen;
  }

  public ngOnInit(): void {
    this.appNavigationEntries = this.appNavigationEntriesFactory.createEntries();
  }
}

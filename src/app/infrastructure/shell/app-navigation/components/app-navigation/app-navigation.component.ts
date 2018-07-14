import { Component, OnInit } from '@angular/core';

import { AppNavigationEntry } from '../../models';
import { AppNavigationEntryFactoryService } from '../../services';

import { AnimationServant } from './servants';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss'],
  animations: AnimationServant.getAnimations()
})
export class AppNavigationComponent implements OnInit {
  public appNavigationEntries: AppNavigationEntry[] = [];
  public isSidebarOpen = false;

  constructor(private appNavigationEntriesFactory: AppNavigationEntryFactoryService) {
  }

  public sidebarOpenChanged(isOpen: boolean): void {
    this.isSidebarOpen = isOpen;
  }

  public ngOnInit(): void {
    this.appNavigationEntries = this.appNavigationEntriesFactory.createEntries();
  }
}

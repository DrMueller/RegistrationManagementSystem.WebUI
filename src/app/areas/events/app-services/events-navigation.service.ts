import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventsNavigationService {
  constructor(private router: Router) { }

  public navigateToOverview(): void {
    this.router.navigate(['/events']);
  }

  public navigateToEdit(id: string): void {
    this.router.navigate(['/events', id]);
  }
}

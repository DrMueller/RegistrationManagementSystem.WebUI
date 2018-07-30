import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IndividualsNavigationService {
  public constructor(private router: Router) { }

  public navigateToOverview(): void {
    this.router.navigate(['/individuals']);
  }

  public navigateToEdit(id: string): void {
    this.router.navigate(['/individuals', id]);
  }
}

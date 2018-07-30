import { Injectable } from '@angular/core';

import { IndividualRepositoryService } from '../../../shared-domain/data-access';

import { IndividualOverviewEntryDto } from '../dtos';

@Injectable({
  providedIn: 'root'
})
export class IndividualsOverviewDataService {
  public constructor(private individualRepository: IndividualRepositoryService) { }

  public async loadOverviewEntriesAsync(): Promise<Array<IndividualOverviewEntryDto>> {
    const individuals = await this.individualRepository.loadAllAsync();

    return individuals.map(individual => {
      return new IndividualOverviewEntryDto(
        individual.id,
        individual.firstName,
        individual.lastname,
        individual.emailAddress.address);
    });
  }

  public async deleteIndividualAsync(id: string): Promise<void> {
    await this.individualRepository.deleteAsync(id);
  }
}

export class IndividualOverviewEntryDto {
  constructor(
    public readonly id: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly emailAddress: string) { }
}

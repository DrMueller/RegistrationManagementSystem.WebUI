import { CoreServicesModule } from './core-services.module';

describe('CoreServicesModule', () => {
  let coreServicesModule: CoreServicesModule;

  beforeEach(() => {
    coreServicesModule = new CoreServicesModule();
  });

  it('should create an instance', () => {
    expect(coreServicesModule).toBeTruthy();
  });
});

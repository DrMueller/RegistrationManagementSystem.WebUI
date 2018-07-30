import { IndividualsModule } from './individuals.module';

describe('IndividualsModule', () => {
  let individualsModule: IndividualsModule;

  beforeEach(() => {
    individualsModule = new IndividualsModule();
  });

  it('should create an instance', () => {
    expect(individualsModule).toBeTruthy();
  });
});

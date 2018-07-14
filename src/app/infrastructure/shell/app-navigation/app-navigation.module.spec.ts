import { AppNavigationModule } from './app-navigation.module';

describe('AppNavigationModule', () => {
  let appNavigationModule: AppNavigationModule;

  beforeEach(() => {
    appNavigationModule = new AppNavigationModule();
  });

  it('should create an instance', () => {
    expect(appNavigationModule).toBeTruthy();
  });
});

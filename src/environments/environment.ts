// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { AdalConfiguration, Endpoint } from 'projects/drmueller/security/src/public_api';


export const environment = {
  activateSecurity: true,
  production: false,
  coreServiceBaseUrl: 'http://localhost:2750/api/',
  adalConfig: <AdalConfiguration>{
    tenant: 'novacapta.de',
    clientId: '297fc587-359a-4ea5-9f2d-4b36aef9c3a1',
    redirectUri: 'http://localhost:4200/',
    endpoints: [
      new Endpoint('https://localhost:44392/', '297fc587-359a-4ea5-9f2d-4b36aef9c3a1')
    ]
  },
  appInfo: {
    appVersion: '1.3.3.7',
    appName: 'RMS',
    appDescription: 'Registration Management System'
  }
};

const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'doctors',

  exposes: {
    './DoctorModule': './apps/doctors/src/app/remote/remote.module.ts',
    './DoctorRoute': './apps/doctors/src/app/remote/remote.routes.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/platform-browser': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/platform-browser-dynamic': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@apollo/client': { singleton: true, requiredVersion: 'auto' },
    'subscriptions-transport-ws': { singleton: true, requiredVersion: 'auto' },
    "relay-runtime": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@testing-library/react": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'apollo-angular': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'apollo-angular/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },


  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});

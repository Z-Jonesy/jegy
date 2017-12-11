// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    baseUrl: 'https://jegybazar-203f0.firebaseio.com',
    registrationUrl: ' https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser',
    loginUrl: ' https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword',
    apiKey: 'AIzaSyD7sKNXe1DkvVYxXsXOxUw8Qq450b4jR5o',
    authDomain: 'jegybazar-203f0.firebaseapp.com',
    databaseURL: 'https://jegybazar-203f0.firebaseio.com',
    projectId: 'jegybazar-203f0',
    storageBucket: 'jegybazar-203f0.appspot.com',
    messagingSenderId: '280419090188'
  }
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBB-Id9EBdB2gnTprmlzmZHv2XxJ2ZxnxU",
    authDomain: "d3app-865c2.firebaseapp.com",
    databaseURL: "https://d3app-865c2.firebaseio.com",
    projectId: "d3app-865c2",
    storageBucket: "",
    messagingSenderId: "264459064376"
  },
  googleMapsApi:'AIzaSyCYH2t8t6OKJcPtPSXiMV23OBStG78msCs'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

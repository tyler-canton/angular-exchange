// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiHost:
    'https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&answers=1&accepted=True',
  worker: (brand: string) => console.log(`${brand}`),
  apiHostAnswer: (id: number) =>
    `https://api.stackexchange.com/2.2/answers/${id}?order=desc&sort=activity&site=stackoverflow&filter=!b1MMEr*sm-hgcX `
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

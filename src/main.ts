import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  //bootstrapModule:
  //The bootstrap property or key of the NgModule decorator specifies
  //which component should be loaded by Angular when the app-level module loads

  // NgModules:
  // NgModules are Angular's
  // way to group blocks of code that have related domain, workflow, or capabilities.

//Injectable:
//The @Injectable() decorator defines a class as a service in Angular
// and allows Angular to inject it into a component as a dependency.

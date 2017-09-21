import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

<<<<<<< HEAD
import { AppModule } from './app/app.module';
=======
import { AppModule } from './app/components/app.module';
>>>>>>> 9905c514b4c1c27d3943afc5dcf240141d36e45d
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideToastr(), provideAnimationsAsync('noop'), provideAnimationsAsync('noop'), provideAnimationsAsync('noop'), provideFirebaseApp(() => initializeApp({ "projectId": "proyecto-final-9469a", "appId": "1:668310300478:web:a24d06bc9ef7d61f842e6f", "storageBucket": "proyecto-final-9469a.appspot.com", "apiKey": "AIzaSyAAI47_h6GumAc3s85LE4flNrKkaoSY5TI", "authDomain": "proyecto-final-9469a.firebaseapp.com", "messagingSenderId": "668310300478" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })]
};

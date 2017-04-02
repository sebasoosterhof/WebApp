// Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

// Material
import { MaterialModule } from '@angular/material';

// Hammer
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyC-7oulCI6TY5-BIULxzu0YWB4IR5Kgl7U',
  authDomain: 'eastcourt.nl',
  databaseURL: 'https://eastcourt-62fa1.firebaseio.com',
  storageBucket: 'eastcourt-62fa1.appspot.com',
  messagingSenderId: '280928061969'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    routes,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
